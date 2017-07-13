import { request, config } from '../../utils'
const { api } = config
const { manageForm } = api

export async function query (params) {
  return request({
    url: manageForm,
    method: 'get',
    data: params,
  })
}

export async function create (params) {
  return request({
    url: manageForm.replace('/:id', ''),
    method: 'post',
    data: params,
  })
}

export async function remove (params) {
  return request({
    url: manageForm,
    method: 'delete',
    data: params,
  })
}

export async function update (params) {
  return request({
    url: manageForm,
    method: 'patch',
    data: params,
  })
}
