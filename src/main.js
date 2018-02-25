// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import store from './store/index'
import VueSocketio from 'vue-socket.io'
import socketio from 'socket.io-client'
// import axios from 'axios'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

Vue.use(VueSocketio, socketio('http://localhost:3000'))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
