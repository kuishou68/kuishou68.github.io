(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{508:function(t,_,v){"use strict";v.r(_);var p=v(25),s=Object(p.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"_2021-计算机网络安全"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2021-计算机网络安全"}},[t._v("#")]),t._v(" 2021 计算机网络安全")]),t._v(" "),v("h3",{attrs:{id:"_1-get-和-post-的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-get-和-post-的区别"}},[t._v("#")]),t._v(" 1.Get 和 Post 的区别")]),t._v(" "),v("p",[v("strong",[t._v("结构")]),t._v("：get 有请求体，post没有请求体")]),t._v(" "),v("p",[v("strong",[t._v("应用场景")]),t._v("：get 用于获取数据，post用于提交数据；")]),t._v(" "),v("p",[v("strong",[t._v("缓存")]),t._v("：get 的缓存保存在浏览器和web服务器日志中；")]),t._v(" "),v("p",[v("strong",[t._v("传输方式")]),t._v("：get 使用明文传输，post请求保存在请求体中；")]),t._v(" "),v("p",[v("strong",[t._v("请求长度")]),t._v("：get 长度限制在2kb以内。")]),t._v(" "),v("h3",{attrs:{id:"_2-常见的http请求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-常见的http请求"}},[t._v("#")]),t._v(" 2.常见的HTTP请求")]),t._v(" "),v("p",[t._v("get、post、put、delete、head")]),t._v(" "),v("h3",{attrs:{id:"_3-http1-0-http1-1-http2-0-之间有哪些区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-http1-0-http1-1-http2-0-之间有哪些区别"}},[t._v("#")]),t._v(" 3.http1.0 / http1.1 / http2.0 之间有哪些区别？")]),t._v(" "),v("p",[t._v("http1.0 浏览器与服务器只保持短暂的连接，每次请求都需要向，服务器建立一个"),v("code",[t._v("TCP")]),t._v("连接；")]),t._v(" "),v("p",[t._v("http1.0 存在宽带资源浪费的现象，例如只需要某个对象的一部分，而服务器却把整个对象传输过来；")]),t._v(" "),v("p",[t._v("http1.1 支持"),v("strong",[t._v("长链接")]),t._v("，默认开启了keep-alive ，弥补了http1.0每次传输都需要创建链接的问题；")]),t._v(" "),v("p",[t._v("http1.1 使用"),v("strong",[t._v("持久连接")]),t._v("来时多个HTTP请求复用同一个TCP连接；")]),t._v(" "),v("p",[t._v("http1.1 支持"),v("strong",[t._v("管道传输")]),t._v(" ，一个请求发出去，不必等它回来，就可以发送第二次；")]),t._v(" "),v("p",[t._v("http1.1 引入了更多的"),v("strong",[t._v("缓存策略")]),t._v(" Etag 、If-Match、if-None-Match")]),t._v(" "),v("p",[t._v("http1.1 中"),v("strong",[t._v("新增了 host 字段")]),t._v("，用来指定服务器的域名。")]),t._v(" "),v("p",[v("strong",[t._v("二进制分帧、多路复用、数据流、头部压缩、基于HTTPS相对安全、服务器推送")])]),t._v(" "),v("p",[t._v("http2.0 使用"),v("strong",[t._v("二进制协议")]),t._v("，头部信息和数据体都是二进制，统称为'帧'；")]),t._v(" "),v("p",[t._v("http2.0 使用"),v("strong",[t._v("多路复用")]),t._v("TCP连接，客户端和服务端可以同时发送多个请求；")]),t._v(" "),v("p",[t._v("http2.0 将每个请求和回应都标记一个"),v("strong",[t._v("数据流")]),t._v("ID；")]),t._v(" "),v("p",[t._v("http2.0 头部使用gzip 和 compress "),v("strong",[t._v("压缩头部信息")]),t._v("，在客户端和服务器之间共同维护一张头信息索引表，每次请求只发送索引号，就能找到相应的头部信息表；")]),t._v(" "),v("p",[t._v("http2. 0 服务端不再是被动响应，可以"),v("strong",[t._v("主动向客户端发送消息")]),t._v("。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://pic1.zhimg.com/80/v2-64c703f21e03728f8ba7e103ba076001_720w.png",alt:""}})]),t._v(" "),v("h3",{attrs:{id:"_5-浏览器中输入www-baidu-com-发生了什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-浏览器中输入www-baidu-com-发生了什么"}},[t._v("#")]),t._v(" 5.浏览器中输入www.baidu.com 发生了什么？")]),t._v(" "),v("p",[t._v("（1）、首先判断输入的url是一个合法的连接还是待搜索关键词，如果是个合法的url 👇；")]),t._v(" "),v("p",[t._v("（2）、就进行"),v("strong",[t._v("缓存判断")]),t._v("，如果浏览器中有缓存资源，则直接访问缓存资源；如果没有，则开始👇;")]),t._v(" "),v("p",[t._v("（3）、"),v("strong",[t._v("DNS解析")]),t._v("，"),v("strong",[t._v("客户端")]),t._v("给"),v("strong",[t._v("本地DNS服务器")]),t._v("发送一个请求，查看是否存在缓存，有就直接访问；")]),t._v(" "),v("p",[t._v("​\t\t\t  如果没有，就向"),v("strong",[t._v("根域名服务器")]),t._v("发送请求，根域名服务器发现是.com或者.cn后缀的域名；")]),t._v(" "),v("p",[t._v("​\t\t\t  就交给"),v("strong",[t._v("顶级域名服务器")]),t._v("，顶级域名服务器返回baidu.com域名信息；")]),t._v(" "),v("p",[t._v("​\t\t\t  并让本地DNS转向访问"),v("strong",[t._v("权威域名服务器")]),t._v("，权威域名服务器返回www .baidu. com对应的IP地址，")]),t._v(" "),v("p",[t._v("​\t\t\t  同时本地DNS缓存该ip地址，客户端收到IP地址后进行访问。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://pic2.zhimg.com/80/v2-f4ab26c97e09b5a19549639c845efa81_720w.jpeg",alt:""}})]),t._v(" "),v("p",[t._v("（4）、CDN（内容分发网络）")]),t._v(" "),v("p",[t._v("​\t\t\t    如果服务器使用了CDN，DNS返回的不再是IP地址，而是"),v("strong",[t._v("CNAME")]),t._v("别名，指向全局均衡CNAME；")]),t._v(" "),v("p",[t._v("​\t\t\t    浏览器发送url给DNS服务器，"),v("strong",[t._v("DNS")]),t._v("进行域名解析，解析发现该url有一个"),v("strong",[t._v("CDN专用的DNS服务器")]),t._v("；")]),t._v(" "),v("p",[t._v("​\t\t\t    DNS会将解析权交给CNAME指向的"),v("strong",[t._v("CDN专用DNS服务器")]),t._v("，"),v("strong",[t._v("CDN专用DNS服务器")]),t._v("将IP返回给浏览器；")]),t._v(" "),v("p",[t._v("​\t\t\t    "),v("strong",[t._v("浏览器")]),t._v("向"),v("strong",[t._v("CDN全局负载均衡服务器")]),t._v("发起请求，"),v("strong",[t._v("CDN全局负载均衡服务器")]),t._v("根据IP；")]),t._v(" "),v("p",[t._v("​\t\t\t    找到距离用户最近的"),v("strong",[t._v("区域负载均衡服务器")]),t._v("，选择合适的"),v("strong",[t._v("缓存服务器")]),t._v("响应用户的请求。")]),t._v(" "),v("p",[t._v("​\t\t\t    "),v("img",{attrs:{src:"https://pic3.zhimg.com/80/v2-357122dc9b44d4334f3496745a42c512_720w.png",alt:"Image"}})]),t._v(" "),v("p",[t._v("（5）、"),v("strong",[t._v("TCP三次握手")]),t._v("：")]),t._v(" "),v("p",[t._v("​\t\t\t\t第一次握手，客户端向服务器发送一个SYN的报文，并初始化序列 ISN;")]),t._v(" "),v("p",[t._v("​\t\t\t\t第二次握手，服务端收到客户端的SYN后，将ISN+1作为自己的ACK值，并以自己的SYN作为应答；")]),t._v(" "),v("p",[t._v("​\t\t\t\t第三次握手，客户端收到服务端的SYN后，向服务端发送一个ACK报文，值为ISN+1，服务器收到后双方就建立了连接。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://pic1.zhimg.com/80/v2-25c4281cd67d0d50dd982094ca8799c8_720w.png",alt:""}})]),t._v(" "),v("p",[t._v("🌰为什么是三次握手？不是两次、四次？")]),t._v(" "),v("p",[t._v("​\t\t\t三次握手可以"),v("strong",[t._v("阻止重复 历史连接的初始化")]),t._v("（主要原因）；")]),t._v(" "),v("p",[t._v("​\t\t\t三次握手可以"),v("strong",[t._v("同步双方的初始序列号")]),t._v("；")]),t._v(" "),v("p",[t._v("​\t\t\t三次握手可以"),v("strong",[t._v("避免资源浪费")]),t._v("。")]),t._v(" "),v("p",[t._v("🌰SYN是什么？ACK又是什么？")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://pica.zhimg.com/80/v2-5e9f32c48d16567886fa6d96903dcfa9_720w.png",alt:""}})]),t._v(" "),v("p",[t._v("（5）、"),v("strong",[t._v("页面渲染")]),t._v("：浏览器将html解析成DOM树，将css解析成CSSOM树，结合DOM树和CSSOM树生成渲染树。接着解析 "),v("script")])])}),[],!1,null,null,null);_.default=s.exports}}]);