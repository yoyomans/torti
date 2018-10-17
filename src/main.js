// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import store from './store/index'
import VueSocketio from 'vue-socket.io'
import socketio from 'socket.io-client'
import Notifications from 'vue-notification'
import VueScrollTo from 'vue-scrollto'
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css' // vuesax styles
// import axios from 'axios'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

Vue.use(VueSocketio, socketio('http://torti.ddns.net:2000'))

Vue.use(Notifications)

Vue.use(VueScrollTo)

Vue.use(Vuesax)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
