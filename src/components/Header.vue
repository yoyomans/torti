<template>
    <div>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">Torti <span>a tortoise monitor site</span></a>
                </div>
                <ul class="nav navbar-nav">
                    <li class="active"><a href="#">Home</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#"><span class="glyphicon glyphicon-user"></span> Welcome {{ username }}</a></li>
                    <li><a href="#" @click="logout">Logout</a></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
      props: ['username'],
      data: function () {
        return {
        }
      },
      methods: {
        logout: function () {
          let myStorage = window.localStorage
          myStorage.removeItem('token')
          this.$router.push({name: 'Login'})
        }
      }
    }
</script>