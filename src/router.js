import React from 'react'
import PropTypes from 'prop-types'
import { Router } from 'dva/router'
import App from './routes/app'

const registerModel = (app, model) => {
  if (!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
    app.model(model)
  }
}

const Routers = function ({ history, app }) {
  const routes = [
    {
      path: '/',
      component: App,
      getIndexRoute (nextState, cb) {
        require.ensure([], require => {
          registerModel(app, require('./models/dashboard'))
          cb(null, { component: require('./routes/dashboard/') })
        }, 'dashboard')
      },
      childRoutes: [
        {
          path: 'dashboard',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/dashboard'))
              cb(null, require('./routes/dashboard/'))
            }, 'dashboard')
          },
        },
        {
          path: 'equipment/overview',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/equipment/overview'));
              cb(null, require('./routes/equipment/overview/'))
            }, 'equipment-overview')
          },
        },
        {
          path: 'equipment/assets',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/equipment/assets'))
              cb(null, require('./routes/equipment/assets/'))
            }, 'equipment-assets')
          },
        }, {
          path: 'equipment/assets/:id',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/equipment/assets/detail'))
              cb(null, require('./routes/equipment/assets/detail/'))
            }, 'equipment-assets-detail')
          },
        },
        {
          path: 'equipment/stock/access',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/equipment/stock/access/'))
            }, 'equipment-stock-access')
          },
        },
        {
          path: 'login',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/login'))
              cb(null, require('./routes/login/'))
            }, 'login')
          },
        }, {
          path: 'monitor/subsystem/fire',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/monitor/fire'))
              cb(null, require('./routes/monitor/subsystem/fire/'))
            }, 'monitor-subsystem-fire')
          },
        },{
          path: 'monitor/subsystem/fire/equipmentManage',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/monitor/fire/equipment'))
              cb(null, require('./routes/monitor/subsystem/fire/equipment'))
            }, 'monitor-subsystem-fire-equipment')
          },
        },{
          path: 'monitor/subsystem/ventilation',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/monitor/ventilation'))
              cb(null, require('./routes/monitor/subsystem/ventilation/'))
            }, 'monitor-subsystem-ventilation')
          },
        },{
          path: 'monitor/subsystem/ventilation/equipmentManage',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/monitor/ventilation/equipment'))
              cb(null, require('./routes/monitor/subsystem/ventilation/equipment'))
            }, 'monitor-subsystem-ventilation-equipment')
          },
        },{
          path: 'monitor/subsystem/electricity',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/monitor/electricity'))
              cb(null, require('./routes/monitor/subsystem/electricity/'))
            }, 'monitor-subsystem-electricity')
          },
        },{
          path: 'monitor/subsystem/electricity/equipmentManage',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/monitor/electricity/equipment'))
              cb(null, require('./routes/monitor/subsystem/electricity/equipment'))
            }, 'monitor-subsystem-electricity-equipment')
          },
        },{
          path: 'monitor/subsystem/illumination',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/monitor/illumination'))
              cb(null, require('./routes/monitor/subsystem/illumination/'))
            }, 'monitor-subsystem-illumination')
          },
        },{
          path: 'monitor/subsystem/illumination/equipmentManage',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/monitor/illumination/equipment'))
              cb(null, require('./routes/monitor/subsystem/illumination/equipment'))
            }, 'monitor-subsystem-illumination-equipment')
          },
        },{
          path: 'monitor/subsystem/drain',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/monitor/drain'))
              cb(null, require('./routes/monitor/subsystem/drain/'))
            }, 'monitor-subsystem-drain')
          },
        },{
          path: 'monitor/subsystem/drain/equipmentManage',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/monitor/drain/equipment'))
              cb(null, require('./routes/monitor/subsystem/drain/equipment'))
            }, 'monitor-subsystem-drain-equipment')
          },
        },{
          path: 'monitor/subsystem/security',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/monitor/security'))
              cb(null, require('./routes/monitor/subsystem/security/'))
            }, 'monitor-subsystem-security')
          },
        },{
          path: 'monitor/subsystem/security/equipmentManage',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/monitor/security/equipment'))
              cb(null, require('./routes/monitor/subsystem/security/equipment'))
            }, 'monitor-subsystem-security-equipment')
          },
        },{
          path: 'monitor/environment',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/monitor/environment'))
              cb(null, require('./routes/monitor/environment'))
            }, 'monitor-environment')
          },
        },{
          path: 'monitor/environment/:id',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/monitor/environment/detail'))
              cb(null, require('./routes/monitor/environment/detail/'))
            }, 'monitor-environment-detail')
          },
        },{
          path: 'BIM',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              // registerModel(app, require('./models/manage/manageOverview'))
              cb(null, require('./routes/BIM/'))
            }, 'BIM')
          },
        },{
          path: 'manage/overview',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/manage/manageOverview'))
              cb(null, require('./routes/manage/overview/'))
            }, 'manage-overview')
          },
        },{
          path: 'manage/workForm',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/manage/workForm'))
              cb(null, require('./routes/manage/workForm/'))
            }, 'manage-workForm')
          },
        },  {
          path: 'manage/workForm/:id',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/manage/workForm/detail'))
              cb(null, require('./routes/manage/workForm/detail/'))
            }, 'workForm-detail')
          },
        },
        {
          path: 'manage/GIS',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app,require('./models/manage/GIS'))
              cb(null, require('./routes/manage/GIS/'))
            }, 'equipment-GIS')
          },
        },{
          path: 'emergency',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/emergency'))
              cb(null, require('./routes/emergency/'))
            }, 'emergency')
          },
        },
        {
          path: 'emergency/:id',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/emergency/detail'))
              cb(null, require('./routes/emergency/detail/'))
            }, 'emergency-detail')
          },
        },
        {
          path: 'library',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              // registerModel(app, require('./models/emergency'))
              cb(null, require('./routes/library/'))
            }, 'library')
          },
        },
        {
          path: 'reportForm',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              // registerModel(app, require('./models/emergency'))
              cb(null, require('./routes/reportForm/'))
            }, 'reportForm')
          },
        },
        {
          path: '*',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/error/'))
            }, 'error')
          },
        },
      ],
    },
  ]

  return <Router history={history} routes={routes} />
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Routers
