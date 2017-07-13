import React from 'react'
import PropTypes from 'prop-types'
import { routerRedux } from 'dva/router'
import { connect } from 'dva'
import List from './List'
import Filter from './Filter'
import Modal from './Modal'

const BIM = ({bim }) => {
  return (
    <div className="content-inner" style={{padding:0}}>
      <iframe width="100%" height="760px" src="http://192.168.2.152/bim"></iframe>
    </div>
  )
}

BIM.propTypes = {
  bim: PropTypes.object,
}

export default BIM
