//roadhog 是一个 cli 工具，提供 server、 build 和 test 三个命令，分别用于本地调试和构建
const path = require('path')

const svgSpriteDirs = [
  path.resolve(__dirname, 'src/svg/'),
  require.resolve('antd').replace(/index\.js$/, ''),
]

export default {
  entry: 'src/index.js',
  svgSpriteLoaderDirs: svgSpriteDirs,
  "theme": "./theme.config.js",
  // "proxy": {         //配置代理,请求到其他服务器,访问 /api/users 就能访问到 http://jsonplaceholder.typicode.com/users 的数据
  //   "/api/v1": {
  //     // "target": "http://jsonplaceholder.typicode.com/",
  //     "target": {
  //       "host": "action-js.dev",
  //       "protocol": 'http:',
  //       "port": 3000
  //     },
  //     "ignorePath": true,
  //     "secure": false,
  //     "changeOrigin": true,
  //     "pathRewrite": { "^/api/v1" : "" }
  //   }
  // },
  "env": {
      "development": {
        "extraBabelPlugins": [
          "dva-hmr", //dva + babel-plugin-dva-hmr ,实现 routes 和 components 以及相关 CSS 修改的热更新
          "transform-runtime",
  		    ["import", { "libraryName": "antd", "style": true }]
        ]
      },
      "production": {
        "extraBabelPlugins": [
          "transform-runtime",
  		    ["import", { "libraryName": "antd", "style": true}]
        ]
      }
  }
}
