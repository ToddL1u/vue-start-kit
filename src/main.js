// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import store from './store'

import { sync } from 'vuex-router-sync'
sync(store, router)

import _ from 'lodash'
// import VueMask from 'v-mask'
// Vue.use(VueMask);
import VueCookie from 'vue-cookie'
Vue.use(VueCookie);

import ElementUI from 'element-ui'
import * as filters from './filters'

import axios from 'axios'
Vue.prototype.$http = axios

import * as Icon from 'vue-awesome'
Vue.component('icon', Icon)

import 'bootstrap/scss/bootstrap.scss'
import './assets/css/main.scss'
import 'element-ui/lib/theme-default/index.css'

// Vue.config.productionTip = false
import locale from 'element-ui/lib/locale/lang/zh-TW'
Vue.use(ElementUI, { locale })
// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.mixin({
  data: () => {},
  methods: {}
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
