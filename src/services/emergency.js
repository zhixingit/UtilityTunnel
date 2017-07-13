import { request, config } from '../utils'
const { api } = config
const { emergency } = api

export async function query (params) {
  return request({
    url: emergency,
    method: 'get',
    data: params,
  })
}

export async function create (params) {
  return request({
    url: emergency.replace('/:id', ''),
    method: 'post',
    data: params,
  })
}

export async function remove (params) {
  return request({
    url: emergency,
    method: 'delete',
    data: params,
  })
}

export async function update (params) {
  return request({
    url: emergency,
    method: 'patch',
    data: params,
  })
}
