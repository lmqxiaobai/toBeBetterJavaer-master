import{_ as b}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o,c as p,a as e,d as r,b as a,e as i}from"./app-1c5b5ce3.js";const c={},l={href:"https://mp.weixin.qq.com/s/e5Q4aJCX9xccTzBBGepx4g",target:"_blank",rel:"noopener noreferrer"},s=e("strong",null,"940 多名",-1),g={href:"https://mp.weixin.qq.com/s/e5Q4aJCX9xccTzBBGepx4g",target:"_blank",rel:"noopener noreferrer"},d=i('<p>今天给大家分享一个二哥前同事接的线上娃娃机项目，希望把这个真实案例分享出来后大家能学到点东西，比如硬件怎么通过手机APP操控？软件怎么和硬件配合？在线娃娃机方案是什么样的等等。</p><h2 id="开发人员-2人" tabindex="-1"><a class="header-anchor" href="#开发人员-2人" aria-hidden="true">#</a> 开发人员（2人）</h2><ul><li>前端 uniapp APP</li><li>后端 技术栈 springboot</li><li>开发周期40天</li><li>开发人数 2人 1软1硬</li><li>整体费用是8万(硬件3万软件5万)</li><li>走的公司合同</li><li>云服务器1台 4核8G</li></ul><p>技术选型</p><ul><li>核心框架：Spring Boot</li><li>数据库连接池：Druid</li><li>数据库：mysql</li><li>MQTT <strong>Apollo</strong></li><li>APP uniapp</li></ul><h3 id="_1-apollo下载" tabindex="-1"><a class="header-anchor" href="#_1-apollo下载" aria-hidden="true">#</a> 1.Apollo下载</h3>',6),f={href:"http://activemq.apache.org/apollo/download.html",target:"_blank",rel:"noopener noreferrer"},h=i('<p>MQTT是一个基于客户端-服务器的消息发布/订阅传输协议</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-chengxwwjdxswwjxmkfzjt-9ee4dd12-44cc-41c9-b259-e5bb10ca070b.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="详细需求" tabindex="-1"><a class="header-anchor" href="#详细需求" aria-hidden="true">#</a> 详细需求</h3><p>我们也是在原有盲盒项目上改造的，从头开发真要累死，功能还是满多的，包含了电商（积分商城）的所有功能</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-chengxwwjdxswwjxmkfzjt-0101ec0d-f332-4b83-a452-df66bb1385b4.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="项目背景" tabindex="-1"><a class="header-anchor" href="#项目背景" aria-hidden="true">#</a> 项目背景</h2><p>由于疫情影响，线下的娃娃机如今搬到了线上。所谓在线抓娃娃，是通过手机APP操控线下真实的娃娃机。这个娃娃机可能安置在某个仓库内，而你随时随地都可玩，摄像头会直播抓取过程，二哥发现这几年疫情会导致产生很多类似的在线游戏诞生。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-chengxwwjdxswwjxmkfzjt-cdd6cacf-4762-45e1-8e27-26987fc3008e.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-chengxwwjdxswwjxmkfzjt-9cd8f583-88fc-4037-b4bf-8861ca484af4.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-chengxwwjdxswwjxmkfzjt-8ec43e5c-a0b2-4260-804f-e5210ee5df6e.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="远程操控" tabindex="-1"><a class="header-anchor" href="#远程操控" aria-hidden="true">#</a> 远程操控</h2><p>这里重点把硬件改造点列下：</p><ul><li>定制控制板，在原有的硬件设备上增加一个4G通讯模块，这部分是硬件兄弟负责</li><li>摄像头，需要现场直播娃娃机这里采用的海康威视的360度全景摄像头</li></ul><p>简单描述下整个消息链路，涉及硬件部分大家有兴趣可以自己了解下串口协议：</p><p>APP 后端服务----》TCP（MQTT服务器）-----〉 网络通讯（4G模块）-----》调用硬件的串口---〉最终操作娃娃机</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-chengxwwjdxswwjxmkfzjt-ef471fb4-269e-493f-ad06-d11610d02e74.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="抓娃娃机串口通信协议" tabindex="-1"><a class="header-anchor" href="#抓娃娃机串口通信协议" aria-hidden="true">#</a> 抓娃娃机串口通信协议</h2><p>下面是娃娃机硬件本身的 串口接口的部分文档内容</p><p>我们后端构建的报文数据格式就是根据本文档构建的</p><p>1、<strong>向左移动机械抓（指令ID：03）</strong></p><p>开始码<br> |数据长度<br> |指令ID<br> |指令类型<br> |指令数据<br> |校验位<br> |结束码<br> |<br> 8A<br> |03<br> |03<br> |01<br> |无<br> |07<br> |55<br> |</p><p>示例：8A 03 03 01 07 55</p><p>下位机应答：</p><p>开始码<br> |数据长度<br> |指令ID<br> |指令类型<br> |指令数据<br> |校验位<br> |结束码<br> |<br> 8A<br> |03<br> |03<br> |02<br> |无<br> |08<br> |55<br> |</p><p>示例：8A 03 03 02 08 55</p><p>2、<strong>向右移动机械抓（指令ID：04）</strong></p><p>开始码<br> |数据长度<br> |指令ID<br> |指令类型<br> |指令数据<br> |校验位<br> |结束码<br> |<br> 8A<br> |03<br> |04<br> |01<br> |无<br> |08<br> |55<br> |</p><p>示例：8A 03 04 01 08 55</p><p>下位机应答：</p><p>开始码<br> |数据长度<br> |指令ID<br> |指令类型<br> |指令数据<br> |校验位<br> |结束码<br> |<br> 8A<br> |03<br> |04<br> |02<br> |无<br> |09<br> |55<br> |</p><p>示例：8A 03 04 02 09 55</p><p>3、<strong>向前移动机械抓（指令ID：05）</strong></p><p>开始码<br> |数据长度<br> |指令ID<br> |指令类型<br> |指令数据<br> |校验位<br> |结束码<br> |<br> 8A<br> |03<br> |05<br> |01<br> |无<br> |09<br> |55<br> |</p><p>示例：8A 03 05 01 09 55</p><p>下位机应答：</p><p>开始码<br> |数据长度<br> |指令ID<br> |指令类型<br> |指令数据<br> |校验位<br> |结束码<br> |<br> 8A<br> |03<br> |05<br> |02<br> |无<br> |0A<br> |55<br> |</p><p>示例：8A 03 05 02 0A 55</p><p>4、<strong>向后移动机械抓（指令ID：06）</strong></p><p>开始码<br> |数据长度<br> |指令ID<br> |指令类型<br> |指令数据<br> |校验位<br> |结束码<br> |<br> 8A<br> |03<br> |06<br> |01<br> |无<br> |0A<br> |55<br> |</p><p>示例：8A 03 06 01 0A 55</p><p>下位机应答：</p><p>开始码<br> |数据长度<br> |指令ID<br> |指令类型<br> |指令数据<br> |校验位<br> |结束码<br> |<br> 8A<br> |03<br> |06<br> |02<br> |无<br> |0B<br> |55<br> |</p><p>示例：8A 03 06 02 0B 55</p><p>5、<strong>停止移动机械抓（指令ID：07）</strong></p><p>开始码<br> |数据长度<br> |指令ID<br> |指令类型<br> |指令数据<br> |校验位<br> |结束码<br> |<br> 8A<br> |03<br> |07<br> |01<br> |无<br> |0B<br> |55<br> |</p><p>示例：8A 03 07 01 0B 55</p><p>下位机应答：</p><p>开始码<br> |数据长度<br> |指令ID<br> |指令类型<br> |指令数据<br> |校验位<br> |结束码<br> |<br> 8A<br> |03<br> |07<br> |02<br> |无<br> |0C<br> |55<br> |</p><p>示例：8A 03 07 02 0C 55</p><p>6、<strong>机械抓执行抓取（指令ID：08）</strong></p><p>开始码<br> |数据长度<br> |指令ID<br> |指令类型<br> |指令数据<br> |校验位<br> |结束码<br> |<br> 8A<br> |04<br> |08<br> |01<br> |抓力<br> |累加和<br> |55<br> |</p><p>示例：8A 04 08 01 C8D5 55表示要求机械抓执行抓力为 C8（200）的抓取动作</p><p>如果抓力数据为FF 表示本次抓取的抓力为机器的内部默认值</p><p>如果抓力数据为00 表示本次抓取的抓力为机器内部的中奖电压，配合模式1可以自己控制中奖概率。</p><h2 id="摄像头" tabindex="-1"><a class="header-anchor" href="#摄像头" aria-hidden="true">#</a> 摄像头</h2><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-chengxwwjdxswwjxmkfzjt-b4022f79-34c5-4a32-a067-8cec5e79eb0f.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这里我们采用的海康威视的设备，360度全景这样在线爪娃娃看的更清楚些，下面是用的播放库SDK，具体SDK细节我不细聊了，大家可以去官网开放平台研究一波</p><p>特别说明下当软件的操作结果和硬件操作结果不一致时，平台提供了申诉功能</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-chengxwwjdxswwjxmkfzjt-3fa04ab1-b000-45ed-b02f-05cfe51ca61c.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如下直播的画面，我们直接调用的监控摄像头的画面</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-chengxwwjdxswwjxmkfzjt-8ec43e5c-a0b2-4260-804f-e5210ee5df6e.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="硬件部分" tabindex="-1"><a class="header-anchor" href="#硬件部分" aria-hidden="true">#</a> 硬件部分</h2><p>其实目前市面上有现成对在线娃娃机的设备，甲方感觉贵才让我们自己定制下，硬件部分核心是需要开发通讯模块，方便远程操作对接。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-chengxwwjdxswwjxmkfzjt-634ae1de-6ad9-43b7-a61c-6f6932ca7997.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-chengxwwjdxswwjxmkfzjt-bea59def-68e2-43f6-a6b8-e5f65143c38c.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-chengxwwjdxswwjxmkfzjt-d956a0ef-3f29-4c8f-9a2c-5c184d8ac9fc.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="ending" tabindex="-1"><a class="header-anchor" href="#ending" aria-hidden="true">#</a> ending</h2><p>分享的最后，二哥简单说两句。</p><p>今年行情变差了，私活项目也变少了，客户价格压的也越来越卷，建议大家<strong>一定先把本职工作做好</strong>，有额外精力可以考虑接点。</p><p>但千万不要说本职工作都没搞好，然后又觉得赚钱少，就一门心思想通过接私活来弥补，这就本末倒置了。很可能造成的局面就是，工作没搞好，私活也没有搞好。</p><p>还是那句话，环境差的时候就专注于自身能力的提升，等环境好转后就疯狂对外输出，通过工作表现、拓展副业等各个方面去展示之前自己积累的学习成果。</p><p>千万不要说，环境差就觉得前途渺茫，做什么事情都提不起精神，那等环境好转了你会发现自己和那些优秀的人之间的差距会越拉越大。</p><p>这就和我们上学时一个道理，学生阶段如果没有通过成绩证明自己，等到上了大学，毕了业，你就会发现社会更加残酷，自己会更加格格不入，想要再逆袭就需要付出别人更多的努力。</p><p>摊手）</p><hr><p>没有什么使我停留——除了目的，纵然岸旁有玫瑰、有绿荫、有宁静的港湾，我是不系之舟。</p>',76),x={href:"https://mp.weixin.qq.com/s/SfEUk-4hE6ezUk2Lu6cd2g",target:"_blank",rel:"noopener noreferrer"},m={href:"https://mp.weixin.qq.com/s/4qHRBcJn1AvP07U4H6JcOQ",target:"_blank",rel:"noopener noreferrer"},w={href:"https://mp.weixin.qq.com/s/MGqyie9KvD6kH8Tuv2mqOw",target:"_blank",rel:"noopener noreferrer"},j={href:"https://mp.weixin.qq.com/s/Pu1cddsQOiMfCU4I96iygQ",target:"_blank",rel:"noopener noreferrer"},u={href:"https://mp.weixin.qq.com/s/9f_sOLiRwDS3pzC-mJ9jLQ",target:"_blank",rel:"noopener noreferrer"},_={href:"https://mp.weixin.qq.com/s/zYLEUmbfmiKeFk03e1TxbA",target:"_blank",rel:"noopener noreferrer"},k={href:"https://mp.weixin.qq.com/s/QYFB2NHhyZSBfdgSUcZU5g",target:"_blank",rel:"noopener noreferrer"},A={href:"https://mp.weixin.qq.com/s/SfEUk-4hE6ezUk2Lu6cd2g",target:"_blank",rel:"noopener noreferrer"},v=e("figure",null,[e("img",{src:"https://files.mdnice.com/user/3903/b7e50cf4-6fca-4511-9bfd-aa1ed9eb587b.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1);function z(q,D){const t=n("ExternalLinkIcon");return o(),p("div",null,[e("blockquote",null,[e("p",null,[e("a",l,[r("二哥的编程星球"),a(t)]),r("已经有 "),s,r(" 球友加入了，如果你也需要一个良好的学习氛围，"),e("a",g,[r("戳链接"),a(t)]),r("加入我们吧！这是一个Java学习指南+编程实战+LeetCode 刷题的私密圈子，你可以向二哥提问、帮你制定学习计划、和球友一起打卡成长，冲冲冲。")])]),d,e("blockquote",null,[e("p",null,[r("下载地址："),e("a",f,[r("http://activemq.apache.org/apollo/download.html"),a(t)])])]),h,e("ul",null,[e("li",null,[e("a",x,[r("非科班转码，想上岸大厂"),a(t)])]),e("li",null,[e("a",m,[r("推荐 10 个神级 Intellij IDEA 插件"),a(t)])]),e("li",null,[e("a",w,[r("美团率先开奖 24k，不甘心？"),a(t)])]),e("li",null,[e("a",j,[r("Fleet，Java 轻量级 IDE 的未来？"),a(t)])]),e("li",null,[e("a",u,[r("先不管那么多，offer 接了再说"),a(t)])]),e("li",null,[e("a",_,[r("一套 KTV 管理系统，估价 3 万还是 30 万？"),a(t)])]),e("li",null,[e("a",k,[r("给 offer 的公司不问技术细节？"),a(t)])]),e("li",null,[e("a",A,[r("入职一个月，就想跑路了？"),a(t)])])]),v])}const B=b(c,[["render",z],["__file","chengxwwjdxswwjxmkfzjt.html.vue"]]);export{B as default};
