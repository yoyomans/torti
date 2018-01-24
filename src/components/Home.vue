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
    }
  }
</script>

<style scoped>

    .container {
        background-color: aliceblue;
    }

</style>