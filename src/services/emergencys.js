import { request, config } from '../utils'
const { api } = config
const { emergencys } = api

export async function query (params) {
  return request({
    url: emergencys,
    method: 'get',
    data: params,
  })
}
