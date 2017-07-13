import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, InputNumber, Radio, Modal, Cascader,Select } from 'antd'
import styles from './Modal.less'

const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
}

const modal = ({
  item = {},
  onOk,
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue,
  },
  ...modalProps
}) => {
  const handleOk = () => {
    validateFields((errors) => {
      if (errors) {
        return
      }
      const data = {
        ...getFieldsValue(),
        key: item.key,
      }
      onOk(data)
    })
  }

  const modalOpts = {
    ...modalProps,
    onOk: handleOk,
  }

  return (
    <Modal {...modalOpts}>
      <Form layout="horizontal">
        <FormItem label="设备编号" hasFeedback {...formItemLayout}>
          {getFieldDecorator('equip_id', {
            initialValue: item.equip_id,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="设备名称" hasFeedback {...formItemLayout}>
          {getFieldDecorator('equip_name', {
            initialValue: item.equip_name,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="设备类型" hasFeedback {...formItemLayout}>
          {getFieldDecorator('equip_type', {
            initialValue: item.equip_type,
            rules: [
              {
                required: true,
              },
            ],
          })(<Select
            size="large"
            style={{ width: '50%' }}
            placeholder="请选择"
          >
            <Option value="消防">消防</Option>
            <Option value="通风">通风</Option>
            <Option value="供电">供电</Option>
            <Option value="照明">照明</Option>
            <Option value="安防">安防</Option>
            <Option value="环境监测">环境监测</Option>
          </Select>)}
        </FormItem>
        <FormItem label="设备型号" hasFeedback {...formItemLayout}>
          {getFieldDecorator('equip_mode', {
            initialValue: item.equip_mode,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="参数" hasFeedback {...formItemLayout}>
          {getFieldDecorator('parameter1', {
            initialValue: item.parameter1,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="单位" hasFeedback {...formItemLayout}>
          {getFieldDecorator('unit1', {
            initialValue: item.unit1,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="安装区域" hasFeedback {...formItemLayout}>
          {getFieldDecorator('install_pos', {
            initialValue: item.install_pos,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
      </Form>
    </Modal>
  )
}

modal.propTypes = {
  form: PropTypes.object.isRequired,
  type: PropTypes.string,
  item: PropTypes.object,
  onOk: PropTypes.func,
}

export default Form.create()(modal)
