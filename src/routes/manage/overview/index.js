import React from 'react'
import PropTypes from 'prop-types'
import { routerRedux } from 'dva/router'
import { connect } from 'dva'
import List from './List'
import Statistics from './Statistics'
import InspectionCalendar from './InspectionCalendar'
import { Row, Col} from 'antd'

const ManageOverview = ({ location, dispatch, manageOverview, loading }) => {
  const { list, pagination, currentItem } = manageOverview
  const { pageSize } = pagination

  const listProps = {
    dataSource: list,
    loading: loading.effects['manageOverview/query'],  //因为是在model外调用action，需要添加namespace
    pagination,
    location,
    onChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({                  //将一个新的location push到历史记录中，使之成为当前location
        pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
        },
      }))
    }
  }

  return (
    <div>
      <Statistics />
      <Row gutter={24}>
        <Col lg={16} md={24}>
          <div style={{marginLeft: -12,background:'#fff',padding:24,borderRadius: 5,boxShadow:'4px 4px 20px 0 rgba(0, 0, 0, 0.01)',minHeight: 'calc(100vh - 440px)'}}>
            <List {...listProps} />
          </div>
        </Col>
        <Col lg={8} md={24} style={{paddingLeft:0}}>
          <div style={{backgroundColor:'#fff',borderRadius: 5,}}>
            <InspectionCalendar />
          </div>
        </Col>
      </Row>
    </div>
  )
}

ManageOverview.propTypes = {
  manageOverview: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

export default connect(({ manageOverview, loading }) => ({ manageOverview, loading }))(ManageOverview)
