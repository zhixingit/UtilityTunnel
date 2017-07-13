import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Card } from 'antd'
import CountUp from 'react-countup'
import styles from './numberCard.less'
import { Link } from 'dva/router'

function NumberCard ({ name, icon, titleColor, contentColor, title, number,percentage, countUp, unit }) {
  return (
    <Card className={styles.numberCard} bordered={false} bodyStyle={{ padding: 0 }}>
      <Link activeClassName="active" onlyActiveOnIndex={true} to={`/monitor/subsystem/fire/${name}`}>
      <div className={styles.title} style={{ backgroundColor:titleColor }}>
        <span >{title || 'No Title'}</span>
        <span className={styles.percentage}>环比上月 <Icon type={icon} /> {percentage}%</span>
      </div>
      <div className={styles.content} style={{ backgroundColor:contentColor }}>
        <p>
          共 <CountUp
            start={0}
            end={number}
            duration={2.75}
            useEasing
            useGrouping
            separator=","
            className={styles.number}
            {...countUp || {}}
          /> {unit}
        </p>
      </div>
      </Link>
    </Card>
  )
}

NumberCard.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
  unit: PropTypes.string,
  titleColor: PropTypes.string,
  contentColor: PropTypes.string,
  title: PropTypes.string,
  percentage: PropTypes.string,
  number: PropTypes.number,
  countUp: PropTypes.object,
}

export default NumberCard
