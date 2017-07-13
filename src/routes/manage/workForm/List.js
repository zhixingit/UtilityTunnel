import React from 'react'
import PropTypes from 'prop-types'
import { Table, Modal } from 'antd'
import styles from './List.less'
import classnames from 'classnames'
import AnimTableBody from '../../../components/DataTable/AnimTableBody'
import { DropOption } from '../../../components'
import { Link } from 'dva/router'

const confirm = Modal.confirm

const List = ({ onDeleteItem, onEditItem, location, ...tableProps }) => {
  const handleMenuClick = (record, e) => {
    if (e.key === '1') {
      onEditItem(record)
    } else if (e.key === '2') {
      confirm({
        title: '确定删除?',
        onOk () {
          onDeleteItem(record.id)
        },
      })
    }
  }

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
      dataIndex: 'worksheet_order',
      key: 'worksheet_order',
      render: (text, record) => <Link activeClassName="active" onlyActiveOnIndex={true} to={`/manage/workForm/${record.id}`}>{text}</Link>,
    }, {
      title: '设备名称',
      dataIndex: 'equip_name',
      key: 'equip_name',
    }, {
      title: '设备编号',
      dataIndex: 'equip_id',
      key: 'equip_id',
    },{
      title: '工单类型',
      dataIndex: 'worksheet_type',
      key: 'worksheet_type',
    }, {
      title: '处理人',
      dataIndex: 'repairer',
      key: 'repairer',
    },  {
      title: '处理状态',
      dataIndex: 'worksheet_state',
      key: 'worksheet_state',
      render: (text) => <font color="#ff5039">{text}</font>,
    }, {
      title: '截止日期',
      dataIndex: 'establish_time',
      key: 'establish_time',
    }, {
      title: '操作',
      key: 'operation',
      width: 100,
      render: (text, record) => {
        return <DropOption onMenuClick={e => handleMenuClick(record, e)} menuOptions={[{ key: '1', name: '编辑' }, { key: '2', name: '删除' }]} />
      },
    },
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
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  location: PropTypes.object,
}

export default List
