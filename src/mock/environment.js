const qs = require('qs')
const Mock = require('mockjs')
const config = require('../utils/config')
const { apiPrefix } = config;  //apiPrefix: '/api'

let alarmListData = Mock.mock({
  'data|5-10': [
    {
      id: '@id',
      sensorID: '@id',
      'sensorName|1': [
        '温度传感器',
        '湿度传感器',
        '水位传感器',
        'O2传感器',
        'H2S传感器',
        'CH4传感器'
      ],
      'sensorArea|1': [
        'A区',
        'B区',
        'C区',
        'D区',
        'E区',
        'F区'
      ],
      'sensorCabin|1': [
        '1号舱',
        '2号舱',
        '3号舱',
        '4号舱',
        '5号舱',
        '6号舱',
        '7号舱'
      ],
      'alarmDetail|1': [
        '超过预警值',
        '传感器故障',
      ],
      alarmTime: '@datetime',
      avatar () {
        return Mock.Random.image('100x100', Mock.Random.color(), '#757575', 'png', )
      },
    },
  ],
})


let database = alarmListData.data


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
  [`GET ${apiPrefix}/monitor/environment`] (req, res) {
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
            } else if (key === 'alarmTime') {
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

  [`POST ${apiPrefix}/monitor/environment`] (req, res) {
    const newData = req.body
    newData.avatar = newData.avatar || Mock.Random.image('100x100', Mock.Random.color(), '#757575', 'png')
    newData.id = Mock.mock('@id')
    newData.worksheet_state = Mock.mock('@boolean')
    newData.worksheet_order = Mock.mock('@id')
    newData.establish_time = Mock.mock('@datetime')
    database.unshift(newData)  //unshift() 方法可向数组的开头添加一个或更多元素,并返回新的长度

    res.status(200).end()
  },

  [`GET ${apiPrefix}/monitor/environment/:id`] (req, res) {
    const { id } = req.params
    const data = queryArray(database, id, 'id')
    if (data) {
      res.status(200).json(data)
    } else {
      res.status(404).json(NOTFOUND)
    }
  },

  [`DELETE ${apiPrefix}/monitor/environment/:id`] (req, res) {
    const { id } = req.params
    const data = queryArray(database, id, 'id')
    if (data) {
      database = database.filter((item) => item.id !== id)
      res.status(204).end()
    } else {
      res.status(404).json(NOTFOUND)
    }
  },

  [`PATCH ${apiPrefix}/monitor/environment/:id`] (req, res) {
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
