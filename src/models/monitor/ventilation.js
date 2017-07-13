import {query } from '../../services/monitor/ventilation/ventilation'
import { parse } from 'qs'

export default {
  namespace: 'monitorVentilation',
  state: {
    numbers: [],
    numberplcs:[]
  },
  subscriptions: {   //subscriptions:从源获取数据的方法。语义订阅，用于订阅一个数据源，然后根据条件，dispatch需要的action
    setup ({ dispatch }) {
      dispatch({ type: 'query' })
    },
  },
  effects: {
    *query ({
      payload,     //payload:{} :需要传递的信息
    }, { call, put }) {
      const data = yield call(query, parse(payload))
      yield put({ type: 'queryInformation', payload: { ...data } })
    },
  },
  reducers: {
    queryInformation (state, action) {
      return {
        ...state,
        ...action.payload,
      }
    },
  },
}
