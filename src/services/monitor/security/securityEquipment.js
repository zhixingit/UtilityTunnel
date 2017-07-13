import { request, config } from '../../../utils'
const { api } = config
const { securityEquipment } = api

export async function query (params) {
  return request({
    url: securityEquipment,
    method: 'get',
    data: params,
  })
}
