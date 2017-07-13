import React from 'react'
import PropTypes from 'prop-types'
import { routerRedux } from 'dva/router'
import { connect } from 'dva'
import Assets from './assets';
import OutOfStorage from './outOfStorage';
import CapitalRate from './capitalRate';
import FaultRate from './faultRate';
import CompletionRate from './completionRate';
import TotalStatistics from './totalStatistics';
import FaultStatistics from './faultStatistics';
import ScrapStatistics from './scrapStatistics';
import { Icon ,Row, Col, Card} from 'antd';
import { color } from '../../../utils';
import styles from './index.less'

const EquipmentOverview = ({ equipmentOverview, loading }) => {

  return (
    <div>
      <Row gutter={24}>
        <Col lg={12} md={24}>
          <Card className={styles.assetsCard} bordered={false} bodyStyle={{ padding: 0 }}>
            <div className={styles.content} >
              <p style={{paddingTop:15}}>截至目前累计投入资金:</p>
              <p><font size="5" color="#4fc6f7">3420</font>万元</p>
              <p style={{paddingTop:10}}>2017年预算资金:</p>
              <p><font size="5" color="#4fc6f7">1450</font>万元</p>
              <p style={{paddingTop:10}}>2017年已使用资金:</p>
              <p><font size="5" color="#4fc6f7">840</font>万元</p>
            </div>
            <div className={styles.chart}>
              <Assets />
            </div>
          </Card>
        </Col>
        <Col lg={12} md={24}>
          <Card bordered={false} bodyStyle={{
            padding: 0,
            height: 300,
            background: color.white,
          }}>
            <OutOfStorage />
          </Card>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col lg={8} md={24}>
          <Card bordered={false} bodyStyle={{
            padding: 0,
            height: 200,
            background: color.white,
          }}>
            <CapitalRate />
          </Card>
        </Col>
        <Col lg={8} md={24}>
          <Card bordered={false} bodyStyle={{
            padding: 0,
            height: 200,
            background: color.white,
          }}>
            <FaultRate />
          </Card>
        </Col>
        <Col lg={8} md={24}>
          <Card bordered={false} bodyStyle={{
            padding: 0,
            height: 200,
            background: color.white,
          }}>
            <CompletionRate />
          </Card>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col lg={8} md={24}>
          <Card bordered={false} bodyStyle={{
            padding: 0,
            height: 250,
            background: color.white,
          }}>
            <TotalStatistics />
          </Card>
        </Col>
        <Col lg={8} md={24}>
          <Card bordered={false} bodyStyle={{
            padding: 0,
            height: 250,
            background: color.white,
          }}>
            <FaultStatistics />
          </Card>
        </Col>
        <Col lg={8} md={24}>
          <Card bordered={false} bodyStyle={{
            padding: 0,
            height: 250,
            background: color.white,
          }}>
            <ScrapStatistics />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

EquipmentOverview.propTypes = {
  equipmentOverview: PropTypes.object,
  loading: PropTypes.object,
}

export default connect(({ equipmentOverview, loading }) => ({ equipmentOverview, loading }))(EquipmentOverview)
