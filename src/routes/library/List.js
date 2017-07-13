import React from 'react'
import PropTypes from 'prop-types'
import { Table, Modal } from 'antd'
import styles from './List.less'
import classnames from 'classnames'
import AnimTableBody from '../../components/DataTable/AnimTableBody'
import { DropOption } from '../../components'
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
      title: '预案编号',
      dataIndex: 'planID',
      key: 'planID',
    }, {
      title: '预案名称',
      dataIndex: 'planName',
      key: 'planName',
      // render: (text, record) => <div>
      //   <font onClick={showModal}>{text}</font>
      //   <Modal
      //     title={`${record.planName}`}
      //     visible='true'
      //   >
      //     {/*visible={this.state.visible}*/}
      //     {/*onOk={this.handleOk}*/}
      //     {/*onCancel={this.handleCancel}*/}
      //     <p>Some contents...</p>
      //     <p>Some contents...</p>
      //     <p>Some contents...</p>
      //   </Modal>
      // </div>,
      render: (text, record) => <Link to={`emergency/${record.id}`}>{text}</Link>,
    }, {
      title: '预案类型',
      dataIndex: 'planType',
      key: 'planType',
    }, {
      title: '预案级别',
      dataIndex: 'planLevel',
      key: 'planLevel',
    }, {
      title: '关键字',
      dataIndex: 'keywords',
      key: 'keywords',
    }, {
      title: '作者',
      dataIndex: 'author',
      key: 'author',
    },{
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
    }
  ]

  const getBodyWrapperProps = {
    page: location.query.page,
    current: tableProps.pagination.current,
  }

  const getBodyWrapper = body => { return <AnimTableBody {...getBodyWrapperProps} body={body} />  }

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
