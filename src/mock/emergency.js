const qs = require('qs')
const Mock = require('mockjs')
const config = require('../utils/config')
const { apiPrefix } = config;  //apiPrefix: '/api'

let emergencyListData = Mock.mock({
  'data|5-10': [
    {
      id: '@id',
      'planID|+1':1,
      'planName|+1': [
        '火灾事件应急预案',
        '管线泄漏应急预案',
        '人员触电应急预案',
        '管廊爆管应急预案',
        '管廊开挖应急预案',
        '暴雨事件应急预案',
        '地震应急预案',
        '偷盗事件应急预案'
      ],
      'planType|+1': [
        '安全事故类',
        '安全事故类',
        '安全事故类',
        '安全事故类',
        '安全事故类',
        '自然灾害类',
        '自然灾害类',
        '社会治安类'
      ],
      'planLevel|1': [
        '1',
        '2',
        '3'
      ],
      'keywords|+1': [
        '火灾',
        '泄漏',
        '触电',
        '爆管',
        '管廊开挖',
        '大雨',
        '地震',
        '偷盗',
      ],
      'author|1': [
        '夏天',
        '吴民国',
        '张浩',
        '施铁民',
        '陈琪'
      ],
      createTime: '@datetime',
      avatar () {
        return Mock.Random.image('100x100', Mock.Random.color(), '#757575', 'png')
      },
    },
  ],
})


let database = emergencyListData.data

const queryArray = (array, key, keyAlias = 'key') => {
  if (!(array instanceof Array)) {
    return null
  }
  let data

  for (let item of array) {
    if (item[keyAlias] === key) {
      data = item
      break
    }
  }

  if (data) {
    return data
  }
  return null
}

const NOTFOUND = {
  message: 'Not Found',
  documentation_url: 'http://localhost:8000/request',
}

module.exports = {
  [`GET ${apiPrefix}/emergency`] (req, res) {
    const { query } = req
    let { pageSize, page, ...other } = query
    pageSize = pageSize || 10
    page = page || 1

    let newData = database
    for (let key in other) {
      if ({}.hasOwnProperty.call(other, key)) {
        newData = newData.filter((item) => {
          if ({}.hasOwnProperty.call(item, key)) {
            if (key === 'address') {
              return other[key].every(iitem => item[key].indexOf(iitem) > -1)
            } else if (key === 'createTime') {
              const start = new Date(other[key][0]).getTime()
              const end = new Date(other[key][1]).getTime()
              const now = new Date(item[key]).getTime()

              if (start && end) {
                return now >= start && now <= end
              }
              return true
            }
            return String(item[key]).trim().indexOf(decodeURI(other[key]).trim()) > -1
          }
          return true
        })
      }
    }

    res.status(200).json({
      data: newData.slice((page - 1) * pageSize, page * pageSize),
      total: newData.length,
    })
  },

  [`POST ${apiPrefix}/emergency`] (req, res) {
    const newData = req.body
    newData.createTime = Mock.mock('@now')
    newData.avatar = newData.avatar || Mock.Random.image('100x100', Mock.Random.color(), '#757575', 'png')
    newData.id = Mock.mock('@id')

    database.unshift(newData)  //unshift() 方法可向数组的开头添加一个或更多元素,并返回新的长度

    res.status(200).end()
  },

  [`GET ${apiPrefix}/emergency/:id`] (req, res) {
    const { id } = req.params
    const data = queryArray(database, id, 'id')
    if (data) {
      res.status(200).json(data)
    } else {
      res.status(404).json(NOTFOUND)
    }
  },

  [`DELETE ${apiPrefix}/emergency/:id`] (req, res) {
    const { id } = req.params
    const data = queryArray(database, id, 'id')
    if (data) {
      database = database.filter((item) => item.id !== id)
      res.status(204).end()
    } else {
      res.status(404).json(NOTFOUND)
    }
  },

  [`PATCH ${apiPrefix}/emergency/:id`] (req, res) {
    const { id } = req.params
    const editItem = req.body
    let isExist = false

    database = database.map((item) => {
      if (item.id === id) {
        isExist = true
        return Object.assign({}, item, editItem)
      }
      return item
    })

    if (isExist) {
      res.status(201).end()
    } else {
      res.status(404).json(NOTFOUND)
    }
  },
}
