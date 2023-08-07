const t=JSON.parse('{"key":"v-61f986ee","path":"/nice-article/weixin/weismylhttphyyrpc.html","title":"为什么有了HTTP还要有RPC？","lang":"zh-CN","frontmatter":{"title":"为什么有了HTTP还要有RPC？","shortTitle":"为什么有了HTTP还要有RPC？","description":"大家好，我是黎杜，今天我们就来聊一聊为什么在我们的分布式和微服务系统中，有HTTP还要有RCP呢？这两者又有","author":"非科班的科班","category":["微信公众号"],"head":[["meta",{"property":"og:url","content":"https://javabetter.cn/nice-article/weixin/weismylhttphyyrpc.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"为什么有了HTTP还要有RPC？"}],["meta",{"property":"og:description","content":"大家好，我是黎杜，今天我们就来聊一聊为什么在我们的分布式和微服务系统中，有HTTP还要有RCP呢？这两者又有"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-28T03:42:38.000Z"}],["meta",{"property":"article:author","content":"非科班的科班"}],["meta",{"property":"article:modified_time","content":"2023-04-28T03:42:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"为什么有了HTTP还要有RPC？\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-28T03:42:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"非科班的科班\\"}]}"]]},"headers":[{"level":3,"title":"HTTP 的优点和适用场景","slug":"http-的优点和适用场景","link":"#http-的优点和适用场景","children":[]},{"level":3,"title":"HTTP 的适用场景主要包括：","slug":"http-的适用场景主要包括","link":"#http-的适用场景主要包括","children":[]},{"level":3,"title":"在 Java 中以及微服务中实现 HTTP 的方式","slug":"在-java-中以及微服务中实现-http-的方式","link":"#在-java-中以及微服务中实现-http-的方式","children":[]},{"level":3,"title":"RPC 的优点和适用场景","slug":"rpc-的优点和适用场景","link":"#rpc-的优点和适用场景","children":[]},{"level":3,"title":"RPC 的适用场景主要包括：","slug":"rpc-的适用场景主要包括","link":"#rpc-的适用场景主要包括","children":[]},{"level":3,"title":"为什么在一些场景下需要使用 RPC","slug":"为什么在一些场景下需要使用-rpc","link":"#为什么在一些场景下需要使用-rpc","children":[]}],"git":{"createdTime":1682653358000,"updatedTime":1682653358000,"contributors":[{"name":"沉默王二","email":"www.qing_gee@163.com","commits":1}]},"readingTime":{"minutes":23.38,"words":7015},"filePathRelative":"nice-article/weixin/weismylhttphyyrpc.md","localizedDate":"2023年4月28日","excerpt":"<p>大家好，我是二哥，今天我们就来聊一聊为什么在分布式和微服务系统中，有 HTTP 还要有 RCP，这两者又有什么区别？在面试中也会经常问到，而且会结合着项目来问。比如说，问你项目中用的是哪种通信技术方案？</p>\\n<p>在计算机科学领域，HTTP 和 RPC 都是常用的协议。HTTP 协议是一种基于请求和响应模式的协议，用于在 Web 上进行数据传输。而 RPC 协议则是远程过程调用协议，它允许一个程序在另一个计算机上执行函数。</p>\\n<p>虽然 HTTP 和 RPC 都可以实现跨进程通信，但它们各自的特点使它们适用于不同的场景。本文将探讨为什么在一些场景下需要使用 RPC，即使 HTTP 也可以实现同样的功能。</p>"}');export{t as data};