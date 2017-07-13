const qs = require('qs')
const Mock = require('mockjs')
const config = require('../utils/config')
const { apiPrefix } = config;  //apiPrefix: '/api'

let formListData = Mock.mock({
  'data|5-10': [
    {
      id: '@id',
      worksheet_order: '@id',
      'equip_name|1': [
        '排风扇',
        '变压器',
        '排水泵',
        '日常照明灯',
        '红外入侵探测器',
        '摄像头',
        '溢流阀',
      ],
      equip_id: '@id',
      'worksheet_type|1': [
        '保养单',
        '故障单',
        '巡检单',
      ],
      'repairer|1': [
        '吴宇杰',
        '许海燕',
        '江雪琴',
        '熊蕲涛',
        '陈婷'
      ],
      'worksheet_state|1': [
        '未处理',
        '进行中',
        '已完成',
      ],
      establish_time: '@datetime',
      repair_area:'@county(true)',
      discribe_content:'@cword(10)',
      remarks:'@cword(15)',
      avatar () {
        return Mock.Random.image('100x100', Mock.Random.color(), '#757575', 'png', )
      },
    },
  ],
})


let database = formListData.data


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
  [`GET ${apiPrefix}/manage/workForm`] (req, res) {
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
            } else if (key === 'establish_time') {
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

  [`POST ${apiPrefix}/manage/workForm`] (req, res) {
    const newData = req.body
    newData.avatar = newData.avatar || Mock.Random.image('100x100', Mock.Random.color(), '#757575', 'png')
    newData.id = Mock.mock('@id')
    newData.worksheet_state = Mock.mock('@boolean')
    newData.worksheet_order = Mock.mock('@id')
    newData.establish_time = Mock.mock('@datetime')
    database.unshift(newData)  //unshift() 方法可向数组的开头添加一个或更多元素,并返回新的长度

    res.status(200).end()
  },

  [`GET ${apiPrefix}/manage/workForm/:id`] (req, res) {
    const { id } = req.params
    const data = queryArray(database, id, 'id')
    if (data) {
      res.status(200).json(data)
    } else {
      res.status(404).json(NOTFOUND)
    }
  },

  [`DELETE ${apiPrefix}/manage/workForm/:id`] (req, res) {
    const { id } = req.params
    const data = queryArray(database, id, 'id')
    if (data) {
      database = database.filter((item) => item.id !== id)
      res.status(204).end()
    } else {
      res.status(404).json(NOTFOUND)
    }
  },

  [`PATCH ${apiPrefix}/manage/workForm/:id`] (req, res) {
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
