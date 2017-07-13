import { request, config } from '../../../utils'
const { api } = config
const { illuminationEquipment } = api

export async function query (params) {
  return request({
    url: illuminationEquipment,
    method: 'get',
    data: params,
  })
}
