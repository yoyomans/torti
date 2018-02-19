<template>
    <div>
        <vue-circle
                :progress="32"
                :size="100"
                :reverse="true"
                line-cap="round"
                :fill="fill"
                empty-fill="rgba(0, 0, 0, .1)"
                :animation-start-value="0.0"
                :start-angle="0"
                insert-mode="append"
                :thickness="5"
                :show-percent="false">
            <p style="font-size: 20pt;"><b>32c</b></p>
        </vue-circle>
        <line-graph :options="{responsive: false, maintainAspectRatio: false}" :width="400" :height="200"></line-graph>
        <button class="btn btn-primary" id="show-modal" @click="showModal = true">Update weight</button>
        <modal  v-if="showModal" @close="showModal = false"></modal>
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
            <!--<button class="btn btn-success" @click="turnHeatLampOn">Turn Heat Lamp On</button>-->
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import VueCircle from 'vue2-circle-progress'
    import LineGraph from './LineGraph.vue'
    import Modal from './VueModal.vue'
//    import tplink from 'tplink-cloud-api'

    export default {
      components: {
        VueCircle,
        LineGraph,
        Modal
      },
      data: function () {
        return {
          'displayStream': false,
          'tortiURL': 'http://torti.ddns.net',
          'streamURL': '',
          'fill': {
            'gradient': ['green']
          },
          showModal: false
        }
      },
      mounted: function () {
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