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
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      'password': '',
      'username': ''
    }
  },
  methods: {
    login: function () {
      console.log('in here!', this.password, this.username)
      this.$router.push({name: 'Home', params: { username: this.username }})
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
</style>
