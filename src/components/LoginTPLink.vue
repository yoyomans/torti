<template>
    <div>

        <div class="container">
            <div class="loginContainer">
                <div class="loginForm">

                    <h1><span class="fa fa-sign-in"></span> Login to sync TP Link Smart Device</h1>

                    <!-- show any messages that come back with authentication -->

                    <!-- LOGIN FORM -->
                    <form action="localhost:3000/loginTpLink" method="post">
                        <div class="form-group">
                            <label>Email</label>
                            <input type="text" class="form-control" name="email" v-model="email">
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" name="password" v-model="password">
                        </div>

                        <button type="submit" class="btn btn-warning btn-lg" @click="login">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
      data: function () {
        return {
          'password': '',
          'email': ''
        }
      },
      methods: {
        login: function () {
          let self = this
          //     let hashedPassword = passwordHash.generate(self.password)
          let myStorage = window.localStorage
          console.log(myStorage.getItem('userId'))
          axios.post('http://localhost:3000/loginTpLink', {
            email: self.email,
            password: self.password,
            ownerId: myStorage.getItem('userId')
          })
              .then(function (response) {
                console.log('response back from login! ', response)
                self.$store.state.devices = response.data
                self.$store.dispatch('loginTP')
                self.$store.dispatch('displayDevices')
              })
              .catch(function (error) {
                console.log(error)
                self.$notify({
                  group: 'auth',
                  type: 'error',
                  title: 'Denied',
                  text: 'Wrong email or password, please try again!'
                })
              })

                // e.preventDefault()
        }
      }
    }
</script>