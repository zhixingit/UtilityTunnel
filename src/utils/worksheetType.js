
/*

    **排序**

    ```js
    var map = {}
    _.each(_.keys(REGIONS),function(id){
      map[id] = REGIONS[ID]
    })
    JSON.stringify(map)
    ```
*/
let DICT = {
  110000: '北京',
  110100: '北京市',
  110101: '东城区',
  110102: '西城区',
  110105: '朝阳区',
  110106: '丰台区',
  110107: '石景山区',
  110108: '海淀区',
}

// id pid/parentId name children
const tree = (list) => {
  let mapped = {}
  let item
  for (let i = 0; i < list.length; i++) {
    item = list[i]
    if (!item || !item.id) continue
    mapped[item.id] = item
  }

  let result = []
  for (let ii = 0; ii < list.length; ii++) {
    item = list[ii]

    if (!item) continue
            /* jshint -W041 */
    if (item.pid === undefined && item.parentId === undefined) {
      result.push(item)
      continue
    }
    let parent = mapped[item.pid] || mapped[item.parentId]
    if (!parent) continue
    if (!parent.children) parent.children = []
    parent.children.push(item)
  }
  return result
}

let DICT_FIXED = (function () {
  let fixed = []
  for (let id in DICT) {
    if ({}.hasOwnProperty.call(DICT, id)) {
      let pid
      if (id.slice(2, 6) !== '0000') {
        pid = id.slice(4, 6) === '00' ? (`${id.slice(0, 2)}0000`) :
        `${id.slice(0, 4)}00`
      }
      fixed.push({
        id,
        pid,
        name: DICT[id],
        value: DICT[id],
        label: DICT[id],
      })
    }
  }
  return tree(fixed)
}())

module.exports = DICT_FIXED
