import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import Home from '@/components/Home'
import axios from 'axios'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/home/:username',
      name: 'Home',
      component: Home,
      props: true,
      beforeEnter: (to, from, next) => {
        console.log('Entering this!!')
        let myStorgae = window.localStorage
        axios.get('http://torti.ddns.net:2000/secret', {headers: {
          'Authorization': 'JWT ' + myStorgae.getItem('token') // TODO store this token in lcoal store
        }
        })
         .then(function (response) {
           console.log(response)
           next()
         })
         .catch(function (error) {
           console.log('tes', error)
         })
      }
    }
  ]
})
