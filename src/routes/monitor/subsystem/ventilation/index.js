import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'dva'
import {Row, Col, Card} from 'antd'
import {
  NumberCard,
  Alarm,
  FaultStatistics,
  Score,
} from './components'
import styles from './index.less'
import {color} from '../../../../utils'

const bodyStyle = {
  bodyStyle: {
    height: 699,
    background: '#fff',
    borderRadius: 5,
  },
}

function MonitorVentilation({monitorVentilation}) {
  const { numbers,numberplcs} = monitorVentilation
  const numberCards = numbers.map((item, key) => <Col key={key} lg={6} md={12}>
    <NumberCard {...item} />
  </Col>)

  const numberPLC = numberplcs.map((item, key) => <Col key={key} lg={1} md={12} style={{padding:0}}>
    <div style={{height:33,backgroundColor:item.state?color.blue:color.red,margin:1,color:'rgba(0,0,0,0)'}}>
      h
    </div>
  </Col>)

  return (
    <Row gutter={24}>
      {numberCards}
      <Col lg={12} md={24}>
        <Card bordered={false} bodyStyle={{
          padding: 0,
          height: 300,
        }}>
          <Alarm />
        </Card>
      </Col>
      <Col lg={12} md={24}>
        <Card bordered={false} bodyStyle={{
          padding: 0,
          height: 300,
        }}>
          <FaultStatistics />
        </Card>
      </Col>
      <Col lg={18} md={24}>
        <Card title= 'PLC单元运行状态' bordered={false} bodyStyle={{
          padding: 0,
          height: 260,
        }}>
          <div style={{padding:'15px 30px 30px 30px'}}>
            <div>
              <Row gutter={24}>
                <Col lg={1} md={12} style={{padding:0}}>
                  <div style={{padding:'6px 0 6px 0',textAlign:'left'}}>F区</div></Col>
                {numberPLC}
              </Row>
            </div>
            <div>
              <Row gutter={24}>
                <Col lg={1} md={12} style={{padding:0}}>
                  <div style={{padding:'6px 0 6px 0',textAlign:'left'}}>E区</div></Col>
                {numberPLC}
              </Row>
            </div>
            <div>
              <Row gutter={24}>
                <Col lg={1} md={12} style={{padding:0}}>
                  <div style={{padding:'6px 0 6px 0',textAlign:'left'}}>D区</div></Col>
                {numberPLC}
              </Row>
            </div>
            <div>
              <Row gutter={24}>
                <Col lg={1} md={12} style={{padding:0}}>
                  <div style={{padding:'6px 0 6px 0',textAlign:'left'}}>C区</div></Col>
                {numberPLC}
              </Row>
            </div>
            <div>
              <Row gutter={24}>
                <Col lg={1} md={12} style={{padding:0}}>
                  <div style={{padding:'6px 0 6px 0',textAlign:'left'}}>B区</div></Col>
                {numberPLC}
              </Row>
            </div>
            <div>
              <Row gutter={24}>
                <Col lg={1} md={12} style={{padding:0}}>
                  <div style={{padding:'6px 0 6px 0',textAlign:'left'}}>A区</div></Col>
                {numberPLC}
              </Row>
            </div>
          </div>
          {/*<WorkState />*/}
        </Card>
      </Col>
      <Col lg={6} md={24}>
        <Card bordered={false} bodyStyle={{
          padding: 0,
          height: 300,
        }}>
          <Score />
        </Card>
      </Col>
    </Row>
  )
}

MonitorVentilation.propTypes = {
  monitorVentilation: PropTypes.object,
}

export default connect(({monitorVentilation}) => ({monitorVentilation}))(MonitorVentilation)
