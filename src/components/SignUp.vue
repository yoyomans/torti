<template>
  <div>

      <div class="container">

        <div class="loginForm">

          <h1><span class="fa fa-sign-in"></span> Sign up</h1>

          <!-- show any messages that come back with authentication -->
          <!-- SIGNUP  FORM -->
          <form action="localhost:3000/signup" method="post">
            <div class="form-group">
              <label>Username</label>
              <input type="text" class="form-control" name="name" v-model="name">
            </div>

            <div class="form-group">
              <label>Email Address</label>
              <input type="email" class="form-control" name="email" v-model="email">
            </div>

            <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" name="password" v-model="password">
            </div>

            <button type="submit" class="btn btn-warning btn-lg" @click="signup">Submit</button>
          </form>

          <hr>

          <!--<p>Need an account? <a href="/signup">Signup</a></p>-->
          <!--<p>Or go <a href="/">home</a>.</p>-->
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
        'email': '',
        'displayError': false
      }
    },
    methods: {
      signup: function () {
        let self = this
          //     let hashedPassword = passwordHash.generate(self.password)

        axios.post('http://localhost:3000/signup', {
          name: self.name,
          password: self.password,
          email: self.email
        })
              .then(function (response) {
                console.log(response)
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
                      console.log('firs login', myStorage.getItem('userFirstLogin'))
                      console.log('user id', myStorage.getItem('userId'))
                      self.$notify({group: 'app', title: 'Signed in', text: 'Welcome ' + self.name})
                    })
                    .catch(function (error) {
                      console.log(error)
                      self.$notify({group: 'auth', type: 'error', title: 'Denied', text: 'Wrong username or password, please try again!'})
                    })
                // self.$router.push({name: 'Home', params: { username: self.name }})
              })
              .catch(function (error) {
                console.log(error)
              })

          // e.preventDefault()
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
}
.errorMsg {
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}


</style>
