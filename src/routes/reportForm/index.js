import React from 'react'
import PropTypes from 'prop-types'
import { routerRedux } from 'dva/router'
import { Icon,Timeline,Row,Col,Select } from 'antd'
import { connect } from 'dva'
import { color,fontSize} from '../../utils';

const ReportForm = ({ location, dispatch, emergency, loading }) => {

  return (
    <div className="content-inner">
      <Row gutter={24}>
        <Col lg={12} md={24} style={{borderRight:1,borderRightStyle:'solid',borderColor:'#e6e6e6'}}>
          <div style={{paddingBottom:30}}>
            <Row gutter={24}>
              <Col lg={8} md={12}>
                <Select
                  size="large"
                  style={{ width: '100%' }}
                  placeholder="请选择年份">
                  <Option value="2015">2015年</Option>
                  <Option value="2016">2016年</Option>
                  <Option value="2017">2017年</Option>
                </Select>
              </Col>
            </Row>
          </div>
          <div style={{overflow:'scroll',height:650}}>
            <Timeline >
              <Timeline.Item>
                <div style={{fontSize:16}}>
                  <a href="javascript:">2017年6月管廊综合报表.pdf</a>
                </div>
                <div style={{padding:5}}>
                  摘要：本月管廊综合评分91分，健康状况良好。其中：本月所有工单120条，已处理67条，进行中40条，未处理13条；告警17次，其中重大告警1次，已解决17次，未解决0次。
                </div>
                <div style={{padding:5}}>
                  创建时间：2017-07-01 01:00
                </div>
              </Timeline.Item>
              <Timeline.Item>
                <div style={{fontSize:16}}>
                  <a href="javascript:">2017年5月管廊综合报表.pdf</a>
                </div>
                <div style={{padding:5}}>
                  摘要：本月管廊综合评分91分，健康状况良好。其中：本月所有工单120条，已处理67条，进行中40条，未处理13条；告警17次，其中重大告警1次，已解决17次，未解决0次。
                </div>
                <div style={{padding:5}}>
                  创建时间：2017-06-01 01:00
                </div>
              </Timeline.Item>
              <Timeline.Item>
                <div style={{fontSize:16}}>
                  <a href="javascript:">2017年4月管廊综合报表.pdf</a>
                </div>
                <div style={{padding:5}}>
                  摘要：本月管廊综合评分91分，健康状况良好。其中：本月所有工单120条，已处理67条，进行中40条，未处理13条；告警17次，其中重大告警1次，已解决17次，未解决0次。
                </div>
                <div style={{padding:5}}>
                  创建时间：2017-05-01 01:00
                </div>
              </Timeline.Item>
              <Timeline.Item>
                <div style={{fontSize:16}}>
                  <a href="javascript:">2017年3月管廊综合报表.pdf</a>
                </div>
                <div style={{padding:5}}>
                  摘要：本月管廊综合评分91分，健康状况良好。其中：本月所有工单120条，已处理67条，进行中40条，未处理13条；告警17次，其中重大告警1次，已解决17次，未解决0次。
                </div>
                <div style={{padding:5}}>
                  创建时间：2017-04-01 01:00
                </div>
              </Timeline.Item>
              <Timeline.Item>
                <div style={{fontSize:16}}>
                  <a href="javascript:">2017年2月管廊综合报表.pdf</a>
                </div>
                <div style={{padding:5}}>
                  摘要：本月管廊综合评分91分，健康状况良好。其中：本月所有工单120条，已处理67条，进行中40条，未处理13条；告警17次，其中重大告警1次，已解决17次，未解决0次。
                </div>
                <div style={{padding:5}}>
                  创建时间：2017-03-01 01:00
                </div>
              </Timeline.Item>
              <Timeline.Item>
                <div style={{fontSize:16}}>
                  <a href="javascript:">2017年1月管廊综合报表.pdf</a>
                </div>
                <div style={{padding:5}}>
                  摘要：本月管廊综合评分91分，健康状况良好。其中：本月所有工单120条，已处理67条，进行中40条，未处理13条；告警17次，其中重大告警1次，已解决17次，未解决0次。
                </div>
                <div style={{padding:5}}>
                  创建时间：2017-02-01 01:00
                </div>
              </Timeline.Item>
            </Timeline>
          </div>
        </Col>
        <Col lg={12} md={24}>
          <iframe src="/pdf/管廊综合月报表.pdf" width="100%" height="710px" ></iframe>
        </Col>
      </Row>
    </div>
  )
}

ReportForm.propTypes = {
  emergency: PropTypes.object,
}

export default ReportForm
