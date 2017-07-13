import { request, config } from '../../../utils'
const { api } = config
const { fireEquipment } = api

export async function query (params) {
  return request({
    url: fireEquipment,
    method: 'get',
    data: params,
  })
}
