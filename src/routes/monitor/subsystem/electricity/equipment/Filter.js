import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { FilterItem } from '../../../../../components'
import { Form, Button, Row, Col, DatePicker, Input, Cascader, Select ,Switch } from 'antd'

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
  // onAdd,
  onFilterChange,
  filter,
  form: {
    getFieldDecorator,
    getFieldsValue,
    setFieldsValue,
  },
}) => {
  // const handleFields = (fields) => {
  //   const { establish_time } = fields
  //   if (establish_time.length) {
  //     fields.establish_time = [establish_time[0].format('YYYY-MM-DD'), establish_time[1].format('YYYY-MM-DD')]
  //   }
  //   return fields
  // }

  const handleSubmit = () => {
    let fields = getFieldsValue()
    // fields = handleFields(fields)
    onFilterChange(fields)
  }

  const handleChange = (key, values) => {
    let fields = getFieldsValue()
    fields[key] = values
    // fields = handleFields(fields)
    onFilterChange(fields)
  }
  const { worksheet_order, worksheet_type } = filter

  // let initialCreateTime = []
  // if (filter.establish_time && filter.establish_time[0]) {
  //   initialCreateTime[0] = moment(filter.establish_time[0])
  // }
  // if (filter.establish_time && filter.establish_time[1]) {
  //   initialCreateTime[1] = moment(filter.establish_time[1])
  // }

  return (
    <Row gutter={24}>
      <Col {...ColProps} xl={{ span: 4 }} md={{ span: 8 }}>
        <FilterItem label="选择区域：">
          {getFieldDecorator('name', {  })(
            <Select
              size="large"
              style={{ width: '100%' }}
              placeholder="请选择"
              onChange={handleChange.bind(null, 'name')}>
              <Option value="A">A区</Option>
              <Option value="B">B区</Option>
              <Option value="C">C区</Option>
              <Option value="D">D区</Option>
              <Option value="E">E区</Option>
              <Option value="F">F区</Option>
            </Select>)}
        </FilterItem>
      </Col>
      {/*<Col {...ColProps} xl={{ span: 4 }} md={{ span: 8 }}>*/}
        {/*{getFieldDecorator('area', { initialValue: worksheet_order })(<Search placeholder="输入设备编号查询" size="large" onSearch={handleSubmit} />)}*/}
      {/*</Col>*/}
      {/*<Col {...ColProps} xl={{ span: 8 }} md={{ span: 8 }} sm={{ span: 12 }}>*/}
      {/*<FilterItem label="时间段：">*/}
        {/*{getFieldDecorator('establish_time', { initialValue: initialCreateTime })(*/}
          {/*<RangePicker style={{ width: '100%' }} size="large" onChange={handleChange.bind(null, 'establish_time')} />*/}
        {/*)}*/}
      {/*</FilterItem>*/}
    {/*</Col>*/}
      {/*<Col {...TwoColProps} xl={{ span: 8 }} md={{ span: 24 }} sm={{ span: 24 }}>*/}
        {/*<div style={{ display: 'flex', justifyContent: 'space-between' }}>*/}
          {/*<div >*/}
            {/*<Button type="primary" size="large" className="margin-right" style={{backgroundColor:'#54cbfc',borderColor:'#54cbfc' }} onClick={handleSubmit}>搜索</Button>*/}
          {/*</div>*/}
          {/*/!*<div>*!/*/}
            {/*/!*<Button size="large" type="ghost" onClick={onAdd} style={{color:'#54cbfc',borderColor:'#54cbfc' }} >创建工单</Button>*!/*/}
          {/*/!*</div>*!/*/}
        {/*</div>*/}
      {/*</Col>*/}
    </Row>
  )
}

Filter.propTypes = {
  // onAdd: PropTypes.func,
  form: PropTypes.object,
  filter: PropTypes.object,
  onFilterChange: PropTypes.func,
}

export default Form.create()(Filter)
