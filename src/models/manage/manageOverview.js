import { query } from '../../services/manage/overview'
import { parse } from 'qs'

export default {

  namespace: 'manageOverview', //表示在全局 state 上的 key

  state: {   //是初始值
    list: [],
    currentItem: {},
    pagination: {
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: total => `共 ${total} 条`,
      current: 1,
      total: null,
    },
  },

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/manage/overview') {
          dispatch({
            type: 'query',
            payload: location.query,
          })
        }
      })
    },
  },

  effects: {

    *query ({ payload }, { call, put }) {
      payload = parse(location.search.substr(1))
      const data = yield call(query, payload)
      if (data) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.data,
            pagination: {
              current: Number(payload.page) || 1,
              pageSize: Number(payload.pageSize) || 5,
              total: data.total,
            },
          },
        })
      }
    },
  },

  reducers: {

    querySuccess (state, action) {
      const { list, pagination } = action.payload
      return { ...state,
        list,
        pagination: {
          ...state.pagination,
          ...pagination,
        } }
    },

  },

}
