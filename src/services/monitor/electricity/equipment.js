import { request, config } from '../../../utils'
const { api } = config
const { electricityEquipment } = api

export async function query (params) {
  return request({
    url: electricityEquipment,
    method: 'get',
    data: params,
  })
}

export async function create (params) {
  return request({
    url: electricityEquipment.replace('/:id', ''),
    method: 'post',
    data: params,
  })
}

export async function remove (params) {
  return request({
    url: electricityEquipment,
    method: 'delete',
    data: params,
  })
}

export async function update (params) {
  return request({
    url: electricityEquipment,
    method: 'patch',
    data: params,
  })
}
