import { request, config } from '../../../utils'
const { api } = config
const { monitorDrain } = api

export async function query (params) {
  return request({
    url: monitorDrain,
    method: 'get',
    data: params,
  })
}
