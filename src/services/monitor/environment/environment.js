import { request, config } from '../../../utils'
const { api } = config
const { environmentAlarmDetail } = api

export async function query (params) {
  return request({
    url: environmentAlarmDetail,
    method: 'get',
    data: params,
  })
}

export async function create (params) {
  return request({
    url: environmentAlarmDetail.replace('/:id', ''),
    method: 'post',
    data: params,
  })
}

export async function remove (params) {
  return request({
    url: environmentAlarmDetail,
    method: 'delete',
    data: params,
  })
}

export async function update (params) {
  return request({
    url: environmentAlarmDetail,
    method: 'patch',
    data: params,
  })
}
