# vite-plugin-dns-prefetch



# install

~~~shell
npm install vite-plugin-dns-prefetch -D
~~~

# Usage

* `limit` Defines the upper limit for dns preresolution
* `parseFile`：Define which files to be parsed
* `addDnsUrl`:  Define some dns-url to be added dns-prefetch
* `excludeDnsPrefetchUrl`: exclude some url 

~~~ js
 plugins: [VitePluginDnsPrefetch({
    limit: 10,
    parseFile: ['.ts'],
    addDnsUrl: ['https://www.nodeapp.cn/'],
    excludeDnsPrefetchUrl: ['https://vuejs.org'],
  })
~~~