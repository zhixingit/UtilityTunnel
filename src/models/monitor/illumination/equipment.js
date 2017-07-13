import { create, remove, update } from '../../../services/monitor/illumination/equipment'
import { query } from '../../../services/monitor/illumination/illuminationEquipment'
import { parse } from 'qs'

export default {

  namespace: 'illuminationEquipment', //表示在全局 state 上的 key

  state: {   //是初始值
    numbers: [],
    modalVisible: false,
    modalType: 'create',
  },

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/monitor/subsystem/illumination/equipmentManage') {
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
      // payload = parse(location.search.substr(1))
      const data = yield call(query, payload)
      if (data) {
        yield put({
          type: 'querySuccess',
          payload: { ...data }
        })
      }
    },

    *'delete' ({ payload }, { call, put }) {
      const data = yield call(remove, { id: payload })
      if (data.success) {
        yield put({ type: 'query' })
      } else {
        throw data
      }
    },

    *create ({ payload }, { call, put }) {
      const data = yield call(create, payload)
      if (data.success) {
        yield put({ type: 'hideModal' })
        yield put({ type: 'query' })
      } else {
        throw data
      }
    },

  },

  reducers: {

    querySuccess (state, action) {
      return {
        ...state,
        ...action.payload,
      }
    },

    showModal (state, action) {
      return { ...state, ...action.payload, modalVisible: true }
    },

    hideModal (state) {
      return { ...state, modalVisible: false }
    },

  },

}
