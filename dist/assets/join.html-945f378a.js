const t=JSON.parse('{"key":"v-db441b2c","path":"/string/join.html","title":"最优雅的Java字符串String拼接是哪种方式？","lang":"zh-CN","frontmatter":{"title":"最优雅的Java字符串String拼接是哪种方式？","shortTitle":"String拼接","category":["Java核心"],"tag":["数组&字符串"],"description":"Java字符串拼接是日常编程中的常见任务。本文详细介绍了Java中不同的字符串拼接方法，包括+号操作符、String.concat、StringBuilder","head":[["meta",{"name":"keywords","content":"Java,字符串,String,字符串拼接,java字符串拼接,java string拼接"}],["meta",{"property":"og:url","content":"https://javabetter.cn/string/join.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"最优雅的Java字符串String拼接是哪种方式？"}],["meta",{"property":"og:description","content":"Java字符串拼接是日常编程中的常见任务。本文详细介绍了Java中不同的字符串拼接方法，包括+号操作符、String.concat、StringBuilder"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-24T02:39:04.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"数组&字符串"}],["meta",{"property":"article:modified_time","content":"2023-04-24T02:39:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"最优雅的Java字符串String拼接是哪种方式？\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-24T02:39:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":3,"title":"javap 探究+号操作符拼接字符串的本质","slug":"javap-探究-号操作符拼接字符串的本质","link":"#javap-探究-号操作符拼接字符串的本质","children":[]},{"level":3,"title":"为什么要编译为 StringBuilder.append","slug":"为什么要编译为-stringbuilder-append","link":"#为什么要编译为-stringbuilder-append","children":[]},{"level":3,"title":"append方法源码解析","slug":"append方法源码解析","link":"#append方法源码解析","children":[]},{"level":3,"title":"String.concat 拼接字符串","slug":"string-concat-拼接字符串","link":"#string-concat-拼接字符串","children":[]},{"level":3,"title":"String.join 拼接字符串","slug":"string-join-拼接字符串","link":"#string-join-拼接字符串","children":[]},{"level":3,"title":"StringUtils.join 拼接字符串","slug":"stringutils-join-拼接字符串","link":"#stringutils-join-拼接字符串","children":[]}],"git":{"createdTime":1626159673000,"updatedTime":1682303944000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":13},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":5}]},"readingTime":{"minutes":8.8,"words":2640},"filePathRelative":"string/join.md","localizedDate":"2021年7月13日","excerpt":"<h1> 4.10 String拼接</h1>\\n<p>“哥，你让我看的《<a href=\\"https://javabetter.cn/pdf/ali-java-shouce.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Java 开发手册</a>》上有这么一段内容：循环体内，拼接字符串最好使用 StringBuilder 的 <code>append()</code> 方法，而不是 + 号操作符。这是为什么呀？”三妹疑惑地问。</p>\\n<p>“其实这个问题，我们之前已经<a href=\\"https://javabetter.cn/string/builder-buffer.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">聊过</a>。”我慢吞吞地回答道，“不过，三妹，哥今天来给你深入地讲讲。”</p>"}');export{t as data};
