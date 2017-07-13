import { request, config } from '../../../utils'
const { api } = config
const { monitorVentilation } = api

export async function query (params) {
  return request({
    url: monitorVentilation,
    method: 'get',
    data: params,
  })
}
