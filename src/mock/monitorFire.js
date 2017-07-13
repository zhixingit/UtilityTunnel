import { color } from '../utils/theme'
const Mock = require('mockjs')
const config = require('../utils/config')
const { apiPrefix } = config

const monitorFire = Mock.mock({
  numbers: [
    {
      name:'workTime',
      icon: 'arrow-up',
      percentage:'2.45',
      titleColor: color.darkYellow,
      contentColor: color.yellow,
      title: 'PLC连续工作时长',
      number: 2864,
      unit:'时'
    }, {
      name:'equipmentManage',
      icon: 'arrow-up',
      percentage:'3.45',
      titleColor: color.darkGreen,
      contentColor: color.green,
      title: '设备管理信息',
      number: 832,
      unit:'台'
    }, {
      name:'equipmentParameter',
      icon: 'arrow-down',
      percentage:'5.23',
      titleColor: color.darkRed,
      contentColor: color.red,
      title: '设备参数信息',
      number: 1145,
      unit:'条'
    }, {
      name:'alarm',
      icon: 'arrow-up',
      percentage:'6.77',
      titleColor: color.darkBlue,
      contentColor: color.blue,
      title: '本月报警信息统计',
      number: 145,
      unit:'条'
    },
  ],
  numberplcs: [
    {
      state: '@boolean',
    }, {
      state: '@boolean',
    }, {
      state: '@boolean',
    }, {
      state: '@boolean',
    },
    {
      state: '@boolean',
    }, {
      state: '@boolean',
    }, {
      state: '@boolean',
    }, {
      state: '@boolean',
    },
    {
      state: '@boolean',
    }, {
      state: '@boolean',
    }, {
      state: '@boolean',
    }, {
      state: '@boolean',
    },
    {
      state: '@boolean',
    }, {
      state: '@boolean',
    }, {
      state: '@boolean',
    }, {
      state: '@boolean',
    },
    {
      state: '@boolean',
    }, {
      state: '@boolean',
    }, {
      state: '@boolean',
    }, {
      state: '@boolean',
    },
    {
      state: '@boolean',
    },
    {
      state: '@boolean',
    },
  ]
})

module.exports = {
  [`GET ${apiPrefix}/monitor/subsystem/fire`] (req, res) {
    res.json(monitorFire)
  },
}
