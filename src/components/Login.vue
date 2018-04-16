<template>
  <div>

      <div class="container">
        <div class="loginContainer">
        <div class="loginForm">

          <h1><span class="fa fa-sign-in"></span> Login</h1>

          <!-- show any messages that come back with authentication -->

          <!-- LOGIN FORM -->
          <form action="localhost:3000/login" method="post">
            <div class="form-group">
              <label>Username</label>
              <input type="text" class="form-control" name="name" v-model="name">
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" name="password" v-model="password">
            </div>

            <button type="submit" class="btn btn-warning btn-lg" @click="login">Login</button>
          </form>

          <hr>

          <p>Need an account? <a @click="goToSignUp">Signup</a></p>
          <p>Or go <a href="/">home</a>.</p>
          </div>
      </div>
      </div>
  </div>
</template>

<script>
  import axios from 'axios'
//  import passwordHash from 'password-hash'

export default {
    data: function () {
      return {
        'password': '',
        'name': '',
        'displayError': false
      }
    },
    mounted: function () {
      let myStorage = window.localStorage
      myStorage.removeItem('token')
    },
    methods: {
      login: function () {
        let self = this
          //     let hashedPassword = passwordHash.generate(self.password)

        axios.post('http://localhost:3000/login', {
          name: self.name,
          password: self.password
        })
              .then(function (response) {
                console.log(response)
                let myStorage = window.localStorage
                myStorage.setItem('token', response.data.token)
                myStorage.setItem('userFirstLogin', response.data.user.firstLogin)
                myStorage.setItem('userId', response.data.user.id)
                self.$router.push({name: 'Home', params: { username: self.name }})
                self.$notify({group: 'app', title: 'Signed in', text: 'Welcome ' + self.name})
              })
              .catch(function (error) {
                console.log(error)
                self.$notify({group: 'auth', type: 'error', title: 'Denied', text: 'Wrong username or password, please try again!'})
              })

          // e.preventDefault()
      },
      goToSignUp: function () {
        let self = this
        self.$router.push({name: 'SignUp'})
      }
    }      // this.$router.push({name: 'Home', params: { username: this.username }})
}
</script scoped>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.loginForm {
  width: 300px;
  height: 400px;
  background-color: white;
  margin: 0 auto;
  padding: 20px;
  opacity: 0.9;
}
.errorMsg {
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.loginContainer {
    margin: 0 auto;
    padding: 10%;
}


</style>
