const qs = require('qs')
const Mock = require('mockjs')
const config = require('../utils/config')
const { apiPrefix } = config

let inspectionListData = Mock.mock({
  'data|10-20': [
    {
      id: '@id',
      inspection_order : '@id',
      'inspection_area|1': [
      'A区',
      'B区',
      'C区',
      'D区',
      'E区',
      'F区'
    ],
      'conclusion|1': [
        '完好',
        '良好',
        '较差',
      ],
      inspection_time : '@datetime',
      'inspection_personnel|1': [
        '吴宇杰',
        '许海燕',
        '江雪琴',
        '熊蕲涛',
      ],
      avatar () {
        return Mock.Random.image('100x100', Mock.Random.color(), '#757575', 'png')
      },
    },
  ],
})

let database = inspectionListData.data

module.exports = {
  [`GET ${apiPrefix}/manage/overview`] (req, res) {
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
}
