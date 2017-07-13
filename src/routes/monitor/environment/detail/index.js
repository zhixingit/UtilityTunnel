import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import styles from './index.less'

const EnvironmentAlarmDetail = ({ environmentAlarmDetail }) => {
  const { data } = environmentAlarmDetail
  const content = []
  for (let key in data) {
    if ({}.hasOwnProperty.call(data, key)) {
      content.push(<div key={key} className={styles.item}>
        <div>{key}</div>
        <div>{String(data[key])}</div>
      </div>)
    }
  }
  return (<div className="content-inner">
    <div className={styles.content}>
      {content}
    </div>
  </div>)
}

EnvironmentAlarmDetail.propTypes = {
  environmentAlarmDetail: PropTypes.object,
  loading: PropTypes.bool,
}

export default connect(({ environmentAlarmDetail, loading }) => ({ environmentAlarmDetail, loading: loading.models.environmentAlarmDetail }))(EnvironmentAlarmDetail)
