<template>
    <div>
        <hr>
        <h4>Pet Name</h4>
        <atom-spinner v-if="!loadedGraph" :size="60" :color="'#ff1d5e'"></atom-spinner>
        <line-graph v-if="loadedGraph" :options="{responsive: false, maintainAspectRatio: false}" :width="400" :height="200"></line-graph>
        <button class="btn btn-primary" id="show-modal" @click="showHide">Update weight</button>
        <hr>
        <modal  v-if="modalState"></modal>
    </div>
</template>

<script>
    import axios from 'axios'
    import VueCircle from 'vue2-circle-progress'
    import LineGraph from './LineGraph.vue'
    import Modal from './VueModal.vue'
    import WelcomeModal from './WelcomeModal.vue'
    import { mapGetters, mapActions } from 'vuex'
    import { AtomSpinner } from 'epic-spinners'
    //    import tplink from 'tplink-cloud-api'

    export default {
      components: {
        VueCircle,
        LineGraph,
        Modal,
        AtomSpinner,
        WelcomeModal
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
        this.$store.dispatch('updateChartData')
      },
      computed: {
        ...mapGetters({
          modalState: 'modalState',
          loadedGraph: 'loadedGraph'
        }),
        getStreamURL: function () {
          let self = this
          self.streamURL = self.tortiURL + ':3000/?action=stream'

          return self.streamURL
        }
      },
      methods: {
        ...mapActions({
          showHide: 'showHide',
          hideWelcomeModal: 'hideWelcomeModal'
        }),
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
          axios.get('http://localhost:3000/camera')
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