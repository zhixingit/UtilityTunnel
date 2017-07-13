const qs = require('qs')
const Mock = require('mockjs')
const config = require('../utils/config')
const { apiPrefix } = config;  //apiPrefix: '/api'

let assetsListData = Mock.mock({
  'data|10-15': [
    {
      id: '@id',
      equip_id: '@id',
      'equip_type|+1': [
        '消防',
        '通风',
        '供电',
        '照明',
        '安防',
        '环境监测'
      ],
      'equip_name|+1': [
        'CO2灭火器',
        '排风扇',
        '变压器',
        '安全出口标志灯',
        '摄像头',
        '水位传感器'
      ],
      'equip_mode|+1': [
        'MT3',
        'BPT12-14-2',
        'SCB10-10KV',
        '001',
        'ov7640',
        'WH311'
      ],
      'parameter1|+1': [
        'CO2：10L',
        '转速：9710',
        '额定容量：1000',
        '无',
        '分辨率：1600*900',
        '弱腐蚀性液体量程: 100mmH2O~100mH2O'
      ],
      'unit1|+1': [
        'L',
        'r/min',
        'KVA',
        '无',
        '无',
        'mm'
      ],
      'install_pos|+1': [
        'A区1号舱',
        'A区2号舱',
        'A区3号舱',
        'A区4号舱',
        'A区5号舱',
        'B区3号舱',
        'C区2号舱',
        'D区1号舱',
        'E区5号舱',
        'F区3号舱',
      ],
      install_datetime: '@datetime',
      avatar () {
        return Mock.Random.image('100x100', Mock.Random.color(), '#757575', 'png')
      },
    },
  ],
})


let database = assetsListData.data

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

  [`GET ${apiPrefix}/equipment/assets`] (req, res) {
    const { query } = req
    let { pageSize, page, ...other } = query
    pageSize = pageSize || 10
    page = page || 1

    let newData = database
    for (let key in other) {
      if ({}.hasOwnProperty.call(other, key)) {
        newData = newData.filter((item) => {
          if ({}.hasOwnProperty.call(item, key)) {
            if (key === 'install_datetime') {
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

  [`POST ${apiPrefix}/equipment/asset`] (req, res) {
    const newData = req.body
    newData.install_datetime = Mock.mock('@now')
    newData.avatar = newData.avatar || Mock.Random.image('100x100', Mock.Random.color(), '#757575', 'png')
    newData.id = Mock.mock('@id')

    database.unshift(newData)  //unshift() 方法可向数组的开头添加一个或更多元素,并返回新的长度

    res.status(200).end()
  },

  [`GET ${apiPrefix}/equipment/asset/:id`] (req, res) {
    const { id } = req.params
    const data = queryArray(database, id, 'id')
    if (data) {
      res.status(200).json(data)
    } else {
      res.status(404).json(NOTFOUND)
    }
  },

  [`DELETE ${apiPrefix}/equipment/asset/:id`] (req, res) {
    const { id } = req.params
    const data = queryArray(database, id, 'id')
    if (data) {
      database = database.filter((item) => item.id !== id)
      res.status(204).end()
    } else {
      res.status(404).json(NOTFOUND)
    }
  },

  [`PATCH ${apiPrefix}/equipment/asset/:id`] (req, res) {
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
