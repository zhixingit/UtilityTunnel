import { color } from '../utils/theme'
const Mock = require('mockjs')
const config = require('../utils/config')
const { apiPrefix } = config

const monitorDrain = Mock.mock({
  numbers: [
    {
      name:'workTime',
      icon: 'arrow-up',
      percentage:'2.31',
      titleColor: color.darkYellow,
      contentColor: color.yellow,
      title: 'PLC连续工作时长',
      number: 2650,
      unit:'时'
    }, {
      name:'equipmentManage',
      icon: 'arrow-up',
      percentage:'2.65',
      titleColor: color.darkGreen,
      contentColor: color.green,
      title: '设备管理信息',
      number: 432,
      unit:'台'
    }, {
      name:'equipmentParameter',
      icon: 'arrow-down',
      percentage:'1.25',
      titleColor: color.darkRed,
      contentColor: color.red,
      title: '设备参数信息',
      number: 432,
      unit:'条'
    }, {
      name:'alarm',
      icon: 'arrow-up',
      percentage:'3.21',
      titleColor: color.darkBlue,
      contentColor: color.blue,
      title: '本月报警信息统计',
      number: 46,
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
  [`GET ${apiPrefix}/monitor/subsystem/drain`] (req, res) {
    res.json(monitorDrain)
  },
}
