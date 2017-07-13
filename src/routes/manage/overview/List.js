import React from 'react'
import PropTypes from 'prop-types'
import { Table, Modal } from 'antd'
import styles from './List.less'
import classnames from 'classnames'
import AnimTableBody from '../../../components/DataTable/AnimTableBody'
import { Link } from 'dva/router'

const confirm = Modal.confirm

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
      title: '工单编号',
      dataIndex: 'inspection_order',  //列数据在数据项中对应的 key，支持 a.b.c 的嵌套写法
      key: 'inspection_order',         //React 需要的 key，如果已经设置了唯一的 dataIndex，可以忽略这个属性
      render: (text, record) => <Link to={`inspection/${record.id}`}>{text}</Link>,
    }, {
      title: '巡检区域',
      dataIndex: 'inspection_area',
      key: 'inspection_area',
    }, {
      title: '巡检结果',
      dataIndex: 'conclusion',
      key: 'conclusion',
      render: (text) => <font color="#ff5039">{text}</font>
    }, {
      title: '巡检时间',
      dataIndex: 'inspection_time',
      key: 'inspection_time',
    }, {
      title: '巡检人',
      dataIndex: 'inspection_personnel',
      key: 'inspection_personnel',
    },
  ]

  const getBodyWrapperProps = {
    page: location.query.page,
    current: tableProps.pagination.current,
  }

  const getBodyWrapper = body => { return  <AnimTableBody {...getBodyWrapperProps} body={body} /> }

  return (
    <div>
      <div style={{fontSize:16,padding:'0 0 24px 0'}}>巡检列表</div>
      <Table
        {...tableProps}
        className={classnames({ [styles.table]: true })}
        bordered
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
