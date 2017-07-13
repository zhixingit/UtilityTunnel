import React from 'react'
import PropTypes from 'prop-types'
import { routerRedux } from 'dva/router'
import { connect } from 'dva'
import List from './List'
import Filter from './Filter'
import Statistics from './Statistics'
import Modal from './Modal'
import { color,fontSize } from '../../../utils';

const WorkForm = ({ location, dispatch, workForm, loading }) => {
  const { list, pagination, currentItem, modalVisible, modalType } = workForm
  const { pageSize } = pagination

  const modalProps = {
    item: modalType === 'create' ? {} : currentItem,
    visible: modalVisible,
    maskClosable: false,
    confirmLoading: loading.effects['workForm/update'],
    title: `${modalType === 'create' ? '创建工单' : '编辑工单'}`,
    wrapClassName: 'vertical-center-modal',
    onOk (data) {
      console.log(data)
      dispatch({
        type: `workForm/${modalType}`,
        payload: data,
      })
    },
    onCancel () {
      dispatch({
        type: 'workForm/hideModal',
      })
    },
  }

  const listProps = {
    dataSource: list,
    loading: loading.effects['workForm/query'],
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
    onDeleteItem (id) {
      dispatch({
        type: 'workForm/delete',
        payload: id,
      })
    },
    onEditItem (item) {
      dispatch({
        type: 'workForm/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
        },
      })
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
        pathname: '/manage/workForm',
        query: {
          field: fieldsValue.field,
          keyword: fieldsValue.keyword,
        },
      })) : dispatch(routerRedux.push({
        pathname: '/manage/workForm',
      }))
    },
    onAdd () {
      dispatch({
        type: 'workForm/showModal',
        payload: {
          modalType: 'create',
        },
      })
    },
  }

  return (
    <div>
      <Statistics />
      <div className="content-inner" style={{marginLeft: -12}}>
        <div style={{fontSize:'fontSize.h3'}}>工单列表</div>
        <Filter {...filterProps} />
        <List {...listProps} />
        {modalVisible && <Modal {...modalProps} />}
      </div>
    </div>
  )
}

WorkForm.propTypes = {
  workForm: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

export default connect(({ workForm, loading }) => ({ workForm, loading }))(WorkForm)
