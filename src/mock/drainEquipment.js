import { color } from '../utils/theme'
const qs = require('qs')
const Mock = require('mockjs')
const config = require('../utils/config')
const { apiPrefix } = config;  //apiPrefix: '/api'

let drainEquipment = Mock.mock({
  'numbers|20-25': [
    {
      // name:'@cword(2)',
      'name|1': [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F'
      ],
      'area|+1': 1,
      type:'综合舱',
      fireLevel: '甲',
      'mainFireResistance|3-5': 3,
      'cabinFireResistance|4-6': 4,
      isFireFightingEquipment: '@boolean',
      isFireDoorWork: '@boolean',
      isVentilator1Work: '@boolean',
      isVentilator2Work: '@boolean',
    },
  ],
})


let database = drainEquipment.numbers


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
  [`GET ${apiPrefix}/monitor/subsystem/drain/equipmentManage`] (req, res) {
    const { query } = req
    let { ...other } = query
    let newData = database
    if (other == null){
      res.status(200).json(drainEquipment)
    }else{
      for (let key in other) {
        if ({}.hasOwnProperty.call(other, key)) {
          newData = newData.filter((item) => {
            if ({}.hasOwnProperty.call(item, key)) {
              if (key === 'address') {
                return other[key].every(iitem => item[key].indexOf(iitem) > -1)
              }
              return String(item[key]).trim().indexOf(decodeURI(other[key]).trim()) > -1
            }
            return true
          })
        }
      }
      res.status(200).json({numbers:newData})
    }

    // res.status(200).json(drainEquipment)
  },

  [`POST ${apiPrefix}/monitor/subsystem/drain/equipmentManage`] (req, res) {
    const newData = req.body
    newData.avatar = newData.avatar || Mock.Random.image('100x100', Mock.Random.color(), '#757575', 'png')
    newData.id = Mock.mock('@id')
    newData.worksheet_state = Mock.mock('@boolean')
    newData.worksheet_order = Mock.mock('@id')
    newData.establish_time = Mock.mock('@datetime')
    database.unshift(newData)  //unshift() 方法可向数组的开头添加一个或更多元素,并返回新的长度

    res.status(200).end()
  },

  [`GET ${apiPrefix}/monitor/subsystem/drain/equipmentManage/:id`] (req, res) {
    const { id } = req.params
    const data = queryArray(database, id, 'id')
    if (data) {
      res.status(200).json(data)
    } else {
      res.status(404).json(NOTFOUND)
    }
  },

  [`DELETE ${apiPrefix}/monitor/subsystem/drain/equipmentManage/:id`] (req, res) {
    const { id } = req.params
    const data = queryArray(database, id, 'id')
    if (data) {
      database = database.filter((item) => item.id !== id)
      res.status(204).end()
    } else {
      res.status(404).json(NOTFOUND)
    }
  },

  [`PATCH ${apiPrefix}/monitor/subsystem/drain/equipmentManage/:id`] (req, res) {
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
