<template>
    <div>
        <vs-topbar style="justify-content: flex-start;">
            <vs-button vs-type="dark-flat" vs-icon="true"><i class="material-icons" @click="active=!active">menu</i></vs-button>
            <h3>Torti <span>a tortoise monitor site</span></h3>
            <vs-button vs-type="dark-flat" vs-icon="person" style="margin-left: auto;">Welcome {{ username }}</vs-button>
        </vs-topbar>
        <!--<nav class="navbar navbar-default">-->
            <!--<div class="container-fluid">-->
                <!--<div class="navbar-header">-->
                    <!--<a class="navbar-brand" href="#">Torti <span>a tortoise monitor site</span></a>-->
                <!--</div>-->
                <!--<ul class="nav navbar-nav">-->
                    <!--<li class="active"><a href="#">Home</a></li>-->
                <!--</ul>-->
                <!--<ul class="nav navbar-nav navbar-right">-->
                    <!--<li><a href="#"><span class="glyphicon glyphicon-user"></span> Welcome {{ username }}</a></li>-->
                    <!--<li><a href="#" @click="logout">Logout</a></li>-->
                <!--</ul>-->
            <!--</div>-->
        <!--</nav>-->
        <div id="parentx">
            <vs-sidebar :vs-active.sync="active">

                <vs-sidebar-item @click="actives=1" :vs-active="actives==1" vs-icon="question_answer">
                    Dashboard
                </vs-sidebar-item>
                <vs-sidebar-item @click="actives=2" :vs-active="actives==2" vs-icon="gavel">
                    Web cam
                </vs-sidebar-item>
                <vs-sidebar-item @click="actives=3" :vs-active="actives==3" vs-icon="verified_user">
                    Setings
                </vs-sidebar-item>
                <vs-sidebar-item @click="actives=4" :vs-active="actives==4" vs-icon="account_box">
                    Event log
                </vs-sidebar-item>
                <vs-sidebar-item @click="actives=5" :vs-active="actives==5" vs-icon="card_giftcard">
                    Donate
                </vs-sidebar-item>

            </vs-sidebar>
        </div>
    </div>
</template>

<script>
    export default {
      props: ['username'],
      data: function () {
        return {
          active: false,
          actives: 1
        }
      },
      methods: {
        logout: function () {
          let myStorage = window.localStorage
          myStorage.removeItem('token')
          myStorage.removeItem('userFirstLogin')
          myStorage.removeItem('userId')
          this.$router.push({name: 'Login'})
        }
      }
    }
</script>

<style scoped>
    .userLogo {
        float: right !important;
        position: relative;
    }
</style>