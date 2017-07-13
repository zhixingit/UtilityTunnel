import { request, config } from '../../../utils'
const { api } = config
const { monitorIllumination } = api

export async function query (params) {
  return request({
    url: monitorIllumination,
    method: 'get',
    data: params,
  })
}
