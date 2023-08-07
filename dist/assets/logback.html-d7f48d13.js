const t=JSON.parse('{"key":"v-c65767f6","path":"/springboot/logback.html","title":"Spring Boot 整合 Logback 定制日志框架","lang":"zh-CN","frontmatter":{"category":["Java企业级开发"],"tag":["Spring Boot","Redis"],"title":"Spring Boot 整合 Logback 定制日志框架","description":"关于 Logback 日志系统是一个线上项目必备的素质之一，代表性的日志框架 Log4j、SLF4J、Logback 这哥仨竟然是亲兄弟，他们有一个亲爹，那就是巨佬 Ceki Gulcu。 由于 Spring Boot 的默认日志框架选用的 Logback，再加上 Log4j2 之前爆过严重的漏洞，所以我们这次就只关注 Logback。 1）Logback 非常自然地实现了 SLF4J，不需要像 Log4j 和 JUL 那样加一个适配层。","head":[["meta",{"property":"og:url","content":"https://javabetter.cn/springboot/logback.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"Spring Boot 整合 Logback 定制日志框架"}],["meta",{"property":"og:description","content":"关于 Logback 日志系统是一个线上项目必备的素质之一，代表性的日志框架 Log4j、SLF4J、Logback 这哥仨竟然是亲兄弟，他们有一个亲爹，那就是巨佬 Ceki Gulcu。 由于 Spring Boot 的默认日志框架选用的 Logback，再加上 Log4j2 之前爆过严重的漏洞，所以我们这次就只关注 Logback。 1）Logback 非常自然地实现了 SLF4J，不需要像 Log4j 和 JUL 那样加一个适配层。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-25T05:40:29.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"Spring Boot"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:modified_time","content":"2023-02-25T05:40:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring Boot 整合 Logback 定制日志框架\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-02-25T05:40:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":2,"title":"关于 Logback","slug":"关于-logback","link":"#关于-logback","children":[]},{"level":2,"title":"直接上手","slug":"直接上手","link":"#直接上手","children":[]},{"level":2,"title":"编程喵实战项目的日志案例分析","slug":"编程喵实战项目的日志案例分析","link":"#编程喵实战项目的日志案例分析","children":[]},{"level":2,"title":"使用 lombok 进行日志记录","slug":"使用-lombok-进行日志记录","link":"#使用-lombok-进行日志记录","children":[]},{"level":2,"title":"源码路径","slug":"源码路径","link":"#源码路径","children":[]}],"git":{"createdTime":1653092056000,"updatedTime":1677303629000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":6}]},"readingTime":{"minutes":7.8,"words":2340},"filePathRelative":"springboot/logback.md","localizedDate":"2022年5月21日","excerpt":"<h2> 关于 Logback</h2>\\n<p>日志系统是一个线上项目必备的素质之一，代表性的日志框架 Log4j、SLF4J、Logback 这哥仨竟然是亲兄弟，他们有一个亲爹，那就是巨佬 Ceki Gulcu。</p>\\n<p>由于 Spring Boot 的默认日志框架选用的 Logback，再加上 Log4j2 之前爆过严重的漏洞，所以我们这次就只关注 Logback。</p>\\n<p>1）Logback 非常自然地实现了 SLF4J，不需要像 Log4j 和 JUL 那样加一个适配层。</p>\\n<figure><img src=\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/logback-67c983bf-101d-48cc-80da-3cb031d7407b.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>","autoDesc":true}');export{t as data};
