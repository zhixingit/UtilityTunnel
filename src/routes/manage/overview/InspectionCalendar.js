import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Form, Button, Row, Col, DatePicker, Input, Calendar , Switch,Card } from 'antd'
import {color} from '../../../utils'
moment.locale('zh-cn');
const InspectionCalendar = ({
  props
}) => {
  function onPanelChange(value, mode) {
    console.log(value, mode);
  }

  return (
    <div>
      <div style={{ borderTopLeftRadius:5,borderTopRightRadius:5,height:100,backgroundColor:'#54cbfc',color:'#fff'}}>
        <Row gutter={24}>
          <Col lg={18} md={24} style={{padding:'24px 0 0 36px'}}>
            <h2>巡检日历</h2>
          </Col>
          <Col lg={6} md={24} style={{right:0,padding:'24px 36px 0 0'}}>
            <Button size="large" type="primary"  style={{backgroundColor:'#54cbfc',color:'#ffffff',borderColor:'#ffffff' }} >添加任务</Button>
            {/*<h5 style={{color:'#fff',padding:5,borderWidth:1,borderStyle:'solid',borderColor:'#fff',textAlign:'center'}}>添加任务</h5>*/}
          </Col>
        </Row>
      </div>
      <div style={{ borderBottomLeftRadius:5,borderBottomRightRadius:5,padding:'24px 24px 24px 24px'}}>
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      </div>
    </div>
  )
}

InspectionCalendar.propTypes = {
  props: PropTypes.object,
}

export default InspectionCalendar
