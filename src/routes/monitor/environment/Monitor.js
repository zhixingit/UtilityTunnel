import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { FilterItem } from '../../../components'
import { Form, Button, Row, Col, DatePicker, Input, Cascader, Switch,Card } from 'antd'
import WorkStatistics from './workStatistics';
import styles from './Monitor.less'
import { color,fontSize,config } from '../../../utils';

const Monitor = ({
  monitor
}) => {
  return (
    <div className={styles.environmentCard}>
      <div style={{textAlign:'center'}}>
        <img alt="BIM" className={styles.imgWarp} src={config.environmentBIM1} />
      </div>
      <Row gutter={24}>
        <Col lg={4} md={12}>
          <div className={styles.subCard} style={{marginLeft:30}}>
            <img alt="BIM" className={styles.iconWarp} src={config.environmentTemperature} />
            <div className={styles.content}>
              <p className={styles.title}>廊内温度</p>
              <p className={styles.number} style={{color:color.blue}}>
                15℃
              </p>
            </div>
          </div>
        </Col>
        <Col lg={4} md={12}>
          <div className={styles.subCard}>
            <img alt="BIM" className={styles.iconWarp} src={config.environmentHumidity} />
            <div className={styles.content}>
              <p className={styles.title}>廊内湿度</p>
              <p className={styles.number} style={{color:color.red}}>
                38%
              </p>
            </div>
          </div>
        </Col>
        <Col lg={4} md={12}>
          <div className={styles.subCard}>
            <img alt="BIM" className={styles.iconWarp} src={config.environmentWater} />
            <div className={styles.content}>
              <p className={styles.title}>积水深度</p>
              <p className={styles.number} style={{color:color.darkBlue}}>
                32cm
              </p>
            </div>
          </div>
        </Col>
        <Col lg={4} md={12}>
          <div className={styles.subCard}>
            <img alt="BIM" className={styles.iconWarp} src={config.environmentO2} />
            <div className={styles.content}>
              <p className={styles.title}>氧气浓度</p>
              <p className={styles.number} style={{color:color.yellow}}>
                47%
              </p>
            </div>
          </div>
        </Col>
        <Col lg={4} md={12}>
          <div className={styles.subCard}>
            <img alt="BIM" className={styles.iconWarp} src={config.environmentH2S} />
            <div className={styles.content}>
              <p className={styles.title}>H2S浓度</p>
              <p className={styles.number} style={{color:color.green}}>
                23%
              </p>
            </div>
          </div>
        </Col>
        <Col lg={4} md={12}>
          <div className={styles.subCard}>
            <img alt="BIM" className={styles.iconWarp} src={config.environmentCH4} />
            <div className={styles.content}>
              <p className={styles.title}>CH4浓度</p>
              <p className={styles.number} style={{color:color.darkPeach}}>
                18%
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

Monitor.propTypes = {
  monitor: PropTypes.object,
}

export default Monitor
