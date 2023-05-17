# vite-plugin-dns-prefetch



# install

~~~shell
npm install vite-plugin-dns-prefetch -D
~~~

# Usage

* `limit` Defines the upper limit for dns preresolution
* `parseFile`：Define which files to be parsed,vue and reac will be build a js or ts file.Default we will find .ts
* `addDnsUrl`:  Define some dns-url to be added dns-prefetch
* `excludeDnsPrefetchUrl`: exclude some url 

~~~ js
plugins: [VitePluginDnsPrefetch({
  limit: 10,default:10
  parseFile: '.ts' | '.js', default:.ts
  addDnsUrl: ['https://www.nodeapp.cn/'],default:[]
  excludeDnsPrefetchUrl: ['https://vuejs.org'],default:[]
})]
~~~