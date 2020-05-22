(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{345:function(t,s,a){"use strict";a.r(s);var r=a(33),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("我们会把常用的工具集放入 npm 包中，方便集中维护, 所有工具集都会放入 @kalengo 这个域中")]),t._v(" "),a("p",[t._v("@kalengo/utils 收集了 Kalengo 后端开发常用的工具类，目前有")]),t._v(" "),a("h2",{attrs:{id:"dateutil"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dateutil"}},[t._v("#")]),t._v(" DateUtil")]),t._v(" "),a("p",[t._v("日期计算，节假日")]),t._v(" "),a("p",[t._v("TODO: 兼容多时区")]),t._v(" "),a("h2",{attrs:{id:"numberutil"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#numberutil"}},[t._v("#")]),t._v(" NumberUtil")]),t._v(" "),a("p",[t._v("主要处理 0.1 + 0.2 = 0.30000000000000004 问题")]),t._v(" "),a("h2",{attrs:{id:"logger"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logger"}},[t._v("#")]),t._v(" Logger")]),t._v(" "),a("p",[t._v("logger 工具，小巧玲珑，基于开源日志工具 "),a("a",{attrs:{href:"https://github.com/baryon/tracer",target:"_blank",rel:"noopener noreferrer"}},[t._v("tracer"),a("OutboundLink")],1),t._v(", 这个库的优势是可以打印 log 发生的文件位置。")]),t._v(" "),a("p",[t._v("接下来介绍一些常用配置，配置写在 config/xxx.js 中")]),t._v(" "),a("p",[t._v("配置日志级别，具体有那些级别请看 tracer 文档")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[t._v("log"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    level"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'info'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("把日志写入文件中")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[t._v("log"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    level"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'info'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    root"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./logs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    allLogsFileName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mongoose'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("root 就是文件保存的路径。 allLogsFileName 是文件名。 日志默认会按日分割。")]),t._v(" "),a("p",[t._v("如果你需要自定义的 logger，直接用新的 config 构造一个 logger 就行。")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" LoggerFactory "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@akajs/utils'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" logger "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("LoggerFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("config 写入你自定义的配置")]),t._v(" "),a("h2",{attrs:{id:"stringutil-todo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stringutil-todo"}},[t._v("#")]),t._v(" StringUtil(TODO)")])])}),[],!1,null,null,null);s.default=e.exports}}]);