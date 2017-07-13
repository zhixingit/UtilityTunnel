import { request, config } from '../../../utils'
const { api } = config
const { fireEquipment } = api

export async function query (params) {
  return request({
    url: fireEquipment,
    method: 'get',
    data: params,
  })
}

export async function create (params) {
  return request({
    url: fireEquipment.replace('/:id', ''),
    method: 'post',
    data: params,
  })
}

export async function remove (params) {
  return request({
    url: fireEquipment,
    method: 'delete',
    data: params,
  })
}

export async function update (params) {
  return request({
    url: fireEquipment,
    method: 'patch',
    data: params,
  })
}
