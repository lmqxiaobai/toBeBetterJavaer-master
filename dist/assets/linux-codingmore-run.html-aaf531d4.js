import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as t,c,a as e,d as i,b as n,e as o}from"./app-1c5b5ce3.js";const g={},s=e("h2",{id:"云服务器",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#云服务器","aria-hidden":"true"},"#"),i(" 云服务器")],-1),l={href:"https://javabetter.cn/szjy/install-baota-mianban.html",target:"_blank",rel:"noopener noreferrer"},p=o('<p>这是从宝塔面板首页看到的服务器配置详情。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-10ef01787c-ee09-4474-a182-70bd6a2daf72.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>马上 618 了，阿里云服务器也开始整活了，需要白嫖的小伙伴可以先加群。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-10c69c16d4-b9e3-4add-b316-0c4670e76789.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h2><p>登录宝塔面板，点击「数据库」→「添加数据库」，填写数据库名，宝塔面板会自动帮我们创建一个和数据库同名的账号，注意访问权限选择「本地服务器」。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-10b64e7890-552d-47d5-91bd-03d74bff7974.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在 codingmore 栏目中点击「导入」「从本地上传」编程喵的数据库文件。上传完成后点击导入。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-10eec6b672-9089-414b-9f69-65cae18ae45d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>DB 文件放在 coding-more/doc 目录下。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-102f8aa2a1-1443-49e6-85d0-6b983863d161.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>建议先做一次备份，点击「无备份」「备份」就可以将我们的数据库文件备份下来了，如果后面想恢复的话，直接点击「恢复」就可以了。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-10c8edb874-95ad-405c-a57c-9c8b9fab8f6e.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>记住用户名，并复制密码，然后在数据库条目中点击「管理」</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-1032b5cafc-74ef-4e62-b65d-7e36980c14ed.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>填写用户名和密码后，点击执行。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-105579299a-bc0c-495d-a41b-31d9214835f3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>就可以看到编程喵的数据库文件了。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-100877b273-1ba2-40ed-8f96-0031c75e3680.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h2>',20),m={href:"https://javabetter.cn/nginx/nginx.html",target:"_blank",rel:"noopener noreferrer"},b=o('<p>宝塔面板中安装 Nginx 比较简单，直接在软件商店中搜「Nginx」就可以点击安装了。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-10cedec531-ae0e-402c-87ca-ee705a469288.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h2><p>宝塔面板中安装 Redis 也比较简单，直接在软件商店中搜「Redis」就可以点击安装了。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-10eab69fa2-b7cd-419a-a290-0cc0da2b30c3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="项目打包" tabindex="-1"><a class="header-anchor" href="#项目打包" aria-hidden="true">#</a> 项目打包</h2><h3 id="_1-codingmore-admin" tabindex="-1"><a class="header-anchor" href="#_1-codingmore-admin" aria-hidden="true">#</a> 1）codingmore-admin</h3><p>编程喵的管理后端，注意修改生产环境下的 MySQL 用户名和密码，在 application-prod.yml 文件中。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-100a38b5dd-ecd4-4734-bf6a-448397fa5463.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>然后把 application.yml 文件中的 active 修改为 prod 生产环境。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-10dd44a2ce-600d-43b1-8707-4de25287eed9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>替换 OSS 配置。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-108ebb40d9-64a1-43cd-89fd-4b83e47025de.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-codingmore-web" tabindex="-1"><a class="header-anchor" href="#_2-codingmore-web" aria-hidden="true">#</a> 2）codingmore-web</h3><p>编程喵的 Web 前端（网站门户、文章展示/文章详情等），注意修改生产环境下的 MySQL 用户名和密码，在 application-prod.yml 文件中。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-1066ba1162-a198-45e4-87ad-717c62fae6c7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>然后把 application.yml 文件中的 active 修改为 prod 生产环境。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-10560633b8-439d-418e-a3bb-61f21efbae9f.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>然后就可以双击 Maven 的 package 打包了。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-1089745ff7-9222-4d49-b6b9-66fbddba1e52.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-codingmore-admin-web" tabindex="-1"><a class="header-anchor" href="#_3-codingmore-admin-web" aria-hidden="true">#</a> 3）codingmore-admin-web</h3><p>admin 管理端的前端界面。在 Visual Studio Code 中，现在终端中执行 <code>yarn install</code> 安装项目的依赖插件。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-10d6a9cbaf-fd70-4567-b6b0-b2c50b61407a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>再执行 <code>yarn run build</code> 就可以构建 codingmore-admin-web 的静态页面了。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-101aedea50-7f21-4199-9ff2-c264b614e711.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>会在项目的根目录中生成一个 dist 目录，里面就是打包好的管理端静态页面。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-10128e58f4-172a-4c77-acf1-324ed310412c.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>打包的时候有两个要点要补充下，在 config 目录下有三个配置文件，dev.env.js 是开发环境下的一些配置，index.js 是主配置，prod.env.js 是生产环境下的配置。</p><p>为了提高网站的性能，我们需要关闭 source map，设置 <code>productionSourceMap: false</code>，同时开启 js 和 css 的文件压缩功能。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-10c2b78cd1-4c55-4fce-9c7a-0afbdd21a659.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这样打包后的文件大小就会小很多，放到服务器上也能减少网络请求的响应时间。</p><p>可以看得出，最大的一个 js 文件为 3.7M，压缩版只有 662kb，体积缩小了五倍。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-1009d6dc89-05a3-4a43-972b-bbad4bdd34e5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="将打包好的文件上传到服务器" tabindex="-1"><a class="header-anchor" href="#将打包好的文件上传到服务器" aria-hidden="true">#</a> 将打包好的文件上传到服务器</h2><p>在宝塔面板中点击「FTP」「添加 FTP」。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-1047c54369-e3af-48ea-8143-ea1dbce36894.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点击「根目录」</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-103cdb501e-0145-48b2-ac3f-96b6e99e8ecf.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>跳转到文件页。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-106d8e3ef4-e032-4c2d-b872-c7ede968a051.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点击上传，在 target 目录下选择上传的两个 jar 包，admin 和 web。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-10b1544314-3fc7-4fba-a9e5-28a1760d3517.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点击「开始上传」</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-10ffe802fb-da43-404a-aaaf-f5b5eb4bdcc3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>还有 codingmore-admin-web 的静态文件。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-10f55854dd-b6a5-4a46-8232-e21bb03b788f.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一键部署" tabindex="-1"><a class="header-anchor" href="#一键部署" aria-hidden="true">#</a> 一键部署</h2><p>在软件商店里搜「<strong>Java</strong>」关键字，可以看到一个「<strong>Java 项目一键部署 3.5</strong>」的插件，安装它。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-10e784ae11-5d73-41c3-929e-60f7c1114f73.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>进入「Java 项目一键部署」面板。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-102724c169-4f6c-4208-aa3e-ab4936a14e7a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>可以在「容器管理」面板中选择 Tomcat 8 安装下，如果没有安装 JDK，在安装 Tomcat 8 的时候会默认安装一个 JDK 1.8。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-1059bcd44e-be2d-4c7b-81c3-c974f5c9a33a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>进入 Spring Boot 面板，点击「添加项目」，点击「项目路径」右侧的文件夹图标，就可以上传部署我们的 Spring Boot 项目了。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-10f39e778b-2d59-4087-bd89-86d71231ff6e.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="codingmore-web-网站前端" tabindex="-1"><a class="header-anchor" href="#codingmore-web-网站前端" aria-hidden="true">#</a> codingmore-web（网站前端）</h3><p>先选择 codingmore-web。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-108d03852e-c207-442d-9ce9-770c6a16710b.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>填写域名（编程喵的域名为 <a href="codingmore.top">codingmore.top</a>），修改端口号为 8081，application.yml 文件中定义的。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-10358f631c-27c8-4460-a00e-5c17a3077f28.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点击确定。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-1099646018-e244-421c-9232-4f40c4e07444.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>可以看到服务已经在启动了，点「日志」看一下。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-1053ab9712-5874-4650-92da-e6978803c4de.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>没问题。</p><p>也可以在这个路径下使用终端工具看日志。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-107242861b-2cfc-4eb2-8414-6afade214a74.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在安全面板里确认一下 8081 端口是否放开。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-109c7d80a2-fb84-43b9-86fc-670221607b22.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>确认放开后，打开 Chrome 浏览器的无痕模式，输入 IP+端口号。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-109f8efbcd-3e6f-4877-ad90-b766dda67879.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>通过域名+端口号的形式也可以访问到。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-10f50b5c71-35bd-439c-bb82-07348a5155d3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="codingmore-admin-网站管理端" tabindex="-1"><a class="header-anchor" href="#codingmore-admin-网站管理端" aria-hidden="true">#</a> codingmore-admin（网站管理端）</h3><p>再次进入 「Java 项目一键部署」Spring Boot 面板中，添加 codingmore-admin 项目。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-1001b5b9f3-05f8-4fdf-9c8a-111ec449826f.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>稍等片刻，来看一下日志。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-103a4c0249-f250-4199-ba3c-eeb1ca005bd0.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>启动没问题。</p><p>codingmore-admin 只是一个后端服务，界面是用 vue 完成的，所以我们此时可以通过 Swagger 来确认一下接口是否可以正常访问。</p><p>先放行 9002 端口。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-10f6b25066-3ffa-4dfc-a61c-b6ebb16e339b.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在浏览器地址栏里输入 <code>http://www.codingmore.top:9002/doc.html</code>，可以看到我们用 Knife4j+Swagger 生成的 API 文档接口。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-10a04aa484-a7f1-48f1-a3ff-1525b9bd7035.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>OK，这样就可以验证我们的 admin 端服务也正确运行了。</p><p>随后，为了减少服务器被攻击的可能性，我们关掉 9002 的端口。</p><h2 id="nginx-配置" tabindex="-1"><a class="header-anchor" href="#nginx-配置" aria-hidden="true">#</a> Nginx 配置</h2><h3 id="codingmore-web" tabindex="-1"><a class="header-anchor" href="#codingmore-web" aria-hidden="true">#</a> codingmore-web</h3><p>域名+端口号虽然可以访问，但不够优雅，我们想直接访问域名 codingmore.top，该怎么办呢？</p>',89),f={href:"https://javabetter.cn/nginx/nginx.html",target:"_blank",rel:"noopener noreferrer"},u=o(`<p>Nginx 的实现原理是，用 Nginx 监听 80 端口，当有 HTTP 请求到来时，将 HTTP 请求的 HOST 等信息与配置文件进行匹配并转发给对应的端口。</p><p>比如说，当用户访问 codingmore.top 时，Nginx 从配置文件中得知这是一个 HTTP 请求，于是将此请求转发给 8081 端口的应用处理。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream codingmore_web_pool{
    server 127.0.0.1:8081;
}

server {
    listen       80;
    server_name  codingmore.top;
    access_log logs/codingmore_web.log;
    error_log logs/codingmore_web.error;
    
    #将所有请求转发给pool池的应用处理
    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass http://codingmore_web_pool;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这就是所谓的端口转发，由软件统一监听某个域名上的某个端口（一般是80端口），当访问服务器的域名和端口符合要求时，就按照配置转发给指定的 Tomcat 服务器处理。我们常用的 Nginx 也有端口转发功能。</p><p>OK，原理了解完后，我们把这段配置复制到宝塔面板中的 Nginx 配置中。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-1053849d03-ca6c-4871-9103-b65238557c50.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点击「保存」。</p>`,7),v={href:"http://www.codingmore.top/",target:"_blank",rel:"noopener noreferrer"},h=o(`<figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-106302a681-0dbe-4d76-ac54-243ef67914c7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>既然如此，我们顺带把 8081 端口给关掉，减少一个服务器被攻击的可能性。</p><p>OK，这样我们就完成了 codingmore-web 也就是编程喵🐱前端的服务部署了。</p><h3 id="codingmore-admin-web" tabindex="-1"><a class="header-anchor" href="#codingmore-admin-web" aria-hidden="true">#</a> codingmore-admin-web</h3><p>codingmore-admin-web 打包后的文件是静态的，所以我们只需要在 Nginx 里添加 admin 的配置路径就 OK 了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream codingmore_web_pool{
    server 127.0.0.1:8081;
}

server {
    listen       80;
    server_name  codingmore.top;
    access_log /home/www/codingmore_web.log;
    error_log /home/www/codingmore_web.error;

    location /admin {
        alias /www/wwwroot/itwanger/dist/; # 根目录
        index index.html;
    }
    
    #将所有请求转发给pool池的应用处理
    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass http://codingmore_web_pool;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),_={href:"http://codingmore.top/admin",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"/www/wwwroot/itwanger/dist/",-1),w=e("p",null,"这里讲一下 root 和 alias 的区别：",-1),y=e("ul",null,[e("li",null,[i("root：实际访问的地址前缀是 root + 请求的 path路径，即 "),e("code",null,"admin => /www/wwwroot/itwanger/dist/admin")]),e("li",null,[i("alias: 实际访问的就是 "),e("code",null,"/www/wwwroot/itwanger/dist")])],-1),j={href:"http://codingmore.top/admin",target:"_blank",rel:"noopener noreferrer"},z=o(`<figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-1050bb8a6a-aeee-4514-a62a-cd87cb82b3d4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>OK。</p><p>编程喵🐱是一个前后端分离项目，前端的请求如何访问后端的 API 接口呢？简单聊一下。</p><p>打开 codingmore-admin-web/config/prod.env.js 文件，里面有一个 VUE_APP_BASE_API 属性，它的值为 <code>/api</code>，也就意味着前端的请求会发送到 <code>/api</code> 这个前缀路径下。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&#39;use strict&#39;
module.exports = {
  NODE_ENV: &#39;&quot;production&quot;&#39;,
  VUE_APP_BASE_API: &#39;&quot;/api&quot;&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那我们的 codingmore-admin 后端服务是跑在 9002 端口下的，这就意味着，我们需要在 Nginx 中增加一个路径，将 api 前缀的请求转发到 9002 下。</p><p>OK，来看一下完整的配置内容。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream codingmore_web_pool{
    server 127.0.0.1:8081;
}

upstream codingmore_admin_pool{
    server 127.0.0.1:9002/;
}

server {
    listen       80;
    server_name  codingmore.top;
    access_log /home/www/codingmore_web.log;
    error_log /home/www/codingmore_web.error;

    location /admin {
        alias /www/wwwroot/itwanger/dist/; # 根目录
        index index.html;
    }

    location /api/ {
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass http://codingmore_admin_pool;
    }
    
    #将所有请求转发给pool池的应用处理
    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass http://codingmore_web_pool;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ok，登录 admin 端，可以看到我们的文章管理页面了。</p><figure><img src="https://cdn.tobebetterjavaer.com/codingmore/images/2022-06-1061fbe711-7715-47d5-9bb9-21b872881be1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="网站域名" tabindex="-1"><a class="header-anchor" href="#网站域名" aria-hidden="true">#</a> 网站域名</h2>`,11),N={href:"http://www.codingmore.top/admin/",target:"_blank",rel:"noopener noreferrer"},S={href:"http://www.codingmore.top/admin",target:"_blank",rel:"noopener noreferrer"};function k(P,T){const a=r("ExternalLinkIcon");return t(),c("div",null,[s,e("p",null,[i("我们需要一台云服务器，我之前白嫖过一台丐版的，1 核1G 内存，并且已经安装了宝塔面板（安装教程戳"),e("a",l,[i("链接🔗"),n(a)]),i("）。")]),p,e("p",null,[e("a",m,[i("Nginx"),n(a)]),i(" 是一个高性能的 HTTP 和反向代理 Web 服务器，基本上就变成了一个服务器必须安装的前置条件之一。")]),b,e("p",null,[i("可以使用 "),e("a",f,[i("Nginx"),n(a)]),i(" 进行端口转发。")]),u,e("p",null,[i("再在浏览器中访问 "),e("a",v,[i("codingmore.top"),n(a)]),i(" 就可以请求到内容了。")]),h,e("p",null,[i("我们在 server 中增加了一个 admin 的 location，也就是说，当我们访问 "),e("a",_,[i("codingmore.top/admin"),n(a)]),i(" 的时候，就去请求 "),x,i(" 目录下的静态文件。")]),w,y,e("p",null,[i("注意两者的区别。我们来访问下"),e("a",j,[i("codingmore.top/admin"),n(a)]),i("：")]),z,e("ul",null,[e("li",null,[i("编程喵 web 端："),e("a",N,[i("www.codingmore.top"),n(a)])]),e("li",null,[i("编程喵 admin 端："),e("a",S,[i("www.codingmore.top/admin"),n(a)])])])])}const E=d(g,[["render",k],["__file","linux-codingmore-run.html.vue"]]);export{E as default};
