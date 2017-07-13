import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, InputNumber, Radio, Modal, Cascader,Select,Upload,Icon } from 'antd'
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

  const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }

  const modalOpts = {
    ...modalProps,
    onOk: handleOk,
  }

  return (
    <Modal {...modalOpts}>
      <Form layout="horizontal">
        <FormItem label="预案编号" hasFeedback {...formItemLayout}>
          {getFieldDecorator('planID', {
            initialValue: item.planID,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="预案名称" hasFeedback {...formItemLayout}>
          {getFieldDecorator('planName', {
            initialValue: item.planName,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="预案类型" hasFeedback {...formItemLayout}>
          {getFieldDecorator('planType', {
            initialValue: item.planType,
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
            <Select.Option value="安全事故类">安全事故类</Select.Option>
            <Select.Option value="自然灾害类">自然灾害类</Select.Option>
            <Select.Option value="社会治安类">社会治安类</Select.Option>
          </Select>)}
        </FormItem>
        <FormItem label="预案级别" hasFeedback {...formItemLayout}>
          {getFieldDecorator('planLevel', {
            initialValue: item.planLevel,
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
            <Select.Option value="1">一级</Select.Option>
            <Select.Option value="2">二级</Select.Option>
            <Select.Option value="3">三级</Select.Option>
          </Select>)}
        </FormItem>
        <FormItem label="关键字" hasFeedback {...formItemLayout}>
          {getFieldDecorator('keywords', {
            initialValue: item.keywords,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="作者" hasFeedback {...formItemLayout}>
          {getFieldDecorator('author', {
            initialValue: item.author,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input style={{ width: '50%' }} />)}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="上传预案"
        >
          <div className="dropbox">
            {getFieldDecorator('dragger', {
              valuePropName: 'fileList',
              getValueFromEvent: {normFile},
              rules: [
                {
                  required: true,
                },
              ],
            })(
              <Upload.Dragger name="files" action="/upload.do">
                <p className="ant-upload-drag-icon">
                  <Icon style={{color:'54cbfc'}} type="plus" />
                  {/*inbox*/}
                </p>
                <p className="ant-upload-text">点击选择或拖拽文件上传</p>
                <p className="ant-upload-hint">注意：仅支持pdf文件格式</p>
              </Upload.Dragger>
            )}
          </div>
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
