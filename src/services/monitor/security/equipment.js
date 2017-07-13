import { request, config } from '../../../utils'
const { api } = config
const { securityEquipment } = api

export async function query (params) {
  return request({
    url: securityEquipment,
    method: 'get',
    data: params,
  })
}

export async function create (params) {
  return request({
    url: securityEquipment.replace('/:id', ''),
    method: 'post',
    data: params,
  })
}

export async function remove (params) {
  return request({
    url: securityEquipment,
    method: 'delete',
    data: params,
  })
}

export async function update (params) {
  return request({
    url: securityEquipment,
    method: 'patch',
    data: params,
  })
}
