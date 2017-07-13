import { request, config } from '../../../utils'
const { api } = config
const { ventilationEquipment } = api

export async function query (params) {
  return request({
    url: ventilationEquipment,
    method: 'get',
    data: params,
  })
}
