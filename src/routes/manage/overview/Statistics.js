import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { FilterItem } from '../../../components'
import { Form, Button, Row, Col, DatePicker, Input, Cascader, Switch,Card } from 'antd'
import {color} from '../../../utils'
import InspectionNumber from './inspectionNumber';
import InspectionResult from './inspectionResult';
import styles from './Statistics.less'

const Statistics = ({
  statistics
}) => {
  return (
    <Row gutter={24}>
      {/*{numberCards}*/}
      <Col lg={12} md={24}>
        <Card bordered={false} bodyStyle={{
          padding: 0,
          height: 300,
          background: color.white,
        }}>
          <InspectionResult />
        </Card>
      </Col>
      <Col lg={12} md={24}>
        <Card bordered={false} bodyStyle={{
          padding: 0,
          height: 300,
          background: color.white,
        }}>
          <InspectionNumber />
        </Card>
      </Col>
    </Row>
  )
}

Statistics.propTypes = {
  statistics: PropTypes.object,
}

export default Statistics
