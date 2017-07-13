import React from 'react'
import PropTypes from 'prop-types'
import { Table, Modal } from 'antd'
import styles from './List.less'
import classnames from 'classnames'
import AnimTableBody from '../../../components/DataTable/AnimTableBody'
import { DropOption } from '../../../components'
import { Link } from 'dva/router'

const confirm = Modal.confirm

const List = ({ onDeleteItem, onEditItem, isMotion, location, ...tableProps }) => {
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
      title: '设备编号',
      dataIndex: 'equip_id',
      key: 'equip_id',
      render: (text, record) => <Link activeClassName="active" onlyActiveOnIndex={true} to={`/equipment/assets/${record.id}`}>{text}</Link>,
    }, {
      title: '设备类型',
      dataIndex: 'equip_type',
      key: 'equip_type',
    }, {
      title: '设备名称',
      dataIndex: 'equip_name',
      key: 'equip_name',
    }, {
      title: '设备型号',
      dataIndex: 'equip_mode',
      key: 'equip_mode',
    }, {
      title: '参数',
      dataIndex: 'parameter1',
      key: 'parameter1',
    }, {
      title: '单位',
      dataIndex: 'unit1',
      key: 'unit1',
    }, {
      title: '安装区域',
      dataIndex: 'install_pos',
      key: 'install_pos',
    }, {
      title: '安装时间',
      dataIndex: 'install_datetime',
      key: 'install_datetime',
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

  const getBodyWrapper = body => { return isMotion ? <AnimTableBody {...getBodyWrapperProps} body={body} /> : body }

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
