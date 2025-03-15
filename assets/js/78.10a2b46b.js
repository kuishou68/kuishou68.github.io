(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{430:function(e,a,s){"use strict";s.r(a);var v=s(25),t=Object(v.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"前端面试题之html篇"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端面试题之html篇"}},[e._v("#")]),e._v(" 前端面试题之HTML篇")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/1500604/1621600195788-acab59b1-a654-4ec4-b9c2-0a491a660671.png",alt:"img"}})]),e._v(" "),s("h3",{attrs:{id:"_1-src和href的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-src和href的区别"}},[e._v("#")]),e._v(" 1. src和href的区别")]),e._v(" "),s("p",[s("strong",[e._v("src 用于替换当前元素，href 用于在当前文档和引用资源之间确立联系。")])]),e._v(" "),s("p",[e._v("（1）src")]),e._v(" "),s("p",[e._v("src 是 source 的缩写，指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求 src 资源时会将其指向的资源下载并应用到文档内，例如 js 脚本，img 图片和 frame 等元素。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("<script src =”js.js”><\/script>\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似于将所指向资源嵌入当前标签内。这也是为什么将js 脚本放在底部而不是头部。")]),e._v(" "),s("p",[e._v("（2）href")]),e._v(" "),s("p",[e._v("href 是 Hypertext Reference 的缩写，指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，如果在文档中添加")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("<link href=”common.css” rel=”stylesheet”/>\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("那么浏览器会识别该文档为 css 文件，就会并行下载资源并且不会停止对当前文档的处理。 这也是为什么建议使用 link 方式来加载 css，而不是使用@import 方式。")]),e._v(" "),s("h3",{attrs:{id:"_2-对html语义化的理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-对html语义化的理解"}},[e._v("#")]),e._v(" 2. 对HTML语义化的理解")]),e._v(" "),s("p",[s("strong",[e._v("语义化是指****根据内容的结构化（内容语义化），选择合适的标签（代码语义化）")]),e._v("。通俗来讲就是用正确的标签做正确的事情。")]),e._v(" "),s("p",[e._v("语义化的优点如下：")]),e._v(" "),s("ul",[s("li",[e._v("对机器友好，带有语义的文字表现力丰富，更适合搜索引擎的爬虫爬取有效信息，有利于SEO。除此之外，语义类还支持读屏软件，根据文章可以自动生成目录；")]),e._v(" "),s("li",[e._v("对开发者友好，使用语义类标签增强了可读性，结构更加清晰，开发者能清晰的看出网页的结构，便于团队的开发与维护。")])]),e._v(" "),s("p",[e._v("常见的语义化标签：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("<header></header>  头部\n\n<nav></nav>  导航栏\n\n<section></section>  区块（有语义化的div）\n\n<main></main>  主要区域\n\n<article></article>  主要内容\n\n<aside></aside>  侧边栏\n\n<footer></footer>  底部\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br")])]),s("h3",{attrs:{id:"_3-doctype-文档类型-的作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-doctype-文档类型-的作用"}},[e._v("#")]),e._v(" 3. DOCTYPE(⽂档类型) 的作⽤")]),e._v(" "),s("p",[e._v("DOCTYPE是HTML5中一种标准通用标记语言的文档类型声明，它的目的是"),s("strong",[e._v("告诉浏览器（解析器）应该以什么样（html或xhtml）的文档类型定义****来解析文档")]),e._v("，不同的渲染模式会影响浏览器对 CSS 代码甚⾄ JavaScript 脚本的解析。它必须声明在HTML⽂档的第⼀⾏。")]),e._v(" "),s("p",[e._v("浏览器渲染页面的两种模式（可通过document.compatMode获取，比如，语雀官网的文档类型是"),s("strong",[e._v("CSS1Compat")]),e._v("）：")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("CSS1Compat：标准模式（Strick mode）")]),e._v("，默认模式，浏览器使用W3C的标准解析渲染页面。在标准模式中，浏览器以其支持的最高标准呈现页面。")]),e._v(" "),s("li",[s("strong",[e._v("BackCompat：怪异模式(混杂模式)(Quick mode)")]),e._v("，浏览器使用自己的怪异模式解析渲染页面。在怪异模式中，页面以一种比较宽松的向后兼容的方式显示。")])]),e._v(" "),s("h3",{attrs:{id:"_4-script标签中defer和async的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-script标签中defer和async的区别"}},[e._v("#")]),e._v(" 4. script标签中defer和async的区别")]),e._v(" "),s("p",[e._v("如果没有defer或async属性，浏览器会立即加载并执行相应的脚本。它不会等待后续加载的文档元素，读取到就会开始加载和执行，这样就阻塞了后续文档的加载。")]),e._v(" "),s("p",[e._v("下图可以直观的看出三者之间的区别:")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1500604/1603547262709-5029c4e4-42f5-4fd4-bcbb-c0e0e3a40f5a.png",alt:"img"}})]),e._v(" "),s("p",[e._v("其中蓝色代表js脚本网络加载时间，红色代表js脚本执行时间，绿色代表html解析。")]),e._v(" "),s("p",[s("strong",[e._v("defer 和 async属性都是去异步加载外部的JS脚本文件，它们都不会阻塞页面的解析")]),e._v("，其区别如下：")]),e._v(" "),s("ul",[s("li",[e._v("**执行顺序：**多个带async属性的标签，不能保证加载的顺序；多个带defer属性的标签，按照加载顺序执行；")]),e._v(" "),s("li",[s("strong",[e._v("脚本是否并行执行："),s("strong",[e._v("async属性，表示")]),e._v("后续文档与js脚本的加载和执行是并行进行的")]),e._v("，即异步执行；defer属性，加载后续文档的过程和js脚本的加载(此时仅加载不执行)是并行进行的(异步)，"),s("strong",[e._v("js脚本需要等到文档所有元素解析完成之后才执行")]),e._v("，在DOMContentLoaded事件触发执行之前。")])]),e._v(" "),s("h3",{attrs:{id:"_5-常用的meta标签有哪些"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-常用的meta标签有哪些"}},[e._v("#")]),e._v(" 5. 常⽤的meta标签有哪些")]),e._v(" "),s("p",[s("code",[e._v("meta")]),e._v(" 标签由 "),s("code",[e._v("name")]),e._v(" 和 "),s("code",[e._v("content")]),e._v(" 属性定义，"),s("strong",[e._v("用来描述网页文档的属性")]),e._v("，比如网页的作者，网页描述，关键词等，除了HTTP标准固定了一些"),s("code",[e._v("name")]),e._v("作为大家使用的共识，开发者还可以自定义name。")]),e._v(" "),s("p",[e._v("常用的meta标签：")]),e._v(" "),s("p",[e._v("（1）"),s("code",[e._v("charset")]),e._v("，用来描述HTML文档的编码类型：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<meta charset="UTF-8" >\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("（2） "),s("code",[e._v("keywords")]),e._v("，页面关键词：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<meta name="keywords" content="关键词" />\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("（3）"),s("code",[e._v("description")]),e._v("，页面描述：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<meta name="description" content="页面描述内容" />\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("（4）"),s("code",[e._v("refresh")]),e._v("，页面重定向和刷新：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<meta http-equiv="refresh" content="0;url=" />\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("（5）"),s("code",[e._v("viewport")]),e._v("，适配移动端，可以控制视口的大小和比例：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("其中，"),s("code",[e._v("content")]),e._v(" 参数有以下几种：")]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("width viewport")]),e._v(" ：宽度(数值/device-width)")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("height viewport")]),e._v(" ：高度(数值/device-height)")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("initial-scale")]),e._v(" ：初始缩放比例")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("maximum-scale")]),e._v(" ：最大缩放比例")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("minimum-scale")]),e._v(" ：最小缩放比例")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("user-scalable")]),e._v(" ：是否允许用户缩放(yes/no）")])])]),e._v(" "),s("p",[e._v("（6）搜索引擎索引方式：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<meta name="robots" content="index,follow" />\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("其中，"),s("code",[e._v("content")]),e._v(" 参数有以下几种：")]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("all")]),e._v("：文件将被检索，且页面上的链接可以被查询；")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("none")]),e._v("：文件将不被检索，且页面上的链接不可以被查询；")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("index")]),e._v("：文件将被检索；")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("follow")]),e._v("：页面上的链接可以被查询；")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("noindex")]),e._v("：文件将不被检索；")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("nofollow")]),e._v("：页面上的链接不可以被查询。")])])]),e._v(" "),s("h3",{attrs:{id:"_6-html5有哪些更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-html5有哪些更新"}},[e._v("#")]),e._v(" 6. HTML5有哪些更新")]),e._v(" "),s("h4",{attrs:{id:"_1-语义化标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-语义化标签"}},[e._v("#")]),e._v(" 1. 语义化标签")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("header：定义文档的页眉（头部）；")])]),e._v(" "),s("li",[s("p",[e._v("nav：定义导航链接的部分；")])]),e._v(" "),s("li",[s("p",[e._v("footer：定义文档或节的页脚（底部）；")])]),e._v(" "),s("li",[s("p",[e._v("article：定义文章内容；")])]),e._v(" "),s("li",[s("p",[e._v("section：定义文档中的节（section、区段）；")])]),e._v(" "),s("li",[s("p",[e._v("aside：定义其所处内容之外的内容（侧边）；")])])]),e._v(" "),s("h4",{attrs:{id:"_2-媒体标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-媒体标签"}},[e._v("#")]),e._v(" 2. 媒体标签")]),e._v(" "),s("p",[e._v("（1） audio：音频")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("<audio src='' controls autoplay loop='true'></audio>\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("属性：")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("controls 控制面板")])]),e._v(" "),s("li",[s("p",[e._v("autoplay 自动播放")])]),e._v(" "),s("li",[s("p",[e._v("loop=‘true’ 循环播放")])])]),e._v(" "),s("p",[e._v("（2）video视频")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("<video src='' poster='imgs/aa.jpg' controls></video>\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("属性：")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("poster：指定视频还没有完全下载完毕，或者用户还没有点击播放前显示的封面。默认显示当前视频文件的第一针画面，当然通过poster也可以自己指定。")])]),e._v(" "),s("li",[s("p",[e._v("controls 控制面板")])]),e._v(" "),s("li",[s("p",[e._v("width")])]),e._v(" "),s("li",[s("p",[e._v("height")])])]),e._v(" "),s("p",[e._v("（3）source标签")]),e._v(" "),s("p",[e._v("因为浏览器对视频格式支持程度不一样，为了能够兼容不同的浏览器，可以通过source来指定视频源。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("<video>\n \t<source src='aa.flv' type='video/flv'></source>\n \t<source src='aa.mp4' type='video/mp4'></source>\n</video>\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("h4",{attrs:{id:"_3-表单"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-表单"}},[e._v("#")]),e._v(" 3. 表单")]),e._v(" "),s("p",[s("strong",[e._v("表单类型：")])]),e._v(" "),s("ul",[s("li",[s("p",[e._v("email ：能够验证当前输入的邮箱地址是否合法")])]),e._v(" "),s("li",[s("p",[e._v("url ： 验证URL")])]),e._v(" "),s("li",[s("p",[e._v("number ： 只能输入数字，其他输入不了，而且自带上下增大减小箭头，max属性可以设置为最大值，min可以设置为最小值，value为默认值。")])]),e._v(" "),s("li",[s("p",[e._v("search ： 输入框后面会给提供一个小叉，可以删除输入的内容，更加人性化。")])]),e._v(" "),s("li",[s("p",[e._v("range ： 可以提供给一个范围，其中可以设置max和min以及value，其中value属性可以设置为默认值")])]),e._v(" "),s("li",[s("p",[e._v("color ： 提供了一个颜色拾取器")])]),e._v(" "),s("li",[s("p",[e._v("time ： 时分秒")])]),e._v(" "),s("li",[s("p",[e._v("data ： 日期选择年月日")])]),e._v(" "),s("li",[s("p",[e._v("datatime ： 时间和日期(目前只有Safari支持)")])]),e._v(" "),s("li",[s("p",[e._v("datatime-local ：日期时间控件")])]),e._v(" "),s("li",[s("p",[e._v("week ：周控件")])]),e._v(" "),s("li",[s("p",[e._v("month：月控件")])])]),e._v(" "),s("p",[s("strong",[e._v("表单属性：")])]),e._v(" "),s("ul",[s("li",[s("p",[e._v("placeholder ：提示信息")])]),e._v(" "),s("li",[s("p",[e._v("autofocus ：自动获取焦点")])]),e._v(" "),s("li",[s("p",[e._v("autocomplete=“on” 或者 autocomplete=“off” 使用这个属性需要有两个前提：")])]),e._v(" "),s("li",[s("p",[e._v("表单必须提交过")])]),e._v(" "),s("li",[s("p",[e._v("必须有name属性。")])]),e._v(" "),s("li",[s("p",[e._v("required：要求输入框不能为空，必须有值才能够提交。")])]),e._v(" "),s("li",[s("p",[e._v('pattern=" " 里面写入想要的正则模式，例如手机号patte="^(+86)?\\d{10}$"')])]),e._v(" "),s("li",[s("p",[e._v("multiple：可以选择多个文件或者多个邮箱")])]),e._v(" "),s("li",[s("p",[e._v('form=" form表单的ID"')])])]),e._v(" "),s("p",[s("strong",[e._v("表单事件：")])]),e._v(" "),s("ul",[s("li",[e._v("oninput 每当input里的输入框内容发生变化都会触发此事件。")]),e._v(" "),s("li",[e._v("oninvalid 当验证不通过时触发此事件。")])]),e._v(" "),s("h4",{attrs:{id:"_4-进度条、度量器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-进度条、度量器"}},[e._v("#")]),e._v(" 4. 进度条、度量器")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("progress标签：用来表示任务的进度（IE、Safari不支持），max用来表示任务的进度，value表示已完成多少")])]),e._v(" "),s("li",[s("p",[e._v("meter属性：用来显示剩余容量或剩余库存（IE、Safari不支持）")])]),e._v(" "),s("li",[s("p",[e._v("high/low：规定被视作高/低的范围")])]),e._v(" "),s("li",[s("p",[e._v("max/min：规定最大/小值")])]),e._v(" "),s("li",[s("p",[e._v("value：规定当前度量值")])])]),e._v(" "),s("p",[e._v("设置规则：min < low < high < max")]),e._v(" "),s("h4",{attrs:{id:"_5-dom查询操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-dom查询操作"}},[e._v("#")]),e._v(" 5.DOM查询操作")]),e._v(" "),s("ul",[s("li",[e._v("document.querySelector()")]),e._v(" "),s("li",[e._v("document.querySelectorAll()")])]),e._v(" "),s("p",[e._v("它们选择的对象可以是标签，可以是类(需要加点)，可以是ID(需要加#)")]),e._v(" "),s("h4",{attrs:{id:"_6-web存储"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-web存储"}},[e._v("#")]),e._v(" 6. Web存储")]),e._v(" "),s("p",[e._v("HTML5 提供了两种在客户端存储数据的新方法：")]),e._v(" "),s("ul",[s("li",[e._v("localStorage - 没有时间限制的数据存储")]),e._v(" "),s("li",[e._v("sessionStorage - 针对一个 session 的数据存储")])]),e._v(" "),s("h4",{attrs:{id:"_7-其他"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-其他"}},[e._v("#")]),e._v(" 7. 其他")]),e._v(" "),s("ul",[s("li",[e._v("拖放：拖放是一种常见的特性，即抓取对象以后拖到另一个位置。设置元素可拖放：")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<img draggable="true" />\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ul",[s("li",[e._v("画布（canvas ）： canvas 元素使用 JavaScript 在网页上绘制图像。画布是一个矩形区域，可以控制其每一像素。canvas 拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<canvas id="myCanvas" width="200" height="100"></canvas>\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ul",[s("li",[e._v("SVG：SVG 指可伸缩矢量图形，用于定义用于网络的基于矢量的图形，使用 XML 格式定义图形，图像在放大或改变尺寸的情况下其图形质量不会有损失，它是万维网联盟的标准")]),e._v(" "),s("li",[e._v("地理定位：Geolocation（地理定位）用于定位用户的位置。‘")])]),e._v(" "),s("p",[s("strong",[e._v("总结：")])]),e._v(" "),s("p",[e._v("（1）新增语义化标签：nav、header、footer、aside、section、article")]),e._v(" "),s("p",[e._v("（2）音频、视频标签：audio、video")]),e._v(" "),s("p",[e._v("（3）数据存储：localStorage、sessionStorage")]),e._v(" "),s("p",[e._v("（4）canvas（画布）、Geolocation（地理定位）、websocket（通信协议）")]),e._v(" "),s("p",[e._v("（5）input标签新增属性：placeholder、autocomplete、autofocus、required")]),e._v(" "),s("p",[e._v("（6）history API：go、forward、back、pushstate")]),e._v(" "),s("p",[s("strong",[e._v("移除的元素有：")])]),e._v(" "),s("ul",[s("li",[e._v("纯表现的元素：basefont，big，center，font, s，strike，tt，u;")]),e._v(" "),s("li",[e._v("对可用性产生负面影响的元素：frame，frameset，noframes；")])]),e._v(" "),s("h3",{attrs:{id:"_7-img的srcset属性的作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-img的srcset属性的作用"}},[e._v("#")]),e._v(" 7. img的srcset属性的作⽤？")]),e._v(" "),s("p",[e._v("响应式页面中经常用到根据屏幕密度设置不同的图片。这时就用到了 img 标签的srcset属性。srcset属性用于"),s("strong",[e._v("设置不同屏幕密度下，img 会自动加载不同的图片")]),e._v("。用法如下：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<img src="image-128.png" srcset="image-256.png 2x" />\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("使用上面的代码，就能实现在屏幕密度为1x的情况下加载image-128.png, 屏幕密度为2x时加载image-256.png。")]),e._v(" "),s("p",[e._v("按照上面的实现，不同的屏幕密度都要设置图片地址，目前的屏幕密度有1x,2x,3x,4x四种，如果每一个图片都设置4张图片，加载就会很慢。所以就有了新的srcset标准。代码如下：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<img src="image-128.png"\n     srcset="image-128.png 128w, image-256.png 256w, image-512.png 512w"\n     sizes="(max-width: 360px) 340px, 128px" />\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("其中srcset指定图片的地址和对应的图片质量。sizes用来设置图片的尺寸零界点。对于 srcset 中的 w 单位，可以理解成图片质量。如果可视区域小于这个质量的值，就可以使用。浏览器会自动选择一个最小的可用图片。")]),e._v(" "),s("p",[e._v("sizes语法如下：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('sizes="[media query] [length], [media query] [length] ... "\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("sizes就是指默认显示128px, 如果视区宽度大于360px, 则显示340px。")]),e._v(" "),s("h3",{attrs:{id:"_8-行内元素有哪些-块级元素有哪些-空-void-元素有那些"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-行内元素有哪些-块级元素有哪些-空-void-元素有那些"}},[e._v("#")]),e._v(" 8.  行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？")]),e._v(" "),s("ul",[s("li",[e._v("行内元素有："),s("code",[e._v("a b span img input select strong")]),e._v("；")]),e._v(" "),s("li",[e._v("块级元素有："),s("code",[e._v("div ul ol li dl dt dd h1 h2 h3 h4 h5 h6 p")]),e._v("；")])]),e._v(" "),s("p",[e._v("空元素，即没有内容的HTML元素。空元素是在开始标签中关闭的，也就是空元素没有闭合标签：")]),e._v(" "),s("ul",[s("li",[e._v("常见的有："),s("code"),e._v("、"),s("code",[e._v("、")]),e._v("、"),s("code",[e._v("、")]),e._v("、``；")]),e._v(" "),s("li",[e._v("鲜见的有："),s("code",[e._v("、")]),e._v("、、、"),s("code",[e._v("、")]),e._v("、"),s("code",[e._v("、")]),e._v("、"),s("code",[e._v("、")]),e._v("、``。")])]),e._v(" "),s("h3",{attrs:{id:"_9-对-web-worker-的理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-对-web-worker-的理解"}},[e._v("#")]),e._v(" 9. 对 web worker 的理解")]),e._v(" "),s("p",[e._v("在 HTML 页面中，如果在执行脚本时，页面的状态是不可相应的，直到脚本执行完成后，页面才变成可相应。web worker 是运行在后台的 js，独立于其他脚本，不会影响页面的性能。 并且通过 postMessage 将结果回传到主线程。这样在进行复杂操作的时候，就不会阻塞主线程了。")]),e._v(" "),s("p",[e._v("如何创建 web worker：")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("检测浏览器对于 web worker 的支持性")])]),e._v(" "),s("li",[s("p",[e._v("创建 web worker 文件（js，回传函数等）")])]),e._v(" "),s("li",[s("p",[e._v("创建 web worker 对象")])])]),e._v(" "),s("h3",{attrs:{id:"_10-html5的离线储存怎么使用-它的工作原理是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-html5的离线储存怎么使用-它的工作原理是什么"}},[e._v("#")]),e._v(" 10. HTML5的离线储存怎么使用，它的工作原理是什么")]),e._v(" "),s("p",[e._v("离线存储指的是：在用户没有与因特网连接时，可以正常访问站点或应用，在用户与因特网连接时，更新用户机器上的缓存文件。")]),e._v(" "),s("p",[e._v("**原理：**HTML5的离线存储是基于一个新建的 "),s("code",[e._v(".appcache")]),e._v(" 文件的缓存机制(不是存储技术)，通过这个文件上的解析清单离线存储资源，这些资源就会像cookie一样被存储了下来。之后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面展示")]),e._v(" "),s("p",[s("strong",[e._v("使用方法：")])]),e._v(" "),s("p",[e._v("（1）创建一个和 html 同名的 manifest 文件，然后在页面头部加入 manifest 属性：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<html lang="en" manifest="index.manifest">\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("（2）在 "),s("code",[e._v("cache.manifest")]),e._v(" 文件中编写需要离线存储的资源：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("CACHE MANIFEST\n    #v0.11\n    CACHE:\n    js/app.js\n    css/style.css\n    NETWORK:\n    resourse/logo.png\n    FALLBACK:\n    / /offline.html\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("ul",[s("li",[s("p",[s("strong",[e._v("CACHE")]),e._v(": 表示需要离线存储的资源列表，由于包含 manifest 文件的页面将被自动离线存储，所以不需要把页面自身也列出来。")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("NETWORK")]),e._v(": 表示在它下面列出来的资源只有在在线的情况下才能访问，他们不会被离线存储，所以在离线情况下无法使用这些资源。不过，如果在 CACHE 和 NETWORK 中有一个相同的资源，那么这个资源还是会被离线存储，也就是说 CACHE 的优先级更高。")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("FALLBACK")]),e._v(": 表示如果访问第一个资源失败，那么就使用第二个资源来替换他，比如上面这个文件表示的就是如果访问根目录下任何一个资源失败了，那么就去访问 offline.html 。")])])]),e._v(" "),s("p",[e._v("（3）在离线状态时，操作 "),s("code",[e._v("window.applicationCache")]),e._v(" 进行离线缓存的操作。")]),e._v(" "),s("p",[s("strong",[e._v("如何更新缓存：")])]),e._v(" "),s("p",[e._v("（1）更新 manifest 文件")]),e._v(" "),s("p",[e._v("（2）通过 javascript 操作")]),e._v(" "),s("p",[e._v("（3）清除浏览器缓存")]),e._v(" "),s("p",[s("strong",[e._v("注意事项：")])]),e._v(" "),s("p",[e._v("（1）浏览器对缓存数据的容量限制可能不太一样（某些浏览器设置的限制是每个站点 5MB）。")]),e._v(" "),s("p",[e._v("（2）如果 manifest 文件，或者内部列举的某一个文件不能正常下载，整个更新过程都将失败，浏览器继续全部使用老的缓存。")]),e._v(" "),s("p",[e._v("（3）引用 manifest 的 html 必须与 manifest 文件同源，在同一个域下。")]),e._v(" "),s("p",[e._v("（4）FALLBACK 中的资源必须和 manifest 文件同源。")]),e._v(" "),s("p",[e._v("（5）当一个资源被缓存后，该浏览器直接请求这个绝对路径也会访问缓存中的资源。")]),e._v(" "),s("p",[e._v("（6）站点中的其他页面即使没有设置 manifest 属性，请求的资源如果在缓存中也从缓存中访问。")]),e._v(" "),s("p",[e._v("（7）当 manifest 文件发生改变时，资源请求本身也会触发更新。")]),e._v(" "),s("h3",{attrs:{id:"_11-浏览器是如何对-html5-的离线储存资源进行管理和加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11-浏览器是如何对-html5-的离线储存资源进行管理和加载"}},[e._v("#")]),e._v(" 11. 浏览器是如何对 HTML5 的离线储存资源进行管理和加载？")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("在线的情况下")]),e._v("，浏览器发现 html 头部有 manifest 属性，它会请求 manifest 文件，如果是第一次访问页面 ，那么浏览器就会根据 manifest 文件的内容下载相应的资源并且进行离线存储。如果已经访问过页面并且资源已经进行离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的 manifest 文件与旧的 manifest 文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，就会重新下载文件中的资源并进行离线存储。")]),e._v(" "),s("li",[s("strong",[e._v("离线的情况下")]),e._v("，浏览器会直接使用离线存储的资源。")])]),e._v(" "),s("h3",{attrs:{id:"_12-title与h1的区别、b与strong的区别、i与em的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-title与h1的区别、b与strong的区别、i与em的区别"}},[e._v("#")]),e._v(" 12. title与h1的区别、b与strong的区别、i与em的区别？")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("strong标签有语义，是起到加重语气的效果，而b标签是没有的，b标签只是一个简单加粗标签。b标签之间的字符都设为粗体，strong标签加强字符的语气都是通过粗体来实现的，而搜索引擎更侧重strong标签。")])]),e._v(" "),s("li",[s("p",[e._v("title属性没有明确意义只表示是个标题，H1则表示层次明确的标题，对页面信息的抓取有很大的影响")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("i内容展示为斜体，em表示强调的文本")])])])]),e._v(" "),s("h3",{attrs:{id:"_13-iframe-有那些优点和缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_13-iframe-有那些优点和缺点"}},[e._v("#")]),e._v(" 13. "),s("strong",[e._v("iframe 有那些优点和缺点？")])]),e._v(" "),s("p",[e._v("iframe 元素会创建包含另外一个文档的内联框架（即行内框架）。")]),e._v(" "),s("p",[s("strong",[e._v("优点：")])]),e._v(" "),s("ul",[s("li",[s("p",[e._v("用来加载速度较慢的内容（如广告）")])]),e._v(" "),s("li",[s("p",[e._v("可以使脚本可以并行下载")])]),e._v(" "),s("li",[s("p",[e._v("可以实现跨子域通信")])])]),e._v(" "),s("p",[s("strong",[e._v("缺点：")])]),e._v(" "),s("ul",[s("li",[s("p",[e._v("iframe 会阻塞主页面的 onload 事件")])]),e._v(" "),s("li",[s("p",[e._v("无法被一些搜索引擎索识别")])]),e._v(" "),s("li",[s("p",[e._v("会产生很多页面，不容易管理")])])]),e._v(" "),s("h3",{attrs:{id:"_14-label-的作用是什么-如何使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_14-label-的作用是什么-如何使用"}},[e._v("#")]),e._v(" 14. label 的作用是什么？如何使用？")]),e._v(" "),s("p",[e._v("label标签来定义表单控件的关系：当用户选择label标签时，浏览器会自动将焦点转到和label标签相关的表单控件上。")]),e._v(" "),s("ul",[s("li",[e._v("使用方法1：")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<label for="mobile">Number:</label>\n<input type="text" id="mobile"/>\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("ul",[s("li",[e._v("使用方法2：")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<label>Date:<input type="text"/></label>\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h3",{attrs:{id:"_15-canvas和svg的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_15-canvas和svg的区别"}},[e._v("#")]),e._v(" 15. Canvas和SVG的区别")]),e._v(" "),s("p",[s("strong",[e._v("（1）SVG：")])]),e._v(" "),s("p",[e._v("SVG可缩放矢量图形（Scalable Vector Graphics）是基于可扩展标记语言XML描述的2D图形的语言，SVG基于XML就意味着SVG DOM中的每个元素都是可用的，可以为某个元素附加Javascript事件处理器。"),s("strong",[e._v("在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。")])]),e._v(" "),s("p",[e._v("其特点如下：")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("不依赖分辨率")])]),e._v(" "),s("li",[s("p",[e._v("支持事件处理器")])]),e._v(" "),s("li",[s("p",[e._v("最适合带有大型渲染区域的应用程序（比如谷歌地图）")])]),e._v(" "),s("li",[s("p",[e._v("复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）")])]),e._v(" "),s("li",[s("p",[e._v("不适合游戏应用")])])]),e._v(" "),s("p",[s("strong",[e._v("（2）Canvas：")])]),e._v(" "),s("p",[s("strong",[e._v("Canvas是画布，通过Javascript来绘制2D图形，是逐像素进行渲染的。其位置发生改变，就会重新进行绘制。")])]),e._v(" "),s("p",[e._v("其特点如下：")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("依赖分辨率")])]),e._v(" "),s("li",[s("p",[e._v("不支持事件处理器")])]),e._v(" "),s("li",[s("p",[e._v("弱的文本渲染能力")])]),e._v(" "),s("li",[s("p",[e._v("能够以 .png 或 .jpg 格式保存结果图像")])]),e._v(" "),s("li",[s("p",[e._v("最适合图像密集型的游戏，其中的许多对象会被频繁重绘")])])]),e._v(" "),s("p",[e._v("注：矢量图，也称为面向对象的图像或绘图图像，在数学上定义为一系列由线连接的点。矢量文件中的图形元素称为对象。每个对象都是一个自成一体的实体，它具有颜色、形状、轮廓、大小和屏幕位置等属性。")]),e._v(" "),s("h3",{attrs:{id:"_16-head-标签有什么作用-其中什么标签必不可少"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_16-head-标签有什么作用-其中什么标签必不可少"}},[e._v("#")]),e._v(" 16. head 标签有什么作用，其中什么标签必不可少？")]),e._v(" "),s("head",[e._v(" 标签用于定义文档的头部，它是所有头部元素的容器。"),s("head",[e._v(" 中的元素可以引用脚本、指示浏览器在哪里找到样式表、提供元信息等。\n"),s("p",[e._v("文档的头部描述了文档的各种属性和信息，包括文档的标题、在 Web 中的位置以及和其他文档的关系等。绝大多数文档头部包含的数据都不会真正作为内容显示给读者。")]),e._v(" "),s("p",[e._v("下面这些标签可用在 head 部分：")]),s("base"),e._v(", "),s("link"),e._v(", "),s("meta"),e._v(", "),s("script")])])])}),[],!1,null,null,null);a.default=t.exports}}]);