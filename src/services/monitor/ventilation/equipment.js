import { request, config } from '../../../utils'
const { api } = config
const { ventilationEquipment } = api

export async function query (params) {
  return request({
    url: ventilationEquipment,
    method: 'get',
    data: params,
  })
}

export async function create (params) {
  return request({
    url: ventilationEquipment.replace('/:id', ''),
    method: 'post',
    data: params,
  })
}

export async function remove (params) {
  return request({
    url: ventilationEquipment,
    method: 'delete',
    data: params,
  })
}

export async function update (params) {
  return request({
    url: ventilationEquipment,
    method: 'patch',
    data: params,
  })
}
