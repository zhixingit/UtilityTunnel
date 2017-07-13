import { request, config } from '../../../utils'
const { api } = config
const { monitorSecurity } = api

export async function query (params) {
  return request({
    url: monitorSecurity,
    method: 'get',
    data: params,
  })
}
