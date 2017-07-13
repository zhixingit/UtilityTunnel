import { request, config } from '../../../utils'
const { api } = config
const { drainEquipment } = api

export async function query (params) {
  return request({
    url: drainEquipment,
    method: 'get',
    data: params,
  })
}
