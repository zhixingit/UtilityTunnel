import React from 'react'
import PropTypes from 'prop-types'
import { routerRedux } from 'dva/router'
import { connect } from 'dva'
import List from './List'
import Filter from './Filter'
import Monitor from './Monitor'
import { color,fontSize} from '../../../utils';

const Environment = ({ location, dispatch, environment, loading }) => {
  const { list, pagination, currentItem } = environment
  const { pageSize } = pagination

  const listProps = {
    dataSource: list,
    loading: loading.effects['environment/query'],
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
        pathname: '/monitor/environment',
        query: {
          field: fieldsValue.field,
          keyword: fieldsValue.keyword,
        },
      })) : dispatch(routerRedux.push({
        pathname: '/monitor/environment',
      }))
    },
  }

  return (
    <div>
      <Monitor />
      <div className="content-inner" style={{marginLeft: -12}}>
        <div style={{fontSize:'fontSize.h3',marginBottom:10}}>实时告警信息</div>
        <Filter {...filterProps} />
        <List {...listProps} />
      </div>
    </div>
  )
}

Environment.propTypes = {
  environment: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

export default connect(({ environment, loading }) => ({ environment, loading }))(Environment)
