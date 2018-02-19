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
    created: function () {
//      let self = this
//      let myStorgae = window.localStorage
//      console.log(myStorgae.getItem('token'))
//      axios.get('http://localhost:3000/secret', {headers: {
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
    }
  }
</script>

<style scoped>

    .container {
        background-color: aliceblue;
    }

</style>