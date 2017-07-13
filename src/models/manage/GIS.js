// import { query } from '../../services/equipment/overview'
import { parse } from 'qs'

export default {

  namespace: 'gis', //表示在全局 state 上的 key

  state: {   //是初始值
    center:{longitude: 120.096509, latitude: 31.889087},
    position:[{longitude: 120.068872, latitude: 31.897905},{longitude: 120.123117, latitude: 31.882018}],
    visible:true
  },
  reducers: {
    update (state,{ payload: data }) {
      // console.log(data)
      if (data.longitude > 120.122688){
        data.longitude = 120.068872;
      }
      return { ...state, position:[{longitude: data.longitude+ 0.001, latitude: 31.897905},{longitude: 120.123117, latitude: 31.882018}] }
    },
  },

}
