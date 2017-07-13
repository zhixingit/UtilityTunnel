import React from 'react'
import PropTypes from 'prop-types'
import { routerRedux } from 'dva/router'
import { Icon,Timeline,Row,Col,Select,Button,Tabs,Input,Table,Tag  } from 'antd'
import { connect } from 'dva'
import { color,fontSize} from '../../utils';
import Inspection from './inspection';
const Search = Input.Search
const TabPane = Tabs.TabPane

const Library = ({ location, dispatch, library, loading }) => {
  const operations = <Search placeholder="请输入查询内容" size="large" />;
  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name',render: (text, record) => <div>
      <div style={{textAlign:'left'}}>
        <Row gutter={24} style={{padding:'5px 0 0 0'}}>
          <Col lg={16} md={24}>
            <a href={record.detail}><font style={{fontSize:16,fontWeight:'bold'}}>{text}</font></a>
          </Col>
          <Col lg={8} md={24} style={{textAlign:'right'}}>
            上传时间：{record.uploadTime}
          </Col>
        </Row>
        <Row gutter={24} style={{padding:'10px 0 0 0'}}>
          <Col lg={8} md={24}>
            分类：{record.type}
          </Col>
          <Col lg={8} md={24}>
            作者：{record.author}
          </Col>
          <Col lg={8} md={24}>
            文档类型：{record.format}
          </Col>
        </Row>
        <div style={{padding:'10px 0 10px 0'}}>
          概述：为了有效预防各种原因引起地下管廊火灾事故过程中对生产造成伤害。保障职工生命安全，确保设备安全运行，维持正常的生产经营秩序。
          特制定本应急措施。
        </div>
      </div>
    </div>},
  ];

  const data = [
    { key: 1, name: 'GB 50289-98 城市工程管线综合规划规范',type:'建设规范',author:'王仁国',uploadTime:'2017年7月10日 10:00',format:'pdf',detail:'/pdf/城市工程管线综合规划规范.pdf'},
    { key: 2, name: '火灾应急方案',type:'建设规范',author:'张朝阳',uploadTime:'2017年7月10日 10:00',format:'pdf',detail:'/pdf/火灾应急方案.pdf' },
    { key: 3, name: 'CH4传感器用户手册',type:'建设规范',author:'陈川',uploadTime:'2017年7月10日 10:00',format:'pdf',detail:'/pdf/城市工程管线综合规划规范.pdf' },
    { key: 4, name: 'O2传感器用户手册',type:'建设规范',author:'李红霞',uploadTime:'2017年7月10日 10:00',format:'pdf',detail:'/pdf/城市工程管线综合规划规范.pdf' },
    { key: 5, name: '水灾应急方案',type:'建设规范',author:'张朝阳',uploadTime:'2017年7月10日 10:00',format:'pdf',detail:'/pdf/城市工程管线综合规划规范.pdf' },
    { key: 6, name: '地震应急方案',type:'建设规范',author:'张朝阳',uploadTime:'2017年7月10日 10:00',format:'pdf',detail:'/pdf/城市工程管线综合规划规范.pdf' },
    { key: 7, name: '综合管廊管理系统操作手册',type:'建设规范',author:'冯成涛',uploadTime:'2017年7月10日 10:00',format:'pdf',detail:'/pdf/城市工程管线综合规划规范.pdf' },
    { key: 8, name: '火灾应急方案',type:'建设规范',author:'张朝阳',uploadTime:'2017年7月10日 10:00',format:'pdf',detail:'/pdf/火灾应急方案.pdf' },
    { key: 9, name: 'CH4传感器用户手册',type:'建设规范',author:'陈川',uploadTime:'2017年7月10日 10:00',format:'pdf',detail:'/pdf/城市工程管线综合规划规范.pdf' },
    { key: 10, name: '综合管廊管理系统操作手册',type:'建设规范',author:'冯成涛',uploadTime:'2017年7月10日 10:00',format:'pdf',detail:'/pdf/城市工程管线综合规划规范.pdf' },
    { key: 11, name: '火灾应急方案',type:'建设规范',author:'张朝阳',uploadTime:'2017年7月10日 10:00',format:'pdf',detail:'/pdf/城市工程管线综合规划规范.pdf' },
    { key: 12, name: 'CH4传感器用户手册',type:'建设规范',author:'陈川',uploadTime:'2017年7月10日 10:00',format:'pdf',detail:'/pdf/城市工程管线综合规划规范.pdf' },
  ];
  const latestData = [
    { key: 1, name: '火灾应急方案',type:'应急方案',author:'张朝阳',uploadTime:'2017年7月10日 10:00',format:'pdf',detail:'/pdf/火灾应急方案.pdf' },
    { key: 2, name: '水灾应急方案',type:'应急方案',author:'李四',uploadTime:'2017年7月10日 10:00',format:'pdf',detail:'/pdf/城市工程管线综合规划规范.pdf' },
    { key: 3, name: 'CH4传感器用户手册',type:'用户手册',author:'陈川',uploadTime:'2017年7月10日 10:00',format:'pdf',detail:'/pdf/城市工程管线综合规划规范.pdf' },
    { key: 4, name: 'O2传感器用户手册',type:'用户手册',author:'李红霞',uploadTime:'2017年7月10日 10:00',format:'pdf',detail:'/pdf/城市工程管线综合规划规范.pdf' },
    { key: 5, name: '综合管廊管理系统操作手册',type:'用户手册',author:'冯成涛',uploadTime:'2017年7月10日 10:00',format:'pdf',detail:'/pdf/城市工程管线综合规划规范.pdf' },
  ];
  return (
    <div className="content-inner">
      <Row gutter={24}>
        <Col lg={19} md={19} style={{height:710}}>
          <Tabs type="card" tabBarExtraContent={operations}>
            <TabPane tab="最新上传" key="1">
              <Table
                columns={columns}
                dataSource={latestData}
                showHeader={false}
                pagination ={
                  {pageSize:5}
                }/>
            </TabPane>
            <TabPane tab="全部" key="2">
              <Table
                columns={columns}
                dataSource={data}
                showHeader={false}
                pagination ={
                  {pageSize:5}
                }/>
            </TabPane>
          </Tabs>
        </Col>
        <Col lg={5} md={5}>
          <div>
            <div style={{fontSize:16,paddingBottom:5,borderBottom:1,borderBottomStyle:'solid',borderColor:'#e6e6e6'}}>关键字</div>
            <div style={{height:370}}>
              <div style={{padding:5}}><Button style={{marginRight:10}}>全部</Button><Button style={{marginRight:10}}>管廊</Button><Button>BIM</Button></div>
              <div style={{padding:5}}><Button style={{marginRight:10}}>消防</Button><Button>通风</Button></div>
              <div style={{padding:5}}><Button style={{marginRight:10}}>供电</Button><Button>照明</Button></div>
              <div style={{padding:5}}><Button style={{marginRight:10}}>排水</Button><Button>安防</Button></div>
              <div style={{padding:5}}><Button style={{marginRight:10}}>环境监测</Button><Button>运维手册</Button></div>
              <div style={{padding:5}}><Button style={{marginRight:10}}>应急案例</Button><Button>安装设备操作手册</Button></div>
              <div style={{padding:5}}><Button style={{marginRight:10}}>传感器布设</Button><Button>国标</Button></div>
              <div style={{padding:5}}><Button style={{marginRight:10}}>GIS</Button><Button>告警</Button></div>
              <div style={{padding:5}}><Button style={{marginRight:10}}>工单管理</Button><Button>其它</Button></div>
            </div>
          </div>
          <div>
            <div style={{fontSize:16,paddingBottom:5,borderBottom:1,borderBottomStyle:'solid',borderColor:'#e6e6e6'}}>文档分布情况</div>
            <Inspection />
          </div>
        </Col>
      </Row>
    </div>
  )
}

Library.propTypes = {
  library: PropTypes.object,
}

export default Library
