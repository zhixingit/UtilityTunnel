import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Layout } from '../components'
import { classnames, config, menu } from '../utils'
import { Helmet } from 'react-helmet'
import '../themes/index.less'
import './app.less'
import NProgress from 'nprogress'
const { prefix } = config

const { Header, Bread, Footer, Sider, styles } = Layout
let lastHref

const App = ({ children, location, dispatch, app, loading }) => {
  const { user, siderFold, darkTheme, isNavbar, menuPopoverVisible, navOpenKeys } = app
  const href = window.location.href  //刷新当前页面,向指定的url提交数据

  if (lastHref !== href) {  //进度条插件，进度条显示
    NProgress.start()
    if (!loading.global) {
      NProgress.done()
      lastHref = href
    }
  }

  const headerProps = {
    menu,
    user,
    siderFold,
    location,
    isNavbar,
    menuPopoverVisible,
    navOpenKeys,
    switchMenuPopover () {  //切换菜单展开action
      dispatch({ type: 'app/switchMenuPopver' })
    },
    logout () {     //退出登录action
      dispatch({ type: 'app/logout' })
    },
    switchSider () {  //开关侧边栏action
      dispatch({ type: 'app/switchSider' })
    },
    changeOpenKeys (openKeys) {   //处理导航打开action
      dispatch({ type: 'app/handleNavOpenKeys', payload: { navOpenKeys: openKeys } })
    },
  }

  const siderProps = {
    menu,
    siderFold,
    darkTheme,
    location,
    navOpenKeys,
    changeTheme () {  //切换颜色主题
      dispatch({ type: 'app/switchTheme' })
    },
    changeOpenKeys (openKeys) {  //处理导航打开action
      localStorage.setItem(`${prefix}navOpenKeys`, JSON.stringify(openKeys))
      //发起一个action，需要调用dispatch 函数 type：描述action，在model外调用需要添加namespace；payload ：是需要传递的信息
      dispatch({ type: 'app/handleNavOpenKeys', payload: { navOpenKeys: openKeys } })
    },
  }

  const breadProps = {
    menu,
  }

  if (config.openPages && config.openPages.indexOf(location.pathname) > -1) { //indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置
    //console.log(config.openPages && config.openPages.indexOf(location.pathname)); 0
    //console.log(location.pathname); /login
    return <div>{children}</div>
  }

  const { iconFontJS, iconFontCSS, logo } = config

  return (
    <div>
      <Helmet>   {/*react 文件管理，类似<head>*/}
        <title>综合管廊管理系统</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href={logo} type="image/x-icon" />
        {iconFontJS && <script src={iconFontJS}></script>}
        {iconFontCSS && <link rel="stylesheet" href={iconFontCSS} />}
      </Helmet>
      <div className={classnames(styles.layout, { [styles.fold]: isNavbar ? false : siderFold }, { [styles.withnavbar]: isNavbar })}>
        {!isNavbar ? <aside className={classnames(styles.sider, { [styles.light]: !darkTheme })}>
          <Sider {...siderProps} />
        </aside> : ''}
        <div className={styles.main}>
          <Header {...headerProps} />
          <Bread {...breadProps} location={location} />
          <div className={styles.container}>
            <div className={styles.content}>
              {children}
            </div>
          </div>
          {/*<Footer />*/}
        </div>
      </div>
    </div>
  )
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  app: PropTypes.object,
  loading: PropTypes.object,
}

export default connect(({ app, loading }) => ({ app, loading }))(App)
