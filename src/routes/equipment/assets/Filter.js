import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { FilterItem } from '../../../components'
import { Form, Button, Row, Col, DatePicker, Input, Cascader, Switch,Select } from 'antd'
import city from '../../../utils/city'

const Search = Input.Search
const { RangePicker } = DatePicker

const ColProps = {
  xs: 24,
  sm: 12,
  style: {
    marginBottom: 16,
  },
}

const TwoColProps = {
  ...ColProps,
  xl: 96,
}

const Filter = ({
  onAdd,
  isMotion,
  switchIsMotion,
  onFilterChange,
  filter,
  form: {
    getFieldDecorator,
    getFieldsValue,
    setFieldsValue,
  },
}) => {
  const handleFields = (fields) => {
    const { createTime } = fields
    if (createTime.length) {
      fields.createTime = [createTime[0].format('YYYY-MM-DD'), createTime[1].format('YYYY-MM-DD')]
    }
    return fields
  }

  const handleSubmit = () => {
    let fields = getFieldsValue()
   // fields = handleFields(fields)
    onFilterChange(fields)
  }

  const handleReset = () => {
    const fields = getFieldsValue()
    for (let item in fields) {
      if ({}.hasOwnProperty.call(fields, item)) {
        if (fields[item] instanceof Array) {
          fields[item] = []
        } else {
          fields[item] = undefined
        }
      }
    }
    setFieldsValue(fields)
    handleSubmit()
  }

  const handleChange = (key, values) => {
    let fields = getFieldsValue()
    fields[key] = values
    //fields = handleFields(fields)
    onFilterChange(fields)
  }
  const { equip_mode, equip_type,equip_name,install_pos } = filter

  let initialCreateTime = []
  if (filter.createTime && filter.createTime[0]) {
    initialCreateTime[0] = moment(filter.createTime[0])
  }
  if (filter.createTime && filter.createTime[1]) {
    initialCreateTime[1] = moment(filter.createTime[1])
  }

  return (
    <Row gutter={24}>
      <Col {...ColProps} xl={{ span: 4 }} md={{ span: 8 }}>
        {getFieldDecorator('equip_mode', { initialValue: equip_mode })(<Search placeholder="请输入搜索内容" size="large" onSearch={handleSubmit} />)}
      </Col>
      <Col {...ColProps} xl={{ span: 4 }} md={{ span: 8 }}>
        {getFieldDecorator('equip_type', { initialValue: equip_type })(
          <Select
            size="large"
            style={{ width: '100%' }}
            placeholder="设备类型"
            onChange={handleChange.bind(null, 'equip_type')}>
            <Option value="消防">消防</Option>
            <Option value="通风">通风</Option>
            <Option value="供电">供电</Option>
            <Option value="照明">照明</Option>
            <Option value="安防">安防</Option>
            <Option value="环境监测">环境监测</Option>
          </Select>)}
      </Col>
      <Col {...ColProps} xl={{ span: 4 }} md={{ span: 8 }}>
        {getFieldDecorator('equip_name', { initialValue: equip_name })(
          <Select
            size="large"
            style={{ width: '100%' }}
            placeholder="设备名称"
            onChange={handleChange.bind(null, 'equip_name')}>
            <Option value="CO2灭火器">CO2灭火器</Option>
            <Option value="排风扇">排风扇</Option>
            <Option value="变压器">变压器</Option>
            <Option value="安全出口标志灯">安全出口标志灯</Option>
            <Option value="摄像头">摄像头</Option>
            <Option value="水位传感器">水位传感器</Option>
          </Select>)}
      </Col>
      <Col {...ColProps} xl={{ span: 4 }} md={{ span: 8 }}>
        {getFieldDecorator('install_pos', { initialValue: install_pos })(
          <Select
            size="large"
            style={{ width: '100%' }}
            placeholder="安装区域"
            onChange={handleChange.bind(null, 'install_pos')}>
            <Option value="A区1号舱">A区1号舱</Option>
            <Option value="A区2号舱">A区2号舱</Option>
            <Option value="A区3号舱">A区3号舱</Option>
            <Option value="A区4号舱">A区4号舱</Option>
            <Option value="A区5号舱">A区5号舱</Option>
            <Option value="B区3号舱">B区3号舱</Option>
          </Select>)}
      </Col>
      {/*<Col {...ColProps} xl={{ span: 6 }} md={{ span: 8 }} sm={{ span: 12 }}>*/}
        {/*<FilterItem label="Createtime">*/}
          {/*{getFieldDecorator('createTime', { initialValue: initialCreateTime })(*/}
            {/*<RangePicker style={{ width: '100%' }} size="large" onChange={handleChange.bind(null, 'createTime')} />*/}
          {/*)}*/}
        {/*</FilterItem>*/}
      {/*</Col>*/}
      <Col {...TwoColProps} xl={{ span: 8 }} md={{ span: 24 }} sm={{ span: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div >
            <Button type="primary" size="large" className="margin-right" style={{backgroundColor:'#54cbfc',borderColor:'#54cbfc' }} onClick={handleSubmit}>搜索</Button>
            {/*<Button size="large" onClick={handleReset}>Reset</Button>*/}
          </div>
          <div>
            {/*<Switch style={{ marginRight: 16 }} size="large" defaultChecked={isMotion} onChange={switchIsMotion} checkedChildren={'Motion'} unCheckedChildren={'Motion'} />*/}
            <Button size="large" type="ghost" style={{color:'#54cbfc',borderColor:'#54cbfc' }} onClick={onAdd}>新增</Button>
          </div>
        </div>
      </Col>
    </Row>
  )
}

Filter.propTypes = {
  onAdd: PropTypes.func,
  isMotion: PropTypes.bool,
  switchIsMotion: PropTypes.func,
  form: PropTypes.object,
  filter: PropTypes.object,
  onFilterChange: PropTypes.func,
}

export default Form.create()(Filter)
