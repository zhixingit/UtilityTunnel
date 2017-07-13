import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'dva'
import {Row, Col, Card} from 'antd'
import { Link } from 'dva/router'
import { config } from '../../utils'
import {
  NumberCard,
  Quote,
  Sales,
  Weather,
  RecentSales,
  Comments,
  Completed,
  Browser,
  Cpu,
  User,
  Overview,
  GIS,
  Score,
  ScoreDetail,
  AssetStatistics,
  Inspection,
  EnergyAnalysis,
  Alarm
} from './components'
import styles from './index.less'
import {color} from '../../utils'

const bodyStyle = {
  bodyStyle: {
    height: 699,
    background: '#fff',
    borderRadius: 5,
  },
}

function Dashboard({dashboard}) {
  const {weather, sales, quote, numbers, recentSales, comments, completed, browser, cpu, user, overview} = dashboard
  const numberCards = numbers.map((item, key) => <Col key={key} lg={6} md={12}>
    <NumberCard {...item} />
  </Col>)

  return (
    <Row gutter={24}>
      {/*{numberCards}*/}
      <Col lg={6} md={24}>
        <Row gutter={24}>
          <Col lg={24} md={8}>
            <Card title="基本信息" bordered={false} className={styles.weather} bodyStyle={{
              padding: '0 12px 12px 12px',
              height: 144,
              background: color.white,
            }}>
              <div style={{ display:'flex' }}>
                <span>
                  <p style={{ padding:8 }}>管廊区段：<font color="#4fc6f7">秣周东路管廊</font></p>
                  <p style={{ padding:8 }}>起止点：<font color="#4fc6f7">大周路-宁双路</font></p>
                  <p style={{ padding:8 }}>管廊长度：<font color="#4fc6f7">3288m</font></p>
                  <p style={{ padding:8 }}>管廊尺寸：<font color="#4fc6f7">3.0*3.1</font></p>
                </span>
                <span style={{paddingLeft:20}}>
                  <p style={{ padding:8 }}>区段负责人：<font color="#4fc6f7">吴国民</font></p>
                  <p style={{ padding:8 }}>路名：<font color="#4fc6f7">秣周东路</font></p>
                  <p style={{ padding:8 }}>道路宽度：<font color="#4fc6f7">40m</font></p>
                </span>
              </div>
            </Card>
          </Col>
          <Col lg={24} md={8}>
            <Card title="本月管廊综合得分" bordered={false} className={styles.weather} bodyStyle={{
              padding: 0,
              height: 144,
            }}>
              <Row gutter={24} style={{marginLeft:0,marginRight:0}}>
                <Col lg={10} md={10}>
                  <div style={{padding:2,borderWidth:1,borderColor:'#333'}}>
                    <Score />
                  </div>
                </Col>
                <Col lg={13} md={13}>
                  <ScoreDetail style={{marginLeft:-12}}/>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col lg={24} md={8}>
            <Card title="管廊资产统计" bordered={false} className={styles.quote} bodyStyle={{
              padding: 0,
              height: 144,
            }}>
              <AssetStatistics />
            </Card>
          </Col>
        </Row>
      </Col>
      <Col lg={12} md={24}>
        <Card bordered={false} bodyStyle={{
          padding: 0,
          height: 576,
        }}>
          {/*<a href="http://192.168.2.152/bim">*/}
          {/*<img alt={'BIM'}   style={{width:'100%'}} src={config.BIM} />*/}
          <iframe width="100%" height="100%" src="http://192.168.2.152/bim"></iframe>
          {/*</a>*/}
        </Card>
      </Col>
      <Col lg={6} md={24}>
        <Row gutter={24}>
          <Col lg={24} md={8}>
            <Link activeClassName="active" onlyActiveOnIndex={true} to={`/manage/GIS`}>
              <Card title="巡检路段" bordered={false} className={styles.weather} bodyStyle={{
                padding: '0 12px 12px 12px',
                height: 144,
                background: color.white,
              }}>
                {/*<img alt={'GIS'}  style={{width:'100%',height: 132}} src={config.GIS} />*/}
                <GIS />
              </Card>
            </Link>
          </Col>
          <Col lg={24} md={16}>
            <Card title="视频监控" bordered={false} className={styles.quote} bodyStyle={{
              padding: '0 12px 12px 12px',
              height: 340,
              background: color.white,
            }}>
              <div>
                <img alt={'video'}  width={'100%'} src={config.video} />
              </div>
              <div style={{margin:'5px 0 0 0',padding:'5px',backgroundColor:'rgb(248,248,248)'}}>
                N001 : K0+120
              </div>
              <div style={{margin:'5px 0 0 0',padding:'5px',backgroundColor:'rgb(248,248,248)'}}>
                N002 : K0+121
              </div>
              <div style={{margin:'5px 0 0 0',padding:'5px',backgroundColor:'rgb(248,248,248)'}}>
                N003: K0+122
              </div>
              <div style={{margin:'5px 0 0 0',padding:'5px',backgroundColor:'rgb(248,248,248)'}}>
                N004 : K0+123
              </div>
            </Card>
          </Col>
        </Row>
      </Col>
      <Col lg={6} md={24}>
        <Card title="日常巡检" bordered={false} bodyStyle={{
          padding: 0,
          height: 152,
        }}>
          <Inspection />
        </Card>
      </Col>
      <Col lg={12} md={24}>
        <Card title="廊内能耗分析" bordered={false} bodyStyle={{
          height: 152,
          padding: 0,
        }}>
          <EnergyAnalysis />
        </Card>
      </Col>
      <Col lg={6} md={24}>
        <Card title="本月告警统计" bordered={false} bodyStyle={{
          padding: 0,
          height: 152,
        }}>
          <Alarm />
        </Card>
      </Col>
    </Row>
  )
}

Dashboard.propTypes = {
  dashboard: PropTypes.object,
}

export default connect(({dashboard}) => ({dashboard}))(Dashboard)
