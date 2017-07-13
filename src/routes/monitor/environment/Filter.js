import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { FilterItem } from '../../../components'
import { Form, Button, Row, Col, DatePicker, Input, Cascader, Select ,Switch } from 'antd'
import worksheetType from '../../../utils/worksheetType'

const Search = Input.Search
const { RangePicker } = DatePicker
const Option = Select.Option

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
  onFilterChange,
  filter,
  form: {
    getFieldDecorator,
    getFieldsValue,
    setFieldsValue,
  },
}) => {
  const handleFields = (fields) => {
    const { alarmTime } = fields
    if (alarmTime.length) {
      fields.alarmTime = [alarmTime[0].format('YYYY-MM-DD'), alarmTime[1].format('YYYY-MM-DD')]
    }
    return fields
  }

  const handleSubmit = () => {
    let fields = getFieldsValue()
    fields = handleFields(fields)
    onFilterChange(fields)
  }

  const handleChange = (key, values) => {
    let fields = getFieldsValue()
    fields[key] = values
    fields = handleFields(fields)
    onFilterChange(fields)
  }
  const { sensorName, sensorArea,sensorCabin } = filter

  let initialCreateTime = []
  if (filter.alarmTime && filter.alarmTime[0]) {
    initialCreateTime[0] = moment(filter.alarmTime[0])
  }
  if (filter.alarmTime && filter.alarmTime[1]) {
    initialCreateTime[1] = moment(filter.alarmTime[1])
  }

  return (
    <Row gutter={24} type="flex" justify="start">
      <Col {...ColProps} xl={{ span: 4 }} md={{ span: 8 }}>
        {getFieldDecorator('sensorName', { initialValue: sensorName })(<Search placeholder="输入传感器名称查询" size="large" onSearch={handleSubmit} />)}
      </Col>
      <Col {...ColProps} xl={{ span: 2 }} md={{ span: 4 }}>
        {getFieldDecorator('sensorArea', { initialValue: sensorArea })(
          <Select
            size="large"
            style={{ width: '100%' }}
            placeholder="选择区域"
            onChange={handleChange.bind(null, 'sensorArea')}>
            <Option value="A区">A区</Option>
            <Option value="B区">B区</Option>
            <Option value="C区">C区</Option>
            <Option value="D区">D区</Option>
            <Option value="E区">E区</Option>
            <Option value="F区">F区</Option>
          </Select>)}
      </Col>
      <Col {...ColProps} xl={{ span: 2 }} md={{ span: 4 }}>
        {getFieldDecorator('sensorCabin', { initialValue: sensorCabin })(
          <Select
            size="large"
            style={{ width: '100%' }}
            placeholder="选择舱位"
            onChange={handleChange.bind(null, 'sensorCabin')}>
            <Option value="1号舱">1号舱</Option>
            <Option value="2号舱">2号舱</Option>
            <Option value="3号舱">3号舱</Option>
            <Option value="4号舱">4号舱</Option>
            <Option value="5号舱">5号舱</Option>
          </Select>)}
      </Col>
      <Col {...ColProps} xl={{ span: 8 }} md={{ span: 8 }} sm={{ span: 12 }}>
        <FilterItem label="时间段：">
          {getFieldDecorator('alarmTime', { initialValue: initialCreateTime })(
            <RangePicker style={{ width: '100%' }} size="large" onChange={handleChange.bind(null, 'alarmTime')} />
          )}
        </FilterItem>
      </Col>
      <Col {...ColProps} xl={{ span: 2 }} md={{ span: 4 }} sm={{ span: 4 }}>
        <div>
          <Button type="primary" size="large" className="margin-right" style={{backgroundColor:'#54cbfc',borderColor:'#54cbfc' }} onClick={handleSubmit}>搜索</Button>
        </div>
      </Col>
    </Row>
  )
}

Filter.propTypes = {
  form: PropTypes.object,
  filter: PropTypes.object,
  onFilterChange: PropTypes.func,
}

export default Form.create()(Filter)
