import type { IOptions } from '../types'

const DEFAULTOPTIONS: IOptions = {
  limit: 6,
  parseFile: '.ts',
  addDnsUrl: [],
  excludeDnsPrefetchUrl: [],
}
const httpsUrlRegex = /https?:\/\/[^/]*/ig

const PLUGINNAME = 'vite-plugin-dns-prefetch'

export { httpsUrlRegex, PLUGINNAME, DEFAULTOPTIONS }
