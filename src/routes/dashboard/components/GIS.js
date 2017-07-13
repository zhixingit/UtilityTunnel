import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import { Map, Marker, Polyline,InfoWindow } from 'react-amap';
import styles from './GIS.less'
import { color } from '../../../utils'

window.amapkey = 'cea1fee3649a0609a283acaa08eee28d'
const center = { longitude: 120.096509, latitude: 31.889087 }
var position = { longitude: 120.068872, latitude: 31.897905 }

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

var visible = false;
const windowEvents = {
  created: (iw) => {console.log(iw)},
  open: () => {console.log('InfoWindow opened')},
  close: () => {console.log('InfoWindow closed')},
  change: () => {console.log('InfoWindow prop changed')},
}

function GIS ({ data }) {

  const html = `<div>
      <h4>巡检人员</h4>
      <p>姓名：张三</p>
      <p>当前位置: ${position.longitude},${position.latitude}</p>
      <p>巡检任务: 检查A区5号舱防火门故障</p>
    </div>`;

  return <Map center={ center } zoom={12} >
      <Marker
        position={position}>
        <div style={styleC}></div>
      </Marker>
      <InfoWindow
        position={position}
        visible={visible}
        isCustom={false}
        content={html}
        size={{width: 200,height: 140}}
        offset={[30, -20]}
        events={windowEvents}
      />
      <Polyline
        path={ path }
        style = {{strokeWeight:15,strokeOpacity:0.5,strokeColor:'#54cbfc',isOutline:true,outlineColor:'#00a4e7'}}
      />
    </Map>
}

GIS.propTypes = {
  data: PropTypes.array,
}

export default GIS
