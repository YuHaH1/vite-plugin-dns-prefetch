import type { PluginOption } from 'vite'
import urlRegex from 'url-regex'
import htmlParser from 'node-html-parser'
import { PLUGINNAME, httpsUrlRegex } from '../utils/constant'
import type { IUserOptions } from '../types'
import { getExtension } from '../utils'
import { init } from './init'
const urlSet = new Set()

const VitePluginDnsPrefetch = (UserOptions: IUserOptions): PluginOption => {
  const options = init(UserOptions)
  const userAddDnsUrl = options.addDnsUrl
  if (userAddDnsUrl?.length) { // 将用户指定URL加入DNS解析
    userAddDnsUrl.forEach((url) => {
      if (userAddDnsUrl?.length < options.limit && !options.excludeDnsPrefetchUrl.includes(url))
        urlSet.add(url)
    })
  }
  return {
    name: PLUGINNAME,
    apply: 'build', // 生产环境
    transform(code: string, id: string) {
      const extension = getExtension(id)
      if (urlSet.size > options.limit) {
        console.warn(`Currently,The preload limit:${urlSet.size} has been exceeded. If you need to expand the capacity of dns-prefetch, add limit in options`)
        return code
      }
      // 如果解析该文件
      if (options.parseFile.includes(extension)) {
        const matchURLs = code.match(urlRegex({ strict: true }))
        if (matchURLs) {
          matchURLs.forEach((url) => {
            const match = url.match(httpsUrlRegex)
            if (match) {
              const hasExcludeUrl = options.excludeDnsPrefetchUrl.includes(match[0])
              match && !hasExcludeUrl && urlSet.add(match[0])
            }
          })
        }
      }
      return code
    },
    transformIndexHtml(html: string) {
      const prefetchNode = [...urlSet].map(url => `\n    <link rel="dns-prefetch" href="${url}"/>`).join('')
      const htmlNode = htmlParser.parse(html)
      const head = htmlNode.querySelector('head')
      head?.insertAdjacentHTML('afterbegin', prefetchNode)
      const modifiedHtml = htmlNode.toString()
      return modifiedHtml
    },
  }
}

export { VitePluginDnsPrefetch }

export default VitePluginDnsPrefetch
