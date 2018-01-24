<template>
  <div>
    <div class="loginForm">
    <form>
      <div class="form-group">
        <label>Username</label>
        <input type="text" class="form-control" placeholder="Enter username" v-model="username">
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" placeholder="Password" v-model="password">
      </div>
      <button class="btn btn-primary" @click="login">Login</button>
    </form>
    <div class="errorMsg" v-if="displayError">
      <img src="../assets/error.gif" width="600" height="400"/>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import passwordHash from 'password-hash'

export default {
  data: function () {
    return {
      'password': '',
      'username': '',
      'displayError': false
    }
  },
  methods: {
    login: function () {
      let self = this
      let hashedPassword = passwordHash.generate(self.password)

      axios.get('http://torti.ddns.net:8000/login', {
        params: {
          username: this.username,
          password: hashedPassword
        }
      })
          .then(function (response) {
            console.log(response)
            if (response.status === 200) {
              self.$router.push({name: 'Home', params: { username: self.username }})
            }
          })
          .catch(function (error) {
            console.log('errored lol', error)
            self.displayError = true
            setTimeout(function () {
              self.displayError = false
            }, 5000)
          })

      // this.$router.push({name: 'Home', params: { username: this.username }})
    }
  }
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
