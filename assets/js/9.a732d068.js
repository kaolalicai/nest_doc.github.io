(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{330:function(t,s,a){"use strict";a.r(s);var n=a(33),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"lint-eslint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lint-eslint"}},[t._v("#")]),t._v(" Lint : Eslint")]),t._v(" "),a("p",[t._v("TypeScript core team 在 2019 的时候宣称考虑到 eslint 比 tslint 有着更好的性能，将全面转用 eslint，不再更新 tslint。")]),t._v(" "),a("p",[t._v("所以我们也跟着转吧，所有配置都在脚手架中配好，默认在执行 "),a("code",[t._v("npm run test:e2e")]),t._v(" 之前会执行一次 "),a("code",[t._v("npm run lint")])]),t._v(" "),a("h2",{attrs:{id:"format-prettier"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#format-prettier"}},[t._v("#")]),t._v(" Format : Prettier")]),t._v(" "),a("p",[t._v("而代码风格这里，将参考 Nest 的示例项目，使用 Prettier 统一 format.")]),t._v(" "),a("p",[t._v("如果你还不了解 Prettier，可以看看"),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/81764012",target:"_blank",rel:"noopener noreferrer"}},[t._v("这篇文章"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"自动-format-代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动-format-代码"}},[t._v("#")]),t._v(" 自动 Format 代码")]),t._v(" "),a("h3",{attrs:{id:"vs-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vs-code"}},[t._v("#")]),t._v(" VS Code")]),t._v(" "),a("p",[t._v("上面提到的文章有提到如何安装插件，具体看文章")]),t._v(" "),a("h3",{attrs:{id:"webstorm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webstorm"}},[t._v("#")]),t._v(" Webstorm")]),t._v(" "),a("p",[t._v("在设置中找到 Prettier 的配置项，勾选 "),a("code",[t._v("Run on save for files")]),t._v(" 即可")]),t._v(" "),a("h3",{attrs:{id:"git-hooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-hooks"}},[t._v("#")]),t._v(" Git hooks")]),t._v(" "),a("p",[t._v("安装 husky 这个工具")]),t._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run i husky -D\n")])])]),a("p",[t._v("接着在package.json定义husky的配置：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"husky"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hooks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pre-commit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npm run format"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("我们在git的hook的阶段来执行相应的命令，比如上述的例子是在pre-commit这个hook也就是在提交之前进行lint的检测。")]),t._v(" "),a("h2",{attrs:{id:"check-commit-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-commit-message"}},[t._v("#")]),t._v(" Check commit message")]),t._v(" "),a("p",[t._v("我们将使用  "),a("a",{attrs:{href:"https://github.com/conventional-changelog/commitlint",target:"_blank",rel:"noopener noreferrer"}},[t._v("commitlint"),a("OutboundLink")],1),t._v(" 来帮助我们检查 commit message。")]),t._v(" "),a("p",[t._v("安装对应的包：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" @commitlint/cli @commitlint/config-conventional -D\n")])])]),a("p",[t._v("添加配置文件")]),t._v(" "),a("blockquote",[a("p",[t._v("commitlint.config.js")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@commitlint/config-conventional'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'type-enum'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'always'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"feat"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fix"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"docs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"style"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"refactor"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"perf"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"build"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ci"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"chore"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"revert"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'subject-full-stop'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'never'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'subject-case'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'never'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("接着在package.json 新增 husky的配置：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"husky"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hooks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commit-msg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commitlint -e $HUSKY_GIT_PARAMS"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这样就完成配置，当我们 commit 的时候，commitlint 就会帮我们完成格式校验。")]),t._v(" "),a("p",[t._v("一个正常的 commit message 看起来是这样的：")]),t._v(" "),a("blockquote",[a("p",[t._v("type(scope?): subject  #scope is optional")])]),t._v(" "),a("p",[t._v("或者这样：")]),t._v(" "),a("blockquote",[a("p",[t._v("fix(server): send cors headers")])]),t._v(" "),a("blockquote",[a("p",[t._v("feat(blog): add comment section")])]),t._v(" "),a("blockquote",[a("p",[t._v("docs: add comment section")])]),t._v(" "),a("p",[t._v("不符合规则的 commit 将会被 block")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/kaolalicai/klg-nest-starter/tree/master/sample/hello-world",target:"_blank",rel:"noopener noreferrer"}},[t._v("完整项目示例"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);