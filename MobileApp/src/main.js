// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import Toast from 'muse-ui-toast';
import router from '@/router/index.js'

import App from './App'
import MuseUI from 'muse-ui';
import 'jquery'
//---------------------引入外部js----------------------
import './assets/js/app.js'

import echarts from 'echarts'
Vue.prototype.$echarts = echarts
//---------------------引入外部js----------------------
import 'muse-ui/dist/muse-ui.css';
import './assets/css/material-icons.css'
import './assets/css/base.css'
//---------------------引入服务层----------------------
import { HumanResourcesService } from './services/HumanResourcesService'
Vue.prototype.$HRService = HumanResourcesService;

import { Config } from './services/Config'
Vue.prototype.$Config = Config;

import { CommandService } from './services/common.service'
Vue.prototype.$CommandService = CommandService;

//---------------------引入服务层----------------------


Vue.use(Toast);
Vue.use(MuseUI);
Vue.use(VueRouter)




FastClick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
