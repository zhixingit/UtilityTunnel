import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon, Popover,Input,Badge,Button,Modal  } from 'antd'
import styles from './Header.less'
import Menus from './Menu'

const SubMenu = Menu.SubMenu;
const Search = Input.Search;

const Header = ({ user, logout, switchSider, siderFold, isNavbar, menuPopoverVisible, location, switchMenuPopover, navOpenKeys, changeOpenKeys, menu }) => {
  let handleClickMenu = e => e.key === 'logout' && logout()
  const menusProps = {
    menu,
    siderFold: false,
    darkTheme: false,
    isNavbar,
    handleClickNavMenu: switchMenuPopover,
    location,
    navOpenKeys,
    changeOpenKeys,
  }
  const formContent = (
    <div>
      <div style={{marginBottom:10,borderBottom:2,borderColor:'#7f7f7f'}}>
        <p><Badge status="error" />2017-06-20 15:35</p>
        <p style={{marginLeft:16,color:'#00a4e7',cursor:'pointer' }} onClick={success}>编号540000199202231840工单状态更新为:已完成</p>
      </div>
      <div style={{marginBottom:10,borderBottom:2,borderColor:'#7f7f7f'}}>
        <p><Badge status="error" />2017-06-20 15:35</p>
        <p style={{marginLeft:16,color:'#00a4e7',cursor:'pointer'}} onClick={success}>编号540000199202231840工单状态更新为:进行中</p>
      </div>
    </div>
  );
  const alarmContent = (
    <div>
      <div style={{marginBottom:10,borderBottom:2,borderColor:'#7f7f7f'}}>
        <p><Badge status="error" />2017-06-20 15:35</p>
        <p style={{marginLeft:16,color:'#00a4e7',cursor:'pointer'}}>编号540000199202231840水位传感器超过预警值</p>
      </div>
      <div style={{marginBottom:10,borderBottom:2,borderColor:'#7f7f7f'}}>
        <p><Badge status="error" />2017-07-02 12:39</p>
        <p style={{marginLeft:16,color:'#00a4e7',cursor:'pointer'}}>编号540000199202231840CH4传感器超过预警值</p>
      </div>
      <div style={{marginBottom:10,borderBottom:2,borderColor:'#7f7f7f'}}>
        <p><Badge status="error" />2017-07-05 08:41</p>
        <p style={{marginLeft:16,color:'#00a4e7',cursor:'pointer'}}>编号540000199202231840水位传感器超过预警值</p>
      </div>
    </div>
  );
  const formContentDetail = (
    <div>
      <div style={{marginBottom:10,borderBottom:2,borderColor:'#7f7f7f'}}>
        <p style={{marginBottom:10}}>工单类型：故障单</p>
        <p style={{marginBottom:10}}>工单内容：检查并解决A区2号舱排水泵故障</p>
        <p style={{marginBottom:10}}>巡检人：张三</p>
        <p style={{marginBottom:10}}>工单状态：已完成</p>
      </div>
    </div>
  );
  function success() {
    Modal.success({
      title: '编号540000199202231840',
      content:formContentDetail,
    });
  }
  return (
    <div className={styles.header}>
      {isNavbar
        ? <Popover style={{ display:'flex' }} placement="bottomLeft" onVisibleChange={switchMenuPopover} visible={menuPopoverVisible} overlayClassName={styles.popovermenu} trigger="click" content={<Menus {...menusProps} />}>
          <div className={styles.button}>
            <Icon type="bars" />
          </div>
          <div style={{paddingLeft:15 }}>
            <Search
              placeholder="请输入搜索内容"
              className={styles.input} style={{ paddingTop:10,paddingBottom:10, }}
              onSearch={value => console.log(value)}
            />
          </div>
          </Popover>
        : <div style={{ display:'flex' }}>
            <div className={styles.button} onClick={switchSider}>
              <Icon type={siderFold ? 'menu-unfold' : 'menu-fold'} />
            </div>
            <div style={{paddingLeft:15 }}>
              <Search
                placeholder="请输入搜索内容"
                className={styles.input} style={{ paddingTop:10,paddingBottom:10, }}
                onSearch={value => console.log(value)}
              />
            </div>
      </div>
      }
      <div className={styles.rightWarpper}>

        <div className={styles.button}>
          <Popover content={formContent} title="工单状态更新">
            <Badge className={styles.badgeCount} count={2} showZero>
              <Icon type="file" />
            </Badge>
          </Popover>
        </div>
        <div className={styles.button} >
          <Popover content={alarmContent} title="告警消息通知">
            <Badge className={styles.badgeCount} count={3} showZero>
                <Icon type="bell" />
            </Badge>
          </Popover>
        </div>
        <div className={styles.button}>
          <Icon type="setting" />
        </div>
        <Menu style={{ background:'#54cbfc',color: 'white'}} mode="horizontal" onClick={handleClickMenu}>
          <SubMenu style={{ float: 'right'}} title={< span > <Icon type="user" />{user.username} </span>}
          >
            <Menu.Item key="logout">
              退出登录
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </div>
  )
}

Header.propTypes = {
  menu: PropTypes.array,
  user: PropTypes.object,
  logout: PropTypes.func,
  switchSider: PropTypes.func,
  siderFold: PropTypes.bool,
  isNavbar: PropTypes.bool,
  menuPopoverVisible: PropTypes.bool,
  location: PropTypes.object,
  switchMenuPopover: PropTypes.func,
  navOpenKeys: PropTypes.array,
  changeOpenKeys: PropTypes.func,
}

export default Header
