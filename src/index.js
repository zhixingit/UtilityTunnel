import './index.html'
import 'babel-polyfill'
import dva from 'dva'
import createLoading from 'dva-loading'
import { browserHistory } from 'dva/router'
import { message } from 'antd'

// 1. Initialize
const app = dva({
  ...createLoading({   //... 对象的扩展运算符,我更喜欢叫展开运算符
    effects: true,
  }),
  history: browserHistory,
  onError (error) {
    message.error(error.message)
  },
})

// 2. Model
app.model(require('./models/app'))

// 3. Router
app.router(require('./router'))

// 4. Start
app.start('#root')
