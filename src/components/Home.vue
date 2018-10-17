<template>
    <div class="container">
        <div class="test">
            <vue-header :username="username"></vue-header>
            <vue-video-stream></vue-video-stream>
        </div>
    </div>
</template>


<script>
  import VueHeader from './Header.vue'
  import VideoStream from './VideoStream.vue'

  export default {
    props: ['username'],
    components: {
      vueHeader: VueHeader,
      vueVideoStream: VideoStream
    },
    data: function () {
      return {
      }
    },
    mounted: function () {
//      let self = this
//      let myStorgae = window.localStorage
//      console.log(myStorgae.getItem('token'))
//      axios.get('http://torti.ddns.net:2000/secret', {headers: {
//        'Authorization': 'JWT ' + myStorgae.getItem('token') // TODO store this token in lcoal store
//      }
//      })
//          .then(function (response) {
//            console.log(response)
//          })
//          .catch(function (error) {
//            console.log('tes', error)
//            self.$router.push({name: 'Login'})
//          })
    },
    sockets: {
      mist: function () {
        console.log('this was fired from the server')
        let self = this
        self.$notify({group: 'app', title: 'Important message', text: 'event from server'})
      }
    }
  }
</script>

<style scoped>

    .container {
        background-color: aliceblue;
    }

</style>