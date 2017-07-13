import { request, config } from '../../utils'
const { api } = config
const { manageWorkForm } = api

export async function query (params) {
  return request({
    url: manageWorkForm,
    method: 'get',
    data: params,
  })
}
