<template>
    <div>
        <div class="videoPlayer">
            <h3>Tort Cam 1</h3>
            <div v-if="displayStream">
                <img :src = "getStreamURL" width="600" height="400"/>
            </div>
            <div v-if="!displayStream">
                <h4>Toby Cam isn't running right now</h4>
                <img src="../assets/tobytort.jpg" width="600" height="400"/>
            </div>
        </div>
        <div class="controlButtons">
            <button class="btn btn-primary" @click="turnCameraOn">Turn Camera On</button>
            <button class="btn btn-danger" @click="turnCameraOff">Turn Camera Off</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
      data: function () {
        return {
          'displayStream': false,
          'tortiURL': 'http://torti.ddns.net',
          'streamURL': ''
        }
      },
      mounted: function () {
        let self = this

        axios.get('https://api.ipify.org/?format=json')
            .then(function (response) {
              console.log(response.data.ip)
              self.tortiURL = 'http://' + response.data.ip
            })
            .catch(function (error) {
              console.log(error)
            })
      },
      computed: {
        getStreamURL: function () {
          let self = this

          self.streamURL = self.tortiURL + ':3000/?action=stream'

          return self.streamURL
        }
      },
      methods: {
        turnCameraOff: function () {
          var self = this
          axios.get(self.tortiURL + ':8000/cameraOff')
                  .then(function (response) {
                    console.log(response)
                    self.displayStream = false
                  })
                  .catch(function (error) {
                    console.log(error)
                  })
        },
        turnCameraOn: function () {
          var self = this
          axios.get(self.tortiURL + ':8000/camera')
                .then(function (response) {
                  console.log(response)
                  setTimeout(function () {
                    self.displayStream = true
                  }, 500)
                })
                .catch(function (error) {
                  console.log(error)
                })
        }
      }
    }
</script>

<style scoped>
    .videoPlayer {
        padding-bottom: 50px;
    }
</style>