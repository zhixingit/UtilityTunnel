import { request, config } from '../../../utils'
const { api } = config
const { drainEquipment } = api

export async function query (params) {
  return request({
    url: drainEquipment,
    method: 'get',
    data: params,
  })
}

export async function create (params) {
  return request({
    url: drainEquipment.replace('/:id', ''),
    method: 'post',
    data: params,
  })
}

export async function remove (params) {
  return request({
    url: drainEquipment,
    method: 'delete',
    data: params,
  })
}

export async function update (params) {
  return request({
    url: drainEquipment,
    method: 'patch',
    data: params,
  })
}
