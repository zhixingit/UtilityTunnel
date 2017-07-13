import React from 'react'
import PropTypes from 'prop-types'
import { Table, Modal } from 'antd'
import styles from './List.less'
import classnames from 'classnames'
import AnimTableBody from '../../../components/DataTable/AnimTableBody'
import { Link } from 'dva/router'

const List = ({ location, ...tableProps }) => {

  const columns = [
    {
      title: '',
      dataIndex: 'avatar',
      key: 'avatar',
      width: 64,
      className: styles.avatar,
      render: (text) => <img alt={'avatar'} width={24} src={text} />,
    },
    {
      title: '传感器编号',
      dataIndex: 'sensorID',
      key: 'sensorID',
      render: (text, record) => <Link activeClassName="active" onlyActiveOnIndex={true} to={`/monitor/environment/${record.id}`}>{text}</Link>,
    }, {
      title: '传感器名称',
      dataIndex: 'sensorName',
      key: 'sensorName',
    }, {
      title: '传感器所在区域',
      dataIndex: 'sensorArea',
      key: 'sensorArea',
    },{
      title: '传感器所在舱位',
      dataIndex: 'sensorCabin',
      key: 'sensorCabin',
    },{
      title: '告警内容',
      dataIndex: 'alarmDetail',
      key: 'alarmDetail',
      render: (text) => <font color="#ff5039"> {text} </font>,
    }, {
      title: '告警时间',
      dataIndex: 'alarmTime',
      key: 'alarmTime',
    }
  ]

  const getBodyWrapperProps = {
    page: location.query.page,
    current: tableProps.pagination.current,
  }

  const getBodyWrapper = body => { return <AnimTableBody {...getBodyWrapperProps} body={body} /> }

  return (
    <div>
      <Table
        {...tableProps}
        className={classnames({ [styles.table]: true })}
        bordered
        scroll={{ x: 1200 }}
        columns={columns}
        simple
        rowKey={record => record.id}
        getBodyWrapper={getBodyWrapper}
      />
    </div>
  )
}

List.propTypes = {
  location: PropTypes.object,
}

export default List
