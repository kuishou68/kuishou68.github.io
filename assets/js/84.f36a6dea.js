(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{434:function(s,a,n){"use strict";n.r(a);var e=n(25),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:""}},[n("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")]),s._v(" "),n("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/1500604/1621611602044-9eff4f96-7acb-4c4a-927e-fa254bf23418.png",alt:"img"}})]),s._v(" "),n("h2",{attrs:{id:"一、cdn"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、cdn"}},[s._v("#")]),s._v(" 一、CDN")]),s._v(" "),n("h3",{attrs:{id:"_1-cdn的概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-cdn的概念"}},[s._v("#")]),s._v(" 1. CDN的概念")]),s._v(" "),n("p",[s._v("CDN（Content Delivery Network，"),n("strong",[s._v("内容分发网络")]),s._v("）是指一种通过互联网互相连接的电脑网络系统，利用最靠近每位用户的服务器，更快、更可靠地将音乐、图片、视频、应用程序及其他文件发送给用户，来提供高性能、可扩展性及低成本的网络内容传递给用户。")]),s._v(" "),n("p",[s._v("典型的CDN系统由下面三个部分组成：")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("**分发服务系统：**最基本的工作单元就是Cache设备，cache（边缘cache）负责直接响应最终用户的访问请求，把缓存在本地的内容快速地提供给用户。同时cache还负责与源站点进行内容同步，把更新的内容以及本地没有的内容从源站点获取并保存在本地。Cache设备的数量、规模、总服务能力是衡量一个CDN系统服务能力的最基本的指标。")])]),s._v(" "),n("li",[n("p",[s._v("**负载均衡系统：**主要功能是负责对所有发起服务请求的用户进行访问调度，确定提供给用户的最终实际访问地址。两级调度体系分为全局负载均衡（GSLB）和本地负载均衡（SLB）。"),n("strong",[s._v("全局负载均衡")]),s._v("主要根据用户就近性原则，通过对每个服务节点进行“最优”判断，确定向用户提供服务的cache的物理位置。"),n("strong",[s._v("本地负载均衡")]),s._v("主要负责节点内部的设备负载均衡")])]),s._v(" "),n("li",[n("p",[s._v("**运营管理系统：**运营管理系统分为运营管理和网络管理子系统，负责处理业务层面的与外界系统交互所必须的收集、整理、交付工作，包含客户管理、产品管理、计费管理、统计分析等功能。")])])]),s._v(" "),n("h3",{attrs:{id:"_2-cdn的作用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-cdn的作用"}},[s._v("#")]),s._v(" 2. CDN的作用")]),s._v(" "),n("p",[s._v("CDN一般会用来托管Web资源（包括文本、图片和脚本等），可供下载的资源（媒体文件、软件、文档等），应用程序（门户网站等）。使用CDN来加速这些资源的访问。")]),s._v(" "),n("p",[s._v("（1）在性能方面，引入CDN的作用在于：")]),s._v(" "),n("ul",[n("li",[s._v("用户收到的内容来自最近的数据中心，延迟更低，内容加载更快")]),s._v(" "),n("li",[s._v("部分资源请求分配给了CDN，减少了服务器的负载")])]),s._v(" "),n("p",[s._v("（2）在安全方面，CDN有助于防御DDoS、MITM等网络攻击：")]),s._v(" "),n("ul",[n("li",[s._v("针对DDoS：通过监控分析异常流量，限制其请求频率")]),s._v(" "),n("li",[s._v("针对MITM：从源服务器到 CDN 节点到 ISP（Internet Service Provider），全链路 HTTPS 通信")])]),s._v(" "),n("p",[s._v("除此之外，CDN作为一种基础的云服务，同样具有资源托管、按需扩展（能够应对流量高峰）等方面的优势。")]),s._v(" "),n("h3",{attrs:{id:"_3-cdn的原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-cdn的原理"}},[s._v("#")]),s._v(" 3. CDN的原理")]),s._v(" "),n("p",[s._v("CDN和DNS有着密不可分的联系，先来看一下DNS的解析域名过程，在浏览器输入 www.test.com 的解析过程如下：")]),s._v(" "),n("p",[s._v("（1） 检查浏览器缓存")]),s._v(" "),n("p",[s._v("（2）检查操作系统缓存，常见的如hosts文件")]),s._v(" "),n("p",[s._v("（3）检查路由器缓存")]),s._v(" "),n("p",[s._v("（4）如果前几步都没没找到，会向ISP(网络服务提供商)的LDNS服务器查询")]),s._v(" "),n("p",[s._v("（5）如果LDNS服务器没找到，会向根域名服务器(Root Server)请求解析，分为以下几步：")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("根服务器返回顶级域名(TLD)服务器如"),n("code",[s._v(".com")]),s._v("，"),n("code",[s._v(".cn")]),s._v("，"),n("code",[s._v(".org")]),s._v("等的地址，该例子中会返回"),n("code",[s._v(".com")]),s._v("的地址")])]),s._v(" "),n("li",[n("p",[s._v("接着向顶级域名服务器发送请求，然后会返回次级域名(SLD)服务器的地址，本例子会返回"),n("code",[s._v(".test")]),s._v("的地址")])]),s._v(" "),n("li",[n("p",[s._v("接着向次级域名服务器发送请求，然后会返回通过域名查询到的目标IP，本例子会返回"),n("code",[s._v("www.test.com")]),s._v("的地址")])]),s._v(" "),n("li",[n("p",[s._v("Local DNS Server会缓存结果，并返回给用户，缓存在系统中")])])]),s._v(" "),n("p",[n("strong",[s._v("CDN的工作原理：")])]),s._v(" "),n("p",[s._v("（1）用户未使用CDN缓存资源的过程：")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("浏览器通过DNS对域名进行解析（就是上面的DNS解析过程），依次得到此域名对应的IP地址")])]),s._v(" "),n("li",[n("p",[s._v("浏览器根据得到的IP地址，向域名的服务主机发送数据请求")])]),s._v(" "),n("li",[n("p",[s._v("服务器向浏览器返回响应数据")])])]),s._v(" "),n("p",[s._v("（2）用户使用CDN缓存资源的过程：")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("对于点击的数据的URL，经过本地DNS系统的解析，发现该URL对应的是一个CDN专用的DNS服务器，DNS系统就会将域名解析权交给CNAME指向的CDN专用的DNS服务器。")])]),s._v(" "),n("li",[n("p",[s._v("CND专用DNS服务器将CND的全局负载均衡设备IP地址返回给用户")])]),s._v(" "),n("li",[n("p",[s._v("用户向CDN的全局负载均衡设备发起数据请求")])]),s._v(" "),n("li",[n("p",[s._v("CDN的全局负载均衡设备根据用户的IP地址，以及用户请求的内容URL，选择一台用户所属区域的区域负载均衡设备，告诉用户向这台设备发起请求")])]),s._v(" "),n("li",[n("p",[s._v("区域负载均衡设备选择一台合适的缓存服务器来提供服务，将该缓存服务器的IP地址返回给全局负载均衡设备")])]),s._v(" "),n("li",[n("p",[s._v("全局负载均衡设备把服务器的IP地址返回给用户")])]),s._v(" "),n("li",[n("p",[s._v("用户向该缓存服务器发起请求，缓存服务器响应用户的请求，将用户所需内容发送至用户终端。")])])]),s._v(" "),n("p",[s._v("如果缓存服务器没有用户想要的内容，那么缓存服务器就会向它的上一级缓存服务器请求内容，以此类推，直到获取到需要的资源。最后如果还是没有，就会回到自己的服务器去获取资源。")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1500604/1603966294889-153271b5-4b9f-4470-b05f-c7a9f030d043.png",alt:"img"}})]),s._v(" "),n("p",[s._v("CNAME（意为：别名）：在域名解析中，实际上解析出来的指定域名对应的IP地址，或者该域名的一个CNAME，然后再根据这个CNAME来查找对应的IP地址。")]),s._v(" "),n("h3",{attrs:{id:"_4-cdn的使用场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-cdn的使用场景"}},[s._v("#")]),s._v(" 4. CDN的使用场景")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("**使用第三方的CDN服务：**如果想要开源一些项目，可以使用第三方的CDN服务")])]),s._v(" "),n("li",[n("p",[s._v("**使用CDN进行静态资源的缓存：**将自己网站的静态资源放在CDN上，比如js、css、图片等。可以将整个项目放在CDN上，完成一键部署。")])]),s._v(" "),n("li",[n("p",[s._v("**直播传送：**直播本质上是使用流媒体进行传送，CDN也是支持流媒体传送的，所以直播完全可以使用CDN来提高访问速度。CDN在处理流媒体的时候与处理普通静态文件有所不同，普通文件如果在边缘节点没有找到的话，就会去上一层接着寻找，但是流媒体本身数据量就非常大，如果使用回源的方式，必然会带来性能问题，所以流媒体一般采用的都是主动推送的方式来进行。")])])]),s._v(" "),n("h2",{attrs:{id:"二、懒加载"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、懒加载"}},[s._v("#")]),s._v(" 二、懒加载")]),s._v(" "),n("h3",{attrs:{id:"_1-懒加载的概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-懒加载的概念"}},[s._v("#")]),s._v(" 1. 懒加载的概念")]),s._v(" "),n("p",[s._v("懒加载也叫做延迟加载、按需加载，指的是在长网页中延迟加载图片数据，是一种较好的网页性能优化的方式。在比较长的网页或应用中，如果图片很多，所有的图片都被加载出来，而用户只能看到可视窗口的那一部分图片数据，这样就浪费了性能。")]),s._v(" "),n("p",[s._v("如果使用图片的懒加载就可以解决以上问题。在滚动屏幕之前，可视化区域之外的图片不会进行加载，在滚动屏幕时才加载。这样使得网页的加载速度更快，减少了服务器的负载。懒加载适用于图片较多，页面列表较长（长列表）的场景中。")]),s._v(" "),n("h3",{attrs:{id:"_2-懒加载的特点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-懒加载的特点"}},[s._v("#")]),s._v(" 2. 懒加载的特点")]),s._v(" "),n("ul",[n("li",[n("p",[n("strong",[s._v("减少无用资源的加载")]),s._v("：使用懒加载明显减少了服务器的压力和流量，同时也减小了浏览器的负担。")])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("提升用户体验")]),s._v(": 如果同时加载较多图片，可能需要等待的时间较长，这样影响了用户体验，而使用懒加载就能大大的提高用户体验。")])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("防止加载过多图片而影响其他资源文件的加载")]),s._v(" ：会影响网站应用的正常使用。")])])]),s._v(" "),n("h3",{attrs:{id:"_3-懒加载的实现原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-懒加载的实现原理"}},[s._v("#")]),s._v(" 3. 懒加载的实现原理")]),s._v(" "),n("p",[s._v("图片的加载是由"),n("code",[s._v("src")]),s._v("引起的，当对"),n("code",[s._v("src")]),s._v("赋值时，浏览器就会请求图片资源。根据这个原理，我们使用HTML5 的"),n("code",[s._v("data-xxx")]),s._v("属性来储存图片的路径，在需要加载图片的时候，将"),n("code",[s._v("data-xxx")]),s._v("中图片的路径赋值给"),n("code",[s._v("src")]),s._v("，这样就实现了图片的按需加载，即懒加载。")]),s._v(" "),n("p",[s._v("注意："),n("code",[s._v("data-xxx")]),s._v(" 中的"),n("code",[s._v("xxx")]),s._v("可以自定义，这里我们使用"),n("code",[s._v("data-src")]),s._v("来定义。")]),s._v(" "),n("p",[s._v("懒加载的实现重点在于确定用户需要加载哪张图片，在浏览器中，可视区域内的资源就是用户需要的资源。所以当图片出现在可视区域时，获取图片的真实地址并赋值给图片即可。")]),s._v(" "),n("p",[s._v("使用原生JavaScript实现懒加载：")]),s._v(" "),n("p",[n("strong",[s._v("知识点：")])]),s._v(" "),n("p",[s._v("（1）"),n("code",[s._v("window.innerHeight")]),s._v(" 是浏览器可视区的高度")]),s._v(" "),n("p",[s._v("（2）"),n("code",[s._v("document.body.scrollTop || document.documentElement.scrollTop")]),s._v(" 是浏览器滚动的过的距离")]),s._v(" "),n("p",[s._v("（3）"),n("code",[s._v("imgs.offsetTop")]),s._v(" 是元素顶部距离文档顶部的高度（包括滚动条的距离）")]),s._v(" "),n("p",[s._v("（4）图片加载条件："),n("code",[s._v("img.offsetTop < window.innerHeight + document.body.scrollTop;")])]),s._v(" "),n("p",[n("strong",[s._v("图示：")])]),s._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1500604/1603966605254-fe880ec0-ebd1-4f94-b662-cdd5e5396c34.png",alt:"img"}})]),s._v(" "),n("p",[n("strong",[s._v("代码实现：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<div class="container">\n     <img src="loading.gif"  data-src="pic.png">\n     <img src="loading.gif"  data-src="pic.png">\n     <img src="loading.gif"  data-src="pic.png">\n     <img src="loading.gif"  data-src="pic.png">\n     <img src="loading.gif"  data-src="pic.png">\n     <img src="loading.gif"  data-src="pic.png">\n</div>\n<script>\nvar imgs = document.querySelectorAll(\'img\');\nfunction lozyLoad(){\n\t\tvar scrollTop = document.body.scrollTop || document.documentElement.scrollTop;\n\t\tvar winHeight= window.innerHeight;\n\t\tfor(var i=0;i < imgs.length;i++){\n\t\t\tif(imgs[i].offsetTop < scrollTop + winHeight ){\n\t\t\t\timgs[i].src = imgs[i].getAttribute(\'data-src\');\n\t\t\t}\n\t\t}\n\t}\n  window.onscroll = lozyLoad();\n<\/script>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("h3",{attrs:{id:"_4-懒加载与预加载的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-懒加载与预加载的区别"}},[s._v("#")]),s._v(" 4. 懒加载与预加载的区别")]),s._v(" "),n("p",[s._v("这两种方式都是提高网页性能的方式，两者主要区别是一个是提前加载，一个是迟缓甚至不加载。懒加载对服务器前端有一定的缓解压力作用，预加载则会增加服务器前端压力。")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("懒加载也叫延迟加载，指的是在长网页中延迟加载图片的时机，当用户需要访问时，再去加载")]),s._v("，这样可以提高网站的首屏加载速度，提升用户的体验，并且可以减少服务器的压力。它适用于图片很多，页面很长的电商网站的场景。懒加载的实现原理是，将页面上的图片的 src 属性设置为空字符串，将图片的真实路径保存在一个自定义属性中，当页面滚动的时候，进行判断，如果图片进入页面可视区域内，则从自定义属性中取出真实路径赋值给图片的 src 属性，以此来实现图片的延迟加载。")]),s._v(" "),n("li",[s._v("**预加载指的是将所需的资源提前请求加载到本地，这样后面在需要用到时就直接从缓存取资源。**通过预加载能够减少用户的等待时间，提高用户的体验。我了解的预加载的最常用的方式是使用 js 中的 image 对象，通过为 image 对象来设置 scr 属性，来实现图片的预加载。")])]),s._v(" "),n("h2",{attrs:{id:"三、回流与重绘"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、回流与重绘"}},[s._v("#")]),s._v(" 三、回流与重绘")]),s._v(" "),n("h3",{attrs:{id:"_1-回流与重绘的概念及触发条件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-回流与重绘的概念及触发条件"}},[s._v("#")]),s._v(" 1. 回流与重绘的概念及触发条件")]),s._v(" "),n("h4",{attrs:{id:"_1-回流"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-回流"}},[s._v("#")]),s._v(" （1）回流")]),s._v(" "),n("p",[s._v("当渲染树中部分或者全部元素的尺寸、结构或者属性发生变化时，浏览器会重新渲染部分或者全部文档的过程就称为"),n("strong",[s._v("回流")]),s._v("。")]),s._v(" "),n("p",[s._v("下面这些操作会导致回流：")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("页面的首次渲染")])]),s._v(" "),n("li",[n("p",[s._v("浏览器的窗口大小发生变化")])]),s._v(" "),n("li",[n("p",[s._v("元素的内容发生变化")])]),s._v(" "),n("li",[n("p",[s._v("元素的尺寸或者位置发生变化")])]),s._v(" "),n("li",[n("p",[s._v("元素的字体大小发生变化")])]),s._v(" "),n("li",[n("p",[s._v("激活CSS伪类")])]),s._v(" "),n("li",[n("p",[s._v("查询某些属性或者调用某些方法")])]),s._v(" "),n("li",[n("p",[s._v("添加或者删除可见的DOM元素")])])]),s._v(" "),n("p",[s._v("在触发回流（重排）的时候，由于浏览器渲染页面是基于流式布局的，所以当触发回流时，会导致周围的DOM元素重新排列，它的影响范围有两种：")]),s._v(" "),n("ul",[n("li",[s._v("全局范围：从根节点开始，对整个渲染树进行重新布局")]),s._v(" "),n("li",[s._v("局部范围：对渲染树的某部分或者一个渲染对象进行重新布局")])]),s._v(" "),n("h4",{attrs:{id:"_2-重绘"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-重绘"}},[s._v("#")]),s._v(" （2）重绘")]),s._v(" "),n("p",[s._v("当页面中某些元素的样式发生变化，但是不会影响其在文档流中的位置时，浏览器就会对元素进行重新绘制，这个过程就是"),n("strong",[s._v("重绘")]),s._v("。")]),s._v(" "),n("p",[s._v("下面这些操作会导致回流：")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("color、background 相关属性：background-color、background-image 等")])]),s._v(" "),n("li",[n("p",[s._v("outline 相关属性：outline-color、outline-width 、text-decoration")])]),s._v(" "),n("li",[n("p",[s._v("border-radius、visibility、box-shadow")])])]),s._v(" "),n("p",[s._v("注意： "),n("strong",[s._v("当触发回流时，一定会触发重绘，但是重绘不一定会引发回流。")])]),s._v(" "),n("h3",{attrs:{id:"_2-如何避免回流与重绘"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-如何避免回流与重绘"}},[s._v("#")]),s._v(" 2. 如何避免回流与重绘？")]),s._v(" "),n("p",[n("strong",[s._v("减少回流与重绘的措施：")])]),s._v(" "),n("ul",[n("li",[n("p",[s._v("操作DOM时，尽量在低层级的DOM节点进行操作")])]),s._v(" "),n("li",[n("p",[s._v("不要使用"),n("code",[s._v("table")]),s._v("布局， 一个小的改动可能会使整个"),n("code",[s._v("table")]),s._v("进行重新布局")])]),s._v(" "),n("li",[n("p",[s._v("使用CSS的表达式")])]),s._v(" "),n("li",[n("p",[s._v("不要频繁操作元素的样式，对于静态页面，可以修改类名，而不是样式。")])]),s._v(" "),n("li",[n("p",[s._v("使用absolute或者fixed，使元素脱离文档流，这样他们发生变化就不会影响其他元素")])]),s._v(" "),n("li",[n("p",[s._v("避免频繁操作DOM，可以创建一个文档片段"),n("code",[s._v("documentFragment")]),s._v("，在它上面应用所有DOM操作，最后再把它添加到文档中")])]),s._v(" "),n("li",[n("p",[s._v("将元素先设置"),n("code",[s._v("display: none")]),s._v("，操作结束后再把它显示出来。因为在display属性为none的元素上进行的DOM操作不会引发回流和重绘。")])]),s._v(" "),n("li",[n("p",[s._v("将DOM的多个读操作（或者写操作）放在一起，而不是读写操作穿插着写。这得益于"),n("strong",[s._v("浏览器的渲染队列机制")]),s._v("。")])])]),s._v(" "),n("p",[s._v("浏览器针对页面的回流与重绘，进行了自身的优化——"),n("strong",[s._v("渲染队列")])]),s._v(" "),n("p",[n("strong",[s._v("浏览器会将所有的回流、重绘的操作放在一个队列中，当队列中的操作到了一定的数量或者到了一定的时间间隔，浏览器就会对队列进行批处理。这样就会让多次的回流、重绘变成一次回流重绘。")])]),s._v(" "),n("p",[s._v("上面，将多个读操作（或者写操作）放在一起，就会等所有的读操作进入队列之后执行，这样，原本应该是触发多次回流，变成了只触发一次回流。")]),s._v(" "),n("h3",{attrs:{id:"_3-如何优化动画"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-如何优化动画"}},[s._v("#")]),s._v(" 3. 如何优化动画？")]),s._v(" "),n("p",[s._v("对于如何优化动画，我们知道，一般情况下，动画需要频繁的操作DOM，就就会导致页面的性能问题，我们可以将动画的"),n("code",[s._v("position")]),s._v("属性设置为"),n("code",[s._v("absolute")]),s._v("或者"),n("code",[s._v("fixed")]),s._v("，将动画脱离文档流，这样他的回流就不会影响到页面了。")]),s._v(" "),n("h3",{attrs:{id:"_4-documentfragment-是什么-用它跟直接操作-dom-的区别是什么"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-documentfragment-是什么-用它跟直接操作-dom-的区别是什么"}},[s._v("#")]),s._v(" 4. documentFragment 是什么？用它跟直接操作 DOM 的区别是什么？")]),s._v(" "),n("p",[s._v("MDN中对"),n("code",[s._v("documentFragment")]),s._v("的解释：")]),s._v(" "),n("p",[s._v("DocumentFragment，文档片段接口，一个没有父对象的最小文档对象。它被作为一个轻量版的 Document使用，就像标准的document一样，存储由节点（nodes）组成的文档结构。与document相比，最大的区别是DocumentFragment不是真实 DOM 树的一部分，它的变化不会触发 DOM 树的重新渲染，且不会导致性能等问题。")]),s._v(" "),n("p",[s._v("当我们把一个 DocumentFragment 节点插入文档树时，插入的不是 DocumentFragment 自身，而是它的所有子孙节点。在频繁的DOM操作时，我们就可以将DOM元素插入DocumentFragment，之后一次性的将所有的子孙节点插入文档中。和直接操作DOM相比，将DocumentFragment 节点插入DOM树时，不会触发页面的重绘，这样就大大提高了页面的性能。")]),s._v(" "),n("h2",{attrs:{id:"四、节流与防抖"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、节流与防抖"}},[s._v("#")]),s._v(" 四、节流与防抖")]),s._v(" "),n("h3",{attrs:{id:"_1-对节流与防抖的理解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-对节流与防抖的理解"}},[s._v("#")]),s._v(" 1. 对节流与防抖的理解")]),s._v(" "),n("ul",[n("li",[s._v("函数防抖是指在事件被触发 n 秒后再执行回调，如果在这 n 秒内事件又被触发，则重新计时。这可以使用在一些点击请求的事件上，避免因为用户的多次点击向后端发送多次请求。")]),s._v(" "),n("li",[s._v("函数节流是指规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。节流可以使用在 scroll 函数的事件监听上，通过事件节流来降低事件调用的频率。")])]),s._v(" "),n("p",[n("strong",[s._v("防抖函数的应用场景：")])]),s._v(" "),n("ul",[n("li",[s._v("按钮提交场景：防⽌多次提交按钮，只执⾏最后提交的⼀次")]),s._v(" "),n("li",[s._v("服务端验证场景：表单验证需要服务端配合，只执⾏⼀段连续的输⼊事件的最后⼀次，还有搜索联想词功能类似⽣存环境请⽤lodash.debounce")])]),s._v(" "),n("p",[n("strong",[s._v("节流函数的****适⽤场景：")])]),s._v(" "),n("ul",[n("li",[n("p",[s._v("拖拽场景：固定时间内只执⾏⼀次，防⽌超⾼频次触发位置变动")])]),s._v(" "),n("li",[n("p",[s._v("缩放场景：监控浏览器resize")])]),s._v(" "),n("li",[n("p",[s._v("动画场景：避免短时间内多次触发动画引起性能问题")])])]),s._v(" "),n("h3",{attrs:{id:"_2-实现节流函数和防抖函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-实现节流函数和防抖函数"}},[s._v("#")]),s._v(" 2. 实现节流函数和防抖函数")]),s._v(" "),n("p",[n("strong",[s._v("函数防抖的实现：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function debounce(fn, wait) {\n  var timer = null;\n\n  return function() {\n    var context = this,\n      args = [...arguments];\n\n    // 如果此时存在定时器的话，则取消之前的定时器重新记时\n    if (timer) {\n      clearTimeout(timer);\n      timer = null;\n    }\n\n    // 设置定时器，使事件间隔指定事件后执行\n    timer = setTimeout(() => {\n      fn.apply(context, args);\n    }, wait);\n  };\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("p",[n("strong",[s._v("函数节流的实现：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// 时间戳版\nfunction throttle(fn, delay) {\n  var preTime = Date.now();\n\n  return function() {\n    var context = this,\n      args = [...arguments],\n      nowTime = Date.now();\n\n    // 如果两次时间间隔超过了指定时间，则执行函数。\n    if (nowTime - preTime >= delay) {\n      preTime = Date.now();\n      return fn.apply(context, args);\n    }\n  };\n}\n\n// 定时器版\nfunction throttle (fun, wait){\n  let timeout = null\n  return function(){\n    let context = this\n    let args = [...arguments]\n    if(!timeout){\n      timeout = setTimeout(() => {\n        fun.apply(context, args)\n        timeout = null \n      }, wait)\n    }\n  }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br")])]),n("h2",{attrs:{id:"五、图片优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#五、图片优化"}},[s._v("#")]),s._v(" 五、图片优化")]),s._v(" "),n("h3",{attrs:{id:"_1-如何对项目中的图片进行优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-如何对项目中的图片进行优化"}},[s._v("#")]),s._v(" 1. 如何对项目中的图片进行优化？")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("不用图片。很多时候会使用到很多修饰类图片，其实这类修饰图片完全可以用 CSS 去代替。")])]),s._v(" "),n("li",[n("p",[s._v("对于移动端来说，屏幕宽度就那么点，完全没有必要去加载原图浪费带宽。一般图片都用 CDN 加载，可以计算出适配屏幕的宽度，然后去请求相应裁剪好的图片。")])]),s._v(" "),n("li",[n("p",[s._v("小图使用 base64 格式")])]),s._v(" "),n("li",[n("p",[s._v("将多个图标文件整合到一张图片中（雪碧图）")])]),s._v(" "),n("li",[n("p",[s._v("选择正确的图片格式：")])])]),s._v(" "),n("ul",[n("li",[n("p",[s._v("对于能够显示 WebP 格式的浏览器尽量使用 WebP 格式。因为 WebP 格式具有更好的图像数据压缩算法，能带来更小的图片体积，而且拥有肉眼识别无差异的图像质量，缺点就是兼容性并不好")])]),s._v(" "),n("li",[n("p",[s._v("小图使用 PNG，其实对于大部分图标这类图片，完全可以使用 SVG 代替")])]),s._v(" "),n("li",[n("p",[s._v("照片使用 JPEG")])])]),s._v(" "),n("h3",{attrs:{id:"_2-常见的图片格式及使用场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-常见的图片格式及使用场景"}},[s._v("#")]),s._v(" 2. 常见的图片格式及使用场景")]),s._v(" "),n("p",[s._v("（1）"),n("strong",[s._v("BMP")]),s._v("，是无损的、既支持索引色也支持直接色的点阵图。这种图片格式几乎没有对数据进行压缩，所以BMP格式的图片通常是较大的文件。")]),s._v(" "),n("p",[s._v("（2）"),n("strong",[s._v("GIF")]),s._v("是无损的、采用索引色的点阵图。采用LZW压缩算法进行编码。文件小，是GIF格式的优点，同时，GIF格式还具有支持动画以及透明的优点。但是GIF格式仅支持8bit的索引色，所以GIF格式适用于对色彩要求不高同时需要文件体积较小的场景。")]),s._v(" "),n("p",[s._v("（3）"),n("strong",[s._v("JPEG")]),s._v("是有损的、采用直接色的点阵图。JPEG的图片的优点是采用了直接色，得益于更丰富的色彩，JPEG非常适合用来存储照片，与GIF相比，JPEG不适合用来存储企业Logo、线框类的图。因为有损压缩会导致图片模糊，而直接色的选用，又会导致图片文件较GIF更大。")]),s._v(" "),n("p",[s._v("（4）"),n("strong",[s._v("PNG-8")]),s._v("是无损的、使用索引色的点阵图。PNG是一种比较新的图片格式，PNG-8是非常好的GIF格式替代者，在可能的情况下，应该尽可能的使用PNG-8而不是GIF，因为在相同的图片效果下，PNG-8具有更小的文件体积。除此之外，PNG-8还支持透明度的调节，而GIF并不支持。除非需要动画的支持，否则没有理由使用GIF而不是PNG-8。")]),s._v(" "),n("p",[s._v("（5）"),n("strong",[s._v("PNG-24")]),s._v("是无损的、使用直接色的点阵图。PNG-24的优点在于它压缩了图片的数据，使得同样效果的图片，PNG-24格式的文件大小要比BMP小得多。当然，PNG24的图片还是要比JPEG、GIF、PNG-8大得多。")]),s._v(" "),n("p",[s._v("（6）"),n("strong",[s._v("SVG")]),s._v("是无损的矢量图。SVG是矢量图意味着SVG图片由直线和曲线以及绘制它们的方法组成。当放大SVG图片时，看到的还是线和曲线，而不会出现像素点。这意味着SVG图片在放大时，不会失真，所以它非常适合用来绘制Logo、Icon等。")]),s._v(" "),n("p",[s._v("（7）"),n("strong",[s._v("WebP")]),s._v("是谷歌开发的一种新图片格式，WebP是同时支持有损和无损压缩的、使用直接色的点阵图。从名字就可以看出来它是为Web而生的，什么叫为Web而生呢？就是说相同质量的图片，WebP具有更小的文件体积。现在网站上充满了大量的图片，如果能够降低每一个图片的文件大小，那么将大大减少浏览器和服务器之间的数据传输量，进而降低访问延迟，提升访问体验。目前只有Chrome浏览器和Opera浏览器支持WebP格式，兼容性不太好。")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("在无损压缩的情况下，相同质量的WebP图片，文件大小要比PNG小26%；")])]),s._v(" "),n("li",[n("p",[s._v("在有损压缩的情况下，具有相同图片精度的WebP图片，文件大小要比JPEG小25%~34%；")])]),s._v(" "),n("li",[n("p",[s._v("WebP图片格式支持图片透明度，一个无损压缩的WebP图片，如果要支持透明度只需要22%的格外文件大小。")])])]),s._v(" "),n("h2",{attrs:{id:"六、webpack优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#六、webpack优化"}},[s._v("#")]),s._v(" 六、Webpack优化")]),s._v(" "),n("h3",{attrs:{id:"_1-如何提高webpack的打包速度"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-如何提高webpack的打包速度"}},[s._v("#")]),s._v(" 1. 如何提⾼"),n("strong",[s._v("webpack")]),s._v("的打包速度**?**")]),s._v(" "),n("h4",{attrs:{id:"_1-优化-loader"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-优化-loader"}},[s._v("#")]),s._v(" （1）优化 Loader")]),s._v(" "),n("p",[s._v("对于 Loader 来说，影响打包效率首当其冲必属 Babel 了。因为 Babel 会将代码转为字符串生成 AST，然后对 AST 继续进行转变最后再生成新的代码，项目越大，"),n("strong",[s._v("转换代码越多，效率就越低")]),s._v("。当然了，这是可以优化的。")]),s._v(" "),n("p",[s._v("首先我们"),n("strong",[s._v("优化 Loader 的文件搜索范围")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("module.exports = {\n  module: {\n    rules: [\n      {\n        // js 文件才使用 babel\n        test: /\\.js$/,\n        loader: 'babel-loader',\n        // 只在 src 文件夹下查找\n        include: [resolve('src')],\n        // 不会去查找的路径\n        exclude: /node_modules/\n      }\n    ]\n  }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("对于 Babel 来说，希望只作用在 JS 代码上的，然后 "),n("code",[s._v("node_modules")]),s._v(" 中使用的代码都是编译过的，所以完全没有必要再去处理一遍。")]),s._v(" "),n("p",[s._v("当然这样做还不够，还可以将 Babel 编译过的文件"),n("strong",[s._v("缓存")]),s._v("起来，下次只需要编译更改过的代码文件即可，这样可以大幅度加快打包时间")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("loader: 'babel-loader?cacheDirectory=true'\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h4",{attrs:{id:"_2-happypack"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-happypack"}},[s._v("#")]),s._v(" （2）HappyPack")]),s._v(" "),n("p",[s._v("受限于 Node 是单线程运行的，所以 Webpack 在打包的过程中也是单线程的，特别是在执行 Loader 的时候，长时间编译的任务很多，这样就会导致等待的情况。")]),s._v(" "),n("p",[n("strong",[s._v("HappyPack 可以将 Loader 的同步执行转换为并行的")]),s._v("，这样就能充分利用系统资源来加快打包效率了")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("module: {\n  loaders: [\n    {\n      test: /\\.js$/,\n      include: [resolve('src')],\n      exclude: /node_modules/,\n      // id 后面的内容对应下面\n      loader: 'happypack/loader?id=happybabel'\n    }\n  ]\n},\nplugins: [\n  new HappyPack({\n    id: 'happybabel',\n    loaders: ['babel-loader?cacheDirectory'],\n    // 开启 4 个线程\n    threads: 4\n  })\n]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("h4",{attrs:{id:"_3-dllplugin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-dllplugin"}},[s._v("#")]),s._v(" （3）DllPlugin")]),s._v(" "),n("p",[n("strong",[s._v("DllPlugin 可以将特定的类库提前打包然后引入")]),s._v("。这种方式可以极大的减少打包类库的次数，只有当类库更新版本才有需要重新打包，并且也实现了将公共代码抽离成单独文件的优化方案。DllPlugin的使用方法如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// 单独配置在一个文件中\n// webpack.dll.conf.js\nconst path = require('path')\nconst webpack = require('webpack')\nmodule.exports = {\n  entry: {\n    // 想统一打包的类库\n    vendor: ['react']\n  },\n  output: {\n    path: path.join(__dirname, 'dist'),\n    filename: '[name].dll.js',\n    library: '[name]-[hash]'\n  },\n  plugins: [\n    new webpack.DllPlugin({\n      // name 必须和 output.library 一致\n      name: '[name]-[hash]',\n      // 该属性需要与 DllReferencePlugin 中一致\n      context: __dirname,\n      path: path.join(__dirname, 'dist', '[name]-manifest.json')\n    })\n  ]\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("p",[s._v("然后需要执行这个配置文件生成依赖文件，接下来需要使用 "),n("code",[s._v("DllReferencePlugin")]),s._v(" 将依赖文件引入项目中")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// webpack.conf.js\nmodule.exports = {\n  // ...省略其他配置\n  plugins: [\n    new webpack.DllReferencePlugin({\n      context: __dirname,\n      // manifest 就是之前打包出来的 json 文件\n      manifest: require('./dist/vendor-manifest.json'),\n    })\n  ]\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h4",{attrs:{id:"_4-代码压缩"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-代码压缩"}},[s._v("#")]),s._v(" （4）代码压缩")]),s._v(" "),n("p",[s._v("在 Webpack3 中，一般使用 "),n("code",[s._v("UglifyJS")]),s._v(" 来压缩代码，但是这个是单线程运行的，为了加快效率，可以使用 "),n("code",[s._v("webpack-parallel-uglify-plugin")]),s._v(" 来并行运行 "),n("code",[s._v("UglifyJS")]),s._v("，从而提高效率。")]),s._v(" "),n("p",[s._v("在 Webpack4 中，不需要以上这些操作了，只需要将 "),n("code",[s._v("mode")]),s._v(" 设置为 "),n("code",[s._v("production")]),s._v(" 就可以默认开启以上功能。代码压缩也是我们必做的性能优化方案，当然我们不止可以压缩 JS 代码，还可以压缩 HTML、CSS 代码，并且在压缩 JS 代码的过程中，我们还可以通过配置实现比如删除 "),n("code",[s._v("console.log")]),s._v(" 这类代码的功能。")]),s._v(" "),n("h4",{attrs:{id:"_5-其他"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-其他"}},[s._v("#")]),s._v(" （5）其他")]),s._v(" "),n("p",[s._v("可以通过一些小的优化点来加快打包速度")]),s._v(" "),n("ul",[n("li",[n("p",[n("code",[s._v("resolve.extensions")]),s._v("：用来表明文件后缀列表，默认查找顺序是 "),n("code",[s._v("['.js', '.json']")]),s._v("，如果你的导入文件没有添加后缀就会按照这个顺序查找文件。我们应该尽可能减少后缀列表长度，然后将出现频率高的后缀排在前面")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("resolve.alias")]),s._v("：可以通过别名的方式来映射一个路径，能让 Webpack 更快找到路径")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("module.noParse")]),s._v("：如果你确定一个文件下没有其他依赖，就可以使用该属性让 Webpack 不扫描该文件，这种方式对于大型的类库很有帮助")])])]),s._v(" "),n("h3",{attrs:{id:"_2-如何减少-webpack-打包体积"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-如何减少-webpack-打包体积"}},[s._v("#")]),s._v(" 2. 如何减少 Webpack 打包体积")]),s._v(" "),n("h4",{attrs:{id:"_1-按需加载"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-按需加载"}},[s._v("#")]),s._v(" （1）按需加载")]),s._v(" "),n("p",[s._v("在开发 SPA 项目的时候，项目中都会存在很多路由页面。如果将这些页面全部打包进一个 JS 文件的话，虽然将多个请求合并了，但是同样也加载了很多并不需要的代码，耗费了更长的时间。那么为了首页能更快地呈现给用户，希望首页能加载的文件体积越小越好，"),n("strong",[s._v("这时候就可以使用按需加载，将每个路由页面单独打包为一个文件")]),s._v("。当然不仅仅路由可以按需加载，对于 "),n("code",[s._v("loadash")]),s._v(" 这种大型类库同样可以使用这个功能。")]),s._v(" "),n("p",[s._v("按需加载的代码实现这里就不详细展开了，因为鉴于用的框架不同，实现起来都是不一样的。当然了，虽然他们的用法可能不同，但是底层的机制都是一样的。都是当使用的时候再去下载对应文件，返回一个 "),n("code",[s._v("Promise")]),s._v("，当 "),n("code",[s._v("Promise")]),s._v(" 成功以后去执行回调。")]),s._v(" "),n("h4",{attrs:{id:"_2-scope-hoisting"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-scope-hoisting"}},[s._v("#")]),s._v(" （2）Scope Hoisting")]),s._v(" "),n("p",[n("strong",[s._v("Scope Hoisting 会分析出模块之间的依赖关系，尽可能的把打包出来的模块合并到一个函数中去。")])]),s._v(" "),n("p",[s._v("比如希望打包两个文件：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// test.js\nexport const a = 1\n// index.js\nimport { a } from './test.js'\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("对于这种情况，打包出来的代码会类似这样：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[\n  /* 0 */\n  function (module, exports, require) {\n    //...\n  },\n  /* 1 */\n  function (module, exports, require) {\n    //...\n  }\n]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("但是如果使用 Scope Hoisting ，代码就会尽可能的合并到一个函数中去，也就变成了这样的类似代码：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[\n  /* 0 */\n  function (module, exports, require) {\n    //...\n  }\n]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("这样的打包方式生成的代码明显比之前的少多了。如果在 Webpack4 中你希望开启这个功能，只需要启用 "),n("code",[s._v("optimization.concatenateModules")]),s._v(" 就可以了：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("module.exports = {\n  optimization: {\n    concatenateModules: true\n  }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h4",{attrs:{id:"_3-tree-shaking"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-tree-shaking"}},[s._v("#")]),s._v(" （3）Tree Shaking")]),s._v(" "),n("p",[n("strong",[s._v("Tree Shaking 可以实现删除项目中未被引用的代码")]),s._v("，比如：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// test.js\nexport const a = 1\nexport const b = 2\n// index.js\nimport { a } from './test.js'\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("对于以上情况，"),n("code",[s._v("test")]),s._v(" 文件中的变量 "),n("code",[s._v("b")]),s._v(" 如果没有在项目中使用到的话，就不会被打包到文件中。")]),s._v(" "),n("p",[s._v("如果使用 Webpack 4 的话，开启生产环境就会自动启动这个优化功能。")]),s._v(" "),n("h3",{attrs:{id:"_3-如何用webpack来优化前端性能"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-如何用webpack来优化前端性能"}},[s._v("#")]),s._v(" 3. 如何⽤"),n("strong",[s._v("webpack")]),s._v("来优化前端性能？")]),s._v(" "),n("p",[s._v("⽤webpack优化前端性能是指优化webpack的输出结果，让打包的最终结果在浏览器运⾏快速⾼效。")]),s._v(" "),n("ul",[n("li",[n("p",[n("strong",[s._v("压缩代码")]),s._v("：删除多余的代码、注释、简化代码的写法等等⽅式。可以利⽤webpack的 UglifyJsPlugin 和 ParallelUglifyPlugin 来压缩JS⽂件， 利⽤ cssnano （css-loader?minimize）来压缩css")])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("利⽤"),n("strong",[n("strong",[s._v("CDN")])]),s._v("加速")]),s._v(": 在构建过程中，将引⽤的静态资源路径修改为CDN上对应的路径。可以利⽤webpack对于 output 参数和各loader的 publicPath 参数来修改资源路径")])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("Tree Shaking")]),s._v(": 将代码中永远不会⾛到的⽚段删除掉。可以通过在启动webpack时追加参数 --optimize-minimize 来实现")])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("Code Splitting:")]),s._v(" 将代码按路由维度或者组件分块(chunk),这样做到按需加载,同时可以充分利⽤浏览器缓存")])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("提取公共第三⽅库")]),s._v(": SplitChunksPlugin插件来进⾏公共模块抽取,利⽤浏览器缓存可以⻓期缓存这些⽆需频繁变动的公共代码")])])]),s._v(" "),n("h3",{attrs:{id:"_4-如何提高webpack的构建速度"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-如何提高webpack的构建速度"}},[s._v("#")]),s._v(" 4. 如何提⾼"),n("strong",[s._v("webpack")]),s._v("的构建速度？")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("多⼊⼝情况下，使⽤ CommonsChunkPlugin 来提取公共代码")])]),s._v(" "),n("li",[n("p",[s._v("通过 externals 配置来提取常⽤库")])]),s._v(" "),n("li",[n("p",[s._v("利⽤ DllPlugin 和 DllReferencePlugin 预编译资源模块 通过 DllPlugin 来对那些我们引⽤但是绝对不会修改的npm包来进⾏预编译，再通过 DllReferencePlugin 将预编译的模块加载进来。")])]),s._v(" "),n("li",[n("p",[s._v("使⽤ Happypack 实现多线程加速编译")])]),s._v(" "),n("li",[n("p",[s._v("使⽤ webpack-uglify-parallel 来提升 uglifyPlugin 的压缩速度。 原理上 webpack-uglify-parallel 采⽤了多核并⾏压缩来提升压缩速度")])]),s._v(" "),n("li",[n("p",[s._v("使⽤ Tree-shaking 和 Scope Hoisting 来剔除多余代码")])])])])}),[],!1,null,null,null);a.default=t.exports}}]);