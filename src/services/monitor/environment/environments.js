import { request, config } from '../../../utils'
const { api } = config
const { monitorEnvironment } = api

export async function query (params) {
  return request({
    url: monitorEnvironment,
    method: 'get',
    data: params,
  })
}
