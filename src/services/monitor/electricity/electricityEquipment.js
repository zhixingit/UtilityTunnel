import { request, config } from '../../../utils'
const { api } = config
const { electricityEquipment } = api

export async function query (params) {
  return request({
    url: electricityEquipment,
    method: 'get',
    data: params,
  })
}
