import { request, config } from '../utils'
const { api } = config
const { assets } = api

export async function query (params) {
  return request({
    url: assets,
    method: 'get',
    data: params,
  })
}
