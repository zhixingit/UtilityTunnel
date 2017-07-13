import React from 'react'
import PropTypes from 'prop-types'
import { routerRedux } from 'dva/router'
import { connect } from 'dva'
import List from './List'
import Filter from './Filter'
import Modal from './Modal'
import { color,fontSize} from '../../utils';

const Emergency = ({ location, dispatch, emergency, loading }) => {
  const { list, pagination, currentItem, modalVisible, modalType, isMotion } = emergency
  const { pageSize } = pagination

  const modalProps = {
    item: modalType === 'create' ? {} : currentItem,
    visible: modalVisible,
    maskClosable: false,
    confirmLoading: loading.effects['emergency/update'],
    title: `${modalType === 'create' ? '新增应急预案' : '更新设备'}`,
    wrapClassName: 'vertical-center-modal',
    onOk (data) {
      dispatch({
        type: `emergency/${modalType}`,
        payload: data,
      })
    },
    onCancel () {
      dispatch({
        type: 'emergency/hideModal',
      })
    },
  }

  const listProps = {
    dataSource: list,
    loading: loading.effects['emergency/query'],
    pagination,
    location,
    onChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
        },
      }))
    },
  }

  const filterProps = {
    filter: {
      ...location.query,
    },
    onFilterChange (value) {
      dispatch(routerRedux.push({
        pathname: location.pathname,
        query: {
          ...value,
          page: 1,
          pageSize,
        },
      }))
    },
    onSearch (fieldsValue) {
      fieldsValue.keyword.length ? dispatch(routerRedux.push({
        pathname: '/emergency',
        query: {
          field: fieldsValue.field,
          keyword: fieldsValue.keyword,
        },
      })) : dispatch(routerRedux.push({
        pathname: '/emergency',
      }))
    },
    onAdd () {
      dispatch({
        type: 'emergency/showModal',
        payload: {
          modalType: 'create',
        },
      })
    },
  }

  return (
    <div className="content-inner">
      <div style={{fontSize:16,marginBottom:10}}>应急预案列表</div>
      <Filter {...filterProps} />
      <List {...listProps} />
      {modalVisible && <Modal {...modalProps} />}
    </div>
  )
}

Emergency.propTypes = {
  emergency: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

export default connect(({ emergency, loading }) => ({ emergency, loading }))(Emergency)
