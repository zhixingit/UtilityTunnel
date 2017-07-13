import { request, config } from '../../../utils'
const { api } = config
const { monitorElectricity } = api

export async function query (params) {
  return request({
    url: monitorElectricity,
    method: 'get',
    data: params,
  })
}
