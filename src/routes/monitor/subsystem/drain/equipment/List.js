import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col,Icon, Card,Switch,Popover } from 'antd'
import CountUp from 'react-countup'
import styles from './List.less'
import { Link } from 'dva/router'
import { config } from '../../../../../utils'

function List ({ name,area,type, fireLevel, mainFireResistance, cabinFireResistance, isFireFightingEquipment, isFireDoorWork, isVentilator1Work, isVentilator2Work }) {
  const fireDoor = (
    <div>
      <div style={{paddingTop:10,paddingBottom:8}}>区域位置：A区K0+400</div>
      <div style={{paddingBottom:8}}>设备编号：A102305789</div>
      <div style={{paddingBottom:8}}>开关控制：关 <Switch size="small" /> 开</div>
      {isFireDoorWork?
        <div>
          <div style={{marginBottom:20}}>设备状态：<span className={styles.normal}>灯</span><span>正常</span> <span className={styles.failure}>灯</span><span>异常</span></div>
        </div>
        :
        <div>
          <div style={{marginBottom:20}}>设备状态：<span className={styles.failure}>灯</span><span>正常</span> <span className={styles.abnormal}>灯</span><span>异常</span></div>
        </div>
      }
    </div>
  );

  const ventilator1 = (
    <div>
      <div style={{paddingTop:10,paddingBottom:8}}>区域位置：A区K0+400</div>
      <div style={{paddingBottom:8}}>设备编号：A102305789</div>
      <div style={{paddingBottom:8}}>开关控制：关 <Switch size="small" /> 开</div>
      {isVentilator1Work?
        <div>
          <div style={{marginBottom:20}}>设备状态：<span className={styles.normal}>灯</span><span>正常</span> <span className={styles.failure}>灯</span><span>异常</span></div>
        </div>
        :
        <div>
          <div style={{marginBottom:20}}>设备状态：<span className={styles.failure}>灯</span><span>正常</span> <span className={styles.abnormal}>灯</span><span>异常</span></div>
        </div>
      }
    </div>
  );

  const ventilator2 = (
    <div>
      <div style={{paddingTop:10,paddingBottom:8}}>区域位置：A区K0+400</div>
      <div style={{paddingBottom:8}}>设备编号：A102305789</div>
      <div style={{paddingBottom:8}}>开关控制：关 <Switch size="small" /> 开</div>
      {isVentilator2Work?
        <div>
          <div style={{marginBottom:20}}>设备状态：<span className={styles.normal}>灯</span><span>正常</span> <span className={styles.failure}>灯</span><span>异常</span></div>
        </div>
        :
        <div>
          <div style={{marginBottom:20}}>设备状态：<span className={styles.failure}>灯</span><span>正常</span> <span className={styles.abnormal}>灯</span><span>异常</span></div>
        </div>
      }
    </div>
  );

  return (
    <div className={styles.equipmentCard}>
      <div className={styles.content}>
        <Row gutter={24}>
          <Col lg={2} md={2}>
            <div style={{height:190,textAlign:'center',paddingTop:70,}}><font size="6">{name}</font><font>区</font></div>
          </Col>
          <Col lg={2} md={2} style={{padding:0}}>
            <div style={{height:190}}>
              <Popover placement="right" content={fireDoor} title="防火门#1">
                <img alt="防火门" className={styles.imgWarp} src={config.fireDoor} />
              </Popover>
              <div className={styles.equipmentDetail}>
                <div className={styles.title}>防火门#1</div>
                {/*<Switch size="small" checkedChildren={'开'} unCheckedChildren={'关'} />*/}
                {isFireDoorWork?
                  <div>
                    <div><span className={styles.normal}>灯</span><span>正常</span></div>
                    <div><span className={styles.failure}>灯</span><span>异常</span></div>
                  </div>
                  :
                  <div>
                    <div><span className={styles.failure}>灯</span><span>正常</span></div>
                    <div style={{paddingTop:5}}><span className={styles.abnormal}>灯</span><span>异常</span></div>
                  </div>
                }
              </div>
            </div>
          </Col>
          <Col lg={2} md={2}>
            <div style={{height:150,textAlign:'center',paddingTop:130}}>消防栓#1</div>
            <div style={{textAlign:'center'}}><img alt="消防栓" src={config.fireHydrant} /></div>
          </Col>
          <Col lg={2} md={2}>
            <div style={{textAlign:'center',marginTop:-50}}>
              <Popover placement="bottom" content={ventilator1} title="通风口#1">
                <img alt="通风口" src={config.ventilator} />
              </Popover>
            </div>
            <div className={styles.equipmentDetail} style={{ paddingLeft: 0,paddingTop: 0,textAlign:'center',}}>
              <div className={styles.title}>通风口#1</div>
              {isVentilator1Work?
                <div>
                  <div><span className={styles.normal}>灯</span><span>正常</span></div>
                  <div><span className={styles.failure}>灯</span><span>异常</span></div>
                </div>
                :
                <div>
                  <div><span className={styles.failure}>灯</span><span>正常</span></div>
                  <div style={{paddingTop:5}}><span className={styles.abnormal}>灯</span><span>异常</span></div>
                </div>
              }
            </div>
          </Col>
          <Col lg={2} md={2}>
            <div style={{height:150,textAlign:'center',paddingTop:130}}>CO2灭火器#1</div>
            <div style={{textAlign:'center'}}><img alt="灭火器" src={config.fireExtinguisher} /></div>
          </Col>
          <Col lg={2} md={2}>
            <div style={{textAlign:'center'}}><img alt="悬挂式灭火器" src={config.hangingFireExtinguisher} /></div>
            <div style={{height:50,textAlign:'center',paddingTop:5}}>悬挂式灭火器#1</div>
          </Col>
          <Col lg={2} md={2}>
            <div style={{height:150,textAlign:'center',paddingTop:130}}>消防栓#2</div>
            <div style={{textAlign:'center'}}><img alt="消防栓" src={config.fireHydrant} /></div>
          </Col>
          <Col lg={2} md={2}>
            <div style={{textAlign:'center'}}><img alt="悬挂式灭火器" src={config.hangingFireExtinguisher} /></div>
            <div style={{height:50,textAlign:'center',paddingTop:5}}>悬挂式灭火器#2</div>
          </Col>
          <Col lg={2} md={2}>
            <div style={{height:150,textAlign:'center',paddingTop:130}}>CO2灭火器#2</div>
            <div style={{textAlign:'center'}}><img alt="灭火器" src={config.fireExtinguisher} /></div>
          </Col>
          <Col lg={2} md={2}>
            <div style={{textAlign:'center',marginTop:-50}}>
              <Popover placement="bottom" content={ventilator2} title="通风口#2">
                <img alt="通风口" src={config.ventilator} />
              </Popover>
            </div>
            <div className={styles.equipmentDetail} style={{ paddingLeft: 0,paddingTop: 0,textAlign:'center',}}>
              <div className={styles.title}>通风口#2</div>
              {isVentilator2Work?
                <div>
                  <div><span className={styles.normal}>灯</span><span>正常</span></div>
                  <div><span className={styles.failure}>灯</span><span>异常</span></div>
                </div>
                :
                <div>
                  <div><span className={styles.failure}>灯</span><span>正常</span></div>
                  <div style={{paddingTop:5}}><span className={styles.abnormal}>灯</span><span>异常</span></div>
                </div>
              }
            </div>
          </Col>
          <Col lg={2} md={2}>
            <div style={{height:150,textAlign:'center',paddingTop:130}}>消防栓#3</div>
            <div style={{textAlign:'center'}}><img alt="消防栓" src={config.fireHydrant} /></div>
          </Col>
          <Col lg={2} md={2}>
            <div style={{height:50,textAlign:'center',marginTop:-50}}>逃生口</div>
            <div style={{backgroundColor:'#e4f8ff',textAlign:'center',marginTop:-30}}><img alt="逃生口" src={config.escape} /></div>
            <div style={{textAlign:'center'}}><img alt="梯子" src={config.ladder} /></div>
          </Col>
        </Row>
      </div>
      <div className={styles.detail}>
        <Row gutter={24}>
          <Col lg={4} md={2}>
            <div className={styles.text}>区域：{area}号舱</div>
          </Col>
          <Col lg={4} md={2}>
            <div className={styles.text}>廊舱类型：{type}</div>
          </Col>
          <Col lg={4} md={2}>
            <div className={styles.text}>舱室火灾危险级别：{fireLevel}</div>
          </Col>
          <Col lg={4} md={2}>
            <div className={styles.text}>主体结构耐火极限：{mainFireResistance}h</div>
          </Col>
          <Col lg={4} md={2}>
            <div className={styles.text}>舱间结构耐火极限：{cabinFireResistance}h</div>
          </Col>
          <Col lg={4} md={2}>
            <div className={styles.text}>是否有自动灭火设备：{isFireFightingEquipment?'是':'否'}</div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

List.propTypes = {
  name: PropTypes.string,
  area: PropTypes.number,
  type: PropTypes.string,
  fireLevel: PropTypes.string,
  mainFireResistance: PropTypes.number,
  cabinFireResistance: PropTypes.number,
  isFireFightingEquipment: PropTypes.boolean,
  isFireDoorWork: PropTypes.boolean,
  isVentilator1Work: PropTypes.boolean,
  isVentilator2Work: PropTypes.boolean,
}

export default List
