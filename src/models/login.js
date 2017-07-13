import { login } from '../services/login'
import { routerRedux } from 'dva/router'
import { queryURL } from '../utils'

export default {
  namespace: 'login',
  state: {
    loginLoading: false,
  },

  effects: {     //异步更新
    *login ({
      payload,
    }, { put, call }) {
      yield put({ type: 'showLoginLoading' })
      const data = yield call(login, payload)
      yield put({ type: 'hideLoginLoading' })
      if (data.success) {
        const from = queryURL('from')
        yield put({ type: 'app/query' })
        if (from) {
          yield put(routerRedux.push(from))
        } else {
          yield put(routerRedux.push('/dashboard'))
        }
      } else {
        throw data
      }
    },
  },
  reducers: {  //reducers等同于 redux 里的 reducer，接收 action，同步更新 state ;
    showLoginLoading (state) {
      return {
        ...state,
        loginLoading: true,
      }
    },
    hideLoginLoading (state) {
      return {
        ...state,
        loginLoading: false,
      }
    },
  },
}
