import { request, config } from '../../../utils'
const { api } = config
const { monitorFire } = api

export async function query (params) {
  return request({
    url: monitorFire,
    method: 'get',
    data: params,
  })
}
