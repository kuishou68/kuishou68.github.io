(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{445:function(t,_,v){"use strict";v.r(_);var s=v(25),a=Object(s.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"计算机网络安全"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#计算机网络安全"}},[t._v("#")]),t._v(" 计算机网络安全")]),t._v(" "),v("p",[t._v("（6）、"),v("strong",[t._v("TCP四次挥手")]),t._v("：")]),t._v(" "),v("p",[t._v("​\t\t\t\t第一次挥手，客户端向服务器发送一个FIN的报文，之后进入FIN_Wait_1状态；")]),t._v(" "),v("p",[t._v("​\t\t\t\t第二次挥手，服务端收到该报文后，向客户端发送ACK报文作为应答，接着服务端进入closed_wait状态；")]),t._v(" "),v("p",[t._v("​\t\t\t\t第三次挥手，客户端收到服务端的ACK报文后，进入FIN_Wait_2状态，等待服务端数据处理完，继续向客户端发送一个FIN报文，之后服务端进入了Last_ack状态；")]),t._v(" "),v("p",[t._v("​\t\t\t\t第四次挥手，客户端收到服务端的FIN报文后，就进入了Closed 状态，至此服务端已经完成了连接关闭。客户端在经过2msl后，自动进入closed状态，至此客户端进入了完成连接关闭。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://pica.zhimg.com/80/v2-476ffbb008e4ca296146f218fab6d790_720w.png",alt:""}})]),t._v(" "),v("h3",{attrs:{id:"_6-对keep-alive的理解"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-对keep-alive的理解"}},[t._v("#")]),t._v(" 6.对Keep-alive的理解")]),t._v(" "),v("p",[t._v("http1.0 默认开启的长链接（"),v("code",[t._v("keep-alive")]),t._v(" ），使用"),v("strong",[t._v("持久连接")]),t._v("来使"),v("strong",[t._v("多个http请求")]),t._v("复用同一个TCP连接，数据传输完成保持TCP连接不断开。")]),t._v(" "),v("p",[t._v("具有①减少CPU和内存的使用。②降低阻塞控制。③减小后续请求延迟。")]),t._v(" "),v("h3",{attrs:{id:"_7-什么是https协议-tcl-ssl-的工作原理是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-什么是https协议-tcl-ssl-的工作原理是什么"}},[t._v("#")]),t._v(" 7.什么是https协议？TCL/SSL 的工作原理是什么？")]),t._v(" "),v("p",[t._v("https是为了解决http中 ①内容可能被监听②不验证通信方身份的问题 产生的，这里的"),v("code",[t._v("s")]),t._v("表示TLS/SSL协议，其中SSL的实现，主要依赖于"),v("strong",[t._v("对称加密、非对称加密、摘要算法、数字签名")]),t._v("这几种手段。")]),t._v(" "),v("p",[v("strong",[t._v("对称加密")]),t._v("：加密和解密使用的密钥都是同一个，是对称的。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://pic2.zhimg.com/80/v2-6c9e4a7b9498563e8374d8566a395b19_720w.png",alt:""}})]),t._v(" "),v("p",[v("strong",[t._v("非对称加密")]),t._v("：存在两个密钥，一个公钥，一个私钥。公钥和私钥都可以用来加密解密，公钥加密的必须使用私钥解密。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://pic2.zhimg.com/80/v2-d7e8da944c0dbd4e7f6cf8bc3b73b565_720w.png",alt:""}})]),t._v(" "),v("p",[v("strong",[t._v("混合加密")]),t._v("：对称加密+非对称加密，具体做法："),v("strong",[t._v("发送密文的一方")]),t._v("使用"),v("strong",[t._v("对方的公钥")]),t._v("对“"),v("strong",[t._v("对称密钥")]),t._v("”进行加密，然后"),v("strong",[t._v("对方")]),t._v("用"),v("strong",[t._v("自己的密钥")]),t._v("对“"),v("strong",[t._v("对称的密钥")]),t._v("”解密；")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://pic2.zhimg.com/80/v2-a17673e609f65473ee5a879260c18ddb_720w.png",alt:""}})]),t._v(" "),v("p",[v("strong",[t._v("摘要算法")]),t._v("：把任意长度的密钥压缩成固定长度，形成了一个独一无二的的”摘要“字符串；")]),t._v(" "),v("p",[t._v('摘要算法可以理解为“单向"加密算法，常用的算法是 SHA-2，只有算法，没有密钥，加密后的数据无法解密；')]),t._v(" "),v("p",[t._v("但是不具有机密性，如果黑客把传递的消息和摘要一起改了，完整鉴别不出完整性！")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://pica.zhimg.com/80/v2-fb1237922405bd3d4073de518567cda0_720w.png",alt:""}})]),t._v(" "),v("p",[v("strong",[t._v("数字签名")]),t._v("：私钥对摘要的加密，可以由公钥解密后验证，把公钥私钥的用法反过来，私钥加密、公钥解密。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://pic2.zhimg.com/80/v2-3525d626e47dc34b153cd54ebd227c7d_720w.png",alt:""}})]),t._v(" "),v("h3",{attrs:{id:"_8-https是如何保证安全的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_8-https是如何保证安全的"}},[t._v("#")]),t._v(" 8.HTTPS是如何保证安全的？")]),t._v(" "),v("p",[t._v("​\t\t\t数字证书认证机构（CA）: 服务端向数字证书认证机构提出公开密钥申请，数字证书认证机构确定申请者的身份后，会对已申请的公开密钥做数字签名；然后分配这个已签名的公开密钥，并将公开密钥放入公钥证书后绑定在一起；服务端会将这份数字证书发送给客户端，以进行非对称加密通信；接收到证书的客户端使用数字证书认证机构的公开密钥，对服务器发送过来的数字签名进行认证，验证通过，则证明认证服务器公开密钥是真正有效的认证机构。")]),t._v(" "),v("h3",{attrs:{id:"_9-常见的状态码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_9-常见的状态码"}},[t._v("#")]),t._v(" 9.常见的状态码")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("状态码")]),t._v(" "),v("th",[t._v("含义")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("1xx")]),t._v(" "),v("td",[t._v("信息状态码")]),t._v(" "),v("td",[t._v("接收的请求正在处理")])]),t._v(" "),v("tr",[v("td",[t._v("2xx")]),t._v(" "),v("td",[t._v("成功状态码")]),t._v(" "),v("td",[t._v("请求正常处理完毕")])]),t._v(" "),v("tr",[v("td",[t._v("204")]),t._v(" "),v("td",[t._v("响应头没有body数据")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("206")]),t._v(" "),v("td",[t._v("相应头的body不是资源的全部")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("3xx")]),t._v(" "),v("td",[t._v("重定向")]),t._v(" "),v("td",[t._v("客户端请求资源变动，需重新发送请求")])]),t._v(" "),v("tr",[v("td",[t._v("301")]),t._v(" "),v("td",[t._v("永久重定向")]),t._v(" "),v("td",[t._v("请求资源不存在了，需要用新的url访问")])]),t._v(" "),v("tr",[v("td",[t._v("302")]),t._v(" "),v("td",[t._v("临时重定向")]),t._v(" "),v("td",[t._v("请求资源还在，暂时用新的url访问")])]),t._v(" "),v("tr",[v("td",[t._v("304")]),t._v(" "),v("td",[t._v("缓存重定向")]),t._v(" "),v("td",[t._v("重定向已缓存文件")])]),t._v(" "),v("tr",[v("td",[t._v("4xx")]),t._v(" "),v("td",[t._v("客户端错误")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("403")]),t._v(" "),v("td",[t._v("服务器禁止访问资源")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("404")]),t._v(" "),v("td",[t._v("请求的资源找不到")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("5xx")]),t._v(" "),v("td",[t._v("服务器内部错误")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("501")]),t._v(" "),v("td",[t._v("客户端请求的功能还不支持")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("502")]),t._v(" "),v("td",[t._v("服务器自身工作正常，访问后端服务器发生错误")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("503")]),t._v(" "),v("td",[t._v("服务器很忙，暂时无法响应")]),t._v(" "),v("td")])])]),t._v(" "),v("h3",{attrs:{id:"_10-tcp和udp的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-tcp和udp的区别"}},[t._v("#")]),t._v(" 10.TCP和UDP的区别")]),t._v(" "),v("p",[t._v("UDP(用户数据报协议)：对应用层交下来的报文，不合并、不拆分，只是在其上面加个首部就交给网络层；")]),t._v(" "),v("p",[t._v("TCP(传输控制协议)：把上应用层交下来的数据看成无结构的字节流来发送。")]),t._v(" "),v("p",[t._v("①TCP是面向连接协议，建立连接3次握手，断开连接4次挥手；UDP是面向无连接，接收端从消息队列读取，发送端将数据发送到网络。")]),t._v(" "),v("p",[t._v("②TCP提供可靠服务，传输过程可以确保数据无差错，不丢失；UDP尽可能传递数据，但不保证数据是否安全到达。")]),t._v(" "),v("p",[t._v("③TCP面向字节流，将应用层报文看作无结构的字节流，芬姐为多个报文段传输后，在目的站重新装配；UDP面向报文，不合并也不拆分，只保留报文边界。")]),t._v(" "),v("p",[t._v("④TCP只能点对点，双工传输；UDP支持一对一、一对多、多对一和多对多传输。")]),t._v(" "),v("p",[t._v("⑤TCP传输效率低；UDP传输效率高。")]),t._v(" "),v("h3",{attrs:{id:"_11-tcp和udp的使用场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_11-tcp和udp的使用场景"}},[t._v("#")]),t._v(" 11.TCP和UDP的使用场景")]),t._v(" "),v("p",[t._v("TCP：SMTP(电子邮件)、Telnet(传输终端接入)、Http(万维网)、FTP(文件传输系统)；")]),t._v(" "),v("p",[t._v("UDP：DNS(域名服务系统)、TFTP(文件传输)、SNMP(网络管理)、NFS(远程文件服务器)；")]),t._v(" "),v("h3",{attrs:{id:"_12-tcp粘包是怎么回事-如何解决"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_12-tcp粘包是怎么回事-如何解决"}},[t._v("#")]),t._v(" 12.TCP粘包是怎么回事？ 如何解决？")]),t._v(" "),v("p",[t._v("如果一次请求发送的数据量较小，没达到缓冲区大小，TCP则会将多个请求合并为同一个请求进行发送，这就造成了TCP粘包的问题。")]),t._v(" "),v("p",[t._v("解决方案：①发送端将每个报封装成固定长度；")]),t._v(" "),v("p",[t._v("​\t\t\t\t\t②发送端在每个包末尾使用固定分隔符；")]),t._v(" "),v("p",[t._v("​\t\t\t\t\t③将消息分成头部和消息体，头部信息足够长才算读到一个完整的消息。")])])}),[],!1,null,null,null);_.default=a.exports}}]);