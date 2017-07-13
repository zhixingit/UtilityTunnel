import React from 'react'
import PropTypes from 'prop-types'
import { routerRedux } from 'dva/router'
import {Row, Col} from 'antd'
import { connect } from 'dva'
import List from './List'
import Filter from './Filter'
import Modal from './Modal'
import { color,fontSize } from '../../../../../utils';
import styles from './index.less'

const ElectricityEquipment = ({ location, dispatch, electricityEquipment }) => {
  const { numbers, modalVisible, modalType } = electricityEquipment

  // const modalProps = {
  //   item: modalType === 'create' ? {} : {},
  //   visible: modalVisible,
  //   maskClosable: false,
  //   confirmLoading: loading.effects['fireEquipment/update'],
  //   title: `${modalType === 'create' ? '创建工单' : '编辑工单'}`,
  //   wrapClassName: 'vertical-center-modal',
  //   onOk (data) {
  //     console.log(data)
  //     dispatch({
  //       type: `fireEquipment/${modalType}`,
  //       payload: data,
  //     })
  //   },
  //   onCancel () {
  //     dispatch({
  //       type: 'fireEquipment/hideModal',
  //     })
  //   },
  // }

  // const listProps = {
  //   dataSource: list,
  //   loading: loading.effects['fireEquipment/query'],
  //   location
  // }

  const filterProps = {
    filter: {
      ...location.query,
    },
    onFilterChange (value) {
      console.log(value)
      dispatch(routerRedux.push({
        pathname: location.pathname,
        query: {
          ...value,
        },
      }))
    },
    onSearch (fieldsValue) {
      fieldsValue.keyword.length ? dispatch(routerRedux.push({
        pathname: '/monitor/subsystem/electricity/equipmentManage',
        query: {
          field: fieldsValue.field,
          keyword: fieldsValue.keyword,
        },
      })) : dispatch(routerRedux.push({
        pathname: '/monitor/subsystem/electricity/equipmentManage',
      }))
    },
    // onAdd () {
    //   dispatch({
    //     type: 'fireEquipment/showModal',
    //     payload: {
    //       modalType: 'create',
    //     },
    //   })
    // },
  }
  const numberAreas = numbers.map((item, key) => <Col key={key} lg={24} md={24}>
    <List {...item} />
  </Col>)
  return (
    <div className={styles.content} style={{marginLeft: -12}}>
      <Filter {...filterProps} />
      <Row gutter={24}>
        {numberAreas}
      </Row>
      {/*<List {...listProps} />*/}
      {modalVisible && <Modal {...modalProps} />}
    </div>
  )
}

ElectricityEquipment.propTypes = {
  electricityEquipment: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  // loading: PropTypes.object,
}

export default connect(({ electricityEquipment}) => ({ electricityEquipment}))(ElectricityEquipment)
