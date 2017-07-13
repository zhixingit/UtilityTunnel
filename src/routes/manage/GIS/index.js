import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'dva'
import { Row, Col, Card, Button } from 'antd'
import { Map, Marker, Polyline,InfoWindow } from 'react-amap';
import { config } from '../../../utils'
import styles from './index.less'

// const center = { longitude: 120.096509, latitude: 31.889087 }
// var position = { longitude: 120.068872, latitude: 31.897905 }
// var visible = true;

const path = [{longitude: 120.020292, latitude: 31.899144},
  {longitude: 120.022523, latitude: 31.899144},
  {longitude: 120.046299, latitude: 31.898634},
  {longitude: 120.068872, latitude: 31.897905},
  {longitude: 120.083292, latitude: 31.897686},
  {longitude: 120.105865, latitude: 31.897249},
  {longitude: 120.122688, latitude: 31.896812},
  {longitude: 120.123117, latitude: 31.882018},
  {longitude: 120.125177, latitude: 31.866566}]

const styleC = {
  background: `url('/GIS/巡检人员.png')`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  width: '40px',
  height: '50px',
  color: '#000',
  textAlign: 'center',
  lineHeight: '40px'
}

// var markerEvents =  setInterval(function () {
//   position = {
//     longitude: 120.068872 + Math.random() * 1 ,
//     latitude: 31.897905 + Math.random() * 1
//   }
// }.bind(this), 1000);

// const windowEvents = {
//   created: (iw) => {console.log(iw)},
//   open: () => {console.log('InfoWindow opened')},
//   close: () => {console.log('InfoWindow closed')},
//   change: () => {console.log('InfoWindow prop changed')},
// }

function GIS ({ dispatch,gis }) {
  const {center, position, visible} = gis

  const markerEvents = setInterval(function () {
    const data = position[0];
    position.splice(0,position.length);
    dispatch({
      type: 'gis/update',
      payload: data,
    })
  }, 2000);

  // const html = `<div>
  //     <h4>巡检人员</h4>
  //     <p>姓名：张三</p>
  //     <p>当前位置: A区5号舱</p>
  //     <p>巡检任务: 检查A区5号舱防火门故障</p>
  //     <p>当前坐标: ${position.longitude},${position.latitude}</p>
  //   </div>`;
  const html = `
巡检人员
姓名：张三
当前位置: A区5号舱
巡检任务: 检查A区5号舱防火门故障
当前坐标: ${position[0].longitude},${position[0].latitude}`;
  const htmlB = `
巡检人员
姓名：李四
当前位置: B区3号舱
巡检任务: 定期检查B区所有设备
当前坐标: ${position[1].longitude},${position[1].latitude}`;

  return  <div style={{ width: '100%',height: '770px' }}>
  <Map plugins={['ToolBar']} center={ center } zoom={13} >
    <Marker
      position={position[0]}
      title={html}
      label={{content:'巡检人员A',offset:(0, -10)}}
      events={markerEvents}>
      <div style={styleC}></div>
    </Marker>
    <Marker
      position={position[1]}
      title={htmlB}
      label={{content:'巡检人员B',offset:(0,10)}}>
      <div style={styleC}></div>
    </Marker>
    {/*<InfoWindow*/}
      {/*position={position}*/}
      {/*visible={visible}*/}
      {/*isCustom={false}*/}
      {/*content={html}*/}
      {/*size={{width: 200,height: 140}}*/}
      {/*offset={[30, -20]}*/}
    {/*/>*/}
    <Polyline
      path={ path }
      style = {{strokeWeight:15,strokeOpacity:0.5,strokeColor:'#54cbfc',isOutline:true,outlineColor:'#00a4e7'}}
    />
  </Map>
  </div>
}

GIS.propTypes = {
  gis: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({gis}) => ({gis}))(GIS)
