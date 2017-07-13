import pathToRegexp from 'path-to-regexp'
import { query } from '../../../services/monitor/environment/environments'

export default {

  namespace: 'environmentAlarmDetail',

  state: {
    data: {},
  },

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(() => {
        const match = pathToRegexp('/monitor/environment/:id').exec(location.pathname)
        if (match) {
          dispatch({ type: 'query', payload: { id: match[1] } })
        }
      })
    },
  },

  effects: {
    *query ({
      payload,
    }, { call, put }) {
      const data = yield call(query, payload)
      const { success, message, status, ...other } = data
      if (success) {
        yield put({
          type: 'querySuccess',
          payload: {
            data: other.data[0],
          },
        })
      } else {
        throw data
      }
    },
  },

  reducers: {
    querySuccess (state, { payload }) {
      const { data } = payload
      return {
        ...state,
        data,
      }
    },
  },
}
