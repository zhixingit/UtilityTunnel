import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { FilterItem } from '../../../components'
import { Form, Button, Row, Col, DatePicker, Input, Cascader, Switch,Card } from 'antd'
import {config,color} from '../../../utils'
import WorkStatistics from './workStatistics';
import styles from './Statistics.less'

const Statistics = ({
  statistics
}) => {
  return (
    <Row gutter={24}>
      {/*{numberCards}*/}
      <Col lg={8} md={24}>
        <Row gutter={24}>
          <Col lg={12} md={12}>
            <Card  bordered={false} bodyStyle={{
              padding: '0 24px 12px 24px',
              height: 144,
              background: color.yellow,
            }}>
              <img alt="未处理工单" className={styles.imgWarp} src={config.undo} />
              <div className={styles.content}>
                <div style={{fontSize:50,fontFamily:'黑体',color:'white',}}>100</div>
                <div style={{fontSize:14,color:'white',}}>本周未处理工单</div>
              </div>
            </Card>
          </Col>
          <Col lg={12} md={12}>
            <Card  bordered={false} bodyStyle={{
              padding: '0 24px 12px 24px',
              height: 144,
              background: color.green,
            }}>
              <img alt="进行中工单" className={styles.imgWarp} src={config.doing} />
              <div className={styles.content}>
                <div style={{fontSize:50,fontFamily:'黑体',color:'white',}}>37</div>
                <div style={{fontSize:14,color:'white',}}>本周进行中工单</div>
              </div>
            </Card>
          </Col>
          <Col lg={12} md={12}>
            <Card  bordered={false} bodyStyle={{
              padding: '0 24px 12px 24px',
              height: 144,
              background: color.red,
            }}>
              <img alt="故障工单" className={styles.imgWarp} src={config.fault} />
              <div className={styles.content}>
                <div style={{fontSize:50,fontFamily:'黑体',color:'white',}}>9</div>
                <div style={{fontSize:14,color:'white',}}>本周故障工单</div>
              </div>
            </Card>
          </Col>
          <Col lg={12} md={12}>
            <Card bordered={false} bodyStyle={{
              padding: '0 24px 12px 24px',
              height: 144,
              background: color.blue,
            }}>
              <img alt="已完成工单" className={styles.imgWarp} src={config.done} />
              <div className={styles.content}>
                <div style={{fontSize:50,fontFamily:'黑体',color:'white',}}>165</div>
                <div style={{fontSize:14,color:'white',}}>本周已完成工单</div>
              </div>
            </Card>
          </Col>
        </Row>
      </Col>
      <Col lg={16} md={24}>
        <Card bordered={false} bodyStyle={{
          padding: 0,
          height: 300,
          background: color.white,
        }}>
          <WorkStatistics />
        </Card>
      </Col>
    </Row>
  )
}

Statistics.propTypes = {
  statistics: PropTypes.object,
}

export default Statistics
