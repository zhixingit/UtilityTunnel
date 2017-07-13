import { request, config } from '../../utils'
const { api } = config
const { manageOverview } = api

export async function query (params) {
  return request({
    url: manageOverview,
    method: 'get',
    data: params,
  })
}
