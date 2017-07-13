import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, InputNumber, Radio, Modal, Cascader,DatePicker,Select} from 'antd'
import moment from 'moment';
import city from '../../../../../utils/city'
import styles from './Modal.less'
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

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
      data.repair_area = data.repair_area.join(' ')
      onOk(data)
    })
  }

  const modalOpts = {
    ...modalProps,
    onOk: handleOk,
  }

  const state = {
    value: 1,
  }
  const onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  }

  return (
    <Modal {...modalOpts}>
      <Form layout="horizontal">
        <FormItem label="工单类型" hasFeedback {...formItemLayout}>
          {getFieldDecorator('worksheet_type', {
            initialValue: item.worksheet_type,
            rules: [
              {
                required: true,
              },
            ],
          })(
            <Radio.Group>
              <Radio value="保养单">保养单</Radio>
              <Radio value="故障单">故障单</Radio>
              <Radio value="巡检单">巡检单</Radio>
            </Radio.Group>
          )}
        </FormItem>
        <FormItem label="设备名称" hasFeedback {...formItemLayout}>
          {getFieldDecorator('equip_name', {
            initialValue: item.equip_name,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input placeholder="请输入正确的设备名称" />)}
        </FormItem>
        <FormItem label="设备编号" hasFeedback {...formItemLayout}>
          {getFieldDecorator('equip_id', {
            initialValue: item.equip_id,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input placeholder="请填写设备编号" />)}
        </FormItem>
        <FormItem label="区域位置" hasFeedback {...formItemLayout}>
          {getFieldDecorator('repair_area', {
            initialValue: item.repair_area && item.repair_area.split(' '),
            rules: [
              {
                required: true,
              },
            ],
          })(<Cascader
            size="large"
            style={{ width: '100%' }}
            options={city}
            placeholder="请选择区域"
          />)}
        </FormItem>
        <FormItem label="保养内容" hasFeedback {...formItemLayout}>
          {getFieldDecorator('discribe_content', {
            initialValue: item.discribe_content,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input placeholder="请填写保养内容" />)}
        </FormItem>
        <FormItem label="备注信息" hasFeedback {...formItemLayout}>
          {getFieldDecorator('remarks', {
            initialValue: item.remarks,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input placeholder="请填写备注信息" />)}
        </FormItem>
        {/*<FormItem label="截止日期" hasFeedback {...formItemLayout}>*/}
          {/*{getFieldDecorator('establish_time', {*/}
            {/*initialValue: item.establish_time,*/}
            {/*rules: [*/}
              {/*{*/}
                {/*required: true,*/}
              {/*},*/}
            {/*],*/}
          {/*})(<DatePicker format="YYYY-MM-DD HH:mm:ss" />)}*/}
        {/*</FormItem>*/}
        <FormItem label="处理人" hasFeedback {...formItemLayout}>
          {getFieldDecorator('repairer', {
            initialValue: item.repairer,
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
            <Select.Option value="张三">张三</Select.Option>
            <Select.Option value="李四">李四</Select.Option>
          </Select>)}
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
