<template>
    <div class="dashboard">
        <vue-circle
                :progress="currentTemp"
                :size="100"
                :reverse="true"
                line-cap="round"
                :fill="fill"
                empty-fill="rgba(0, 0, 0, .1)"
                :animation-start-value="0.0"
                :start-angle="0"
                insert-mode="append"
                :thickness="5"
                ref="myUniqueID"
                :show-percent="false">
            <p style="font-size: 20pt;"><b>{{ currentTemp }}C</b></p>
        </vue-circle>
        <hr>
        <button type="button" class="btn btn-default btn-sm" @click="syncTpLink">Sync TP Link Device</button>
        <login-tp-link v-if="loginTP"></login-tp-link>
        <devices v-if="displayDevices"></devices>
        <button type="button" class="btn btn-default btn-sm" @click="showAddPetDiv">
            <span class="glyphicon glyphicon-plus"></span> Add Pet
        </button>
        <add-pet v-if="showAddPet"></add-pet>
        <pet-info v-if="showPet"></pet-info>
        <!--<atom-spinner v-if="!loadedGraph" :size="60" :color="'#ff1d5e'"></atom-spinner>-->
        <!--<line-graph v-if="loadedGraph" :options="{responsive: false, maintainAspectRatio: false}" :width="400" :height="200"></line-graph>-->
        <!--<button class="btn btn-primary" id="show-modal" @click="showHide">Update weight</button>-->
        <!--<hr>-->
        <!--<modal  v-if="modalState"></modal>-->
        <welcome-modal v-if="hideWelcomeModal"></welcome-modal>
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
    import WelcomeModal from './WelcomeModal.vue'
    import { mapGetters, mapActions } from 'vuex'
    import { AtomSpinner } from 'epic-spinners'
    import PetInfo from './PetInfo.vue'
    import AddPet from './AddPetForm.vue'
    import LoginTpLink from './LoginTPLink.vue'
    import Devices from './FoundDevices.vue'
//    import tplink from 'tplink-cloud-api'

    export default {
      components: {
        VueCircle,
        LineGraph,
        Modal,
        AtomSpinner,
        WelcomeModal,
        PetInfo,
        AddPet,
        LoginTpLink,
        Devices
      },
      data: function () {
        return {
          'displayStream': false,
          'tortiURL': 'http://torti.ddns.net',
          'streamURL': '',
          'currentTemp': 0,
          'fill': {
            'gradient': ['green']
          },
          showModal: false,
          showPet: true,
          showAddPet: false
        }
      },
      mounted: function () {
        this.$store.dispatch('updateChartData')
        this.$store.dispatch('hideWelcomeModal')
        this.$socket.emit('getTemp')
      },
      computed: {
        ...mapGetters({
          modalState: 'modalState',
          loadedGraph: 'loadedGraph',
          loginTP: 'loginTP',
          displayDevices: 'displayDevices',
          hideWelcomeModal: 'hideWelcomeModal'

        }),
        getStreamURL: function () {
          let self = this

          self.streamURL = self.tortiURL + ':3000/?action=stream'

          return self.streamURL
        }
      },
      sockets: {
        gotTemp: function (data) {
          // console.log('this was fired from the server', data)
          let self = this
          self.currentTemp = parseFloat(data.sensor1.temp)
          self.$refs.myUniqueID.updateProgress(self.currentTemp)
          // self.$notify({group: 'app', title: 'Important message', text: data.sensor1.temp})
        }
      },
      methods: {
        ...mapActions({
          showHide: 'showHide',
          hideWelcomeModal: 'hideWelcomeModal',
          loginTP: 'loginTP',
          displayDevices: 'displayDevices'
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
          axios.get('http://torti.ddns.net:2000/camera')
                .then(function (response) {
                  console.log(response)
                  setTimeout(function () {
                    self.displayStream = true
                  }, 500)
                })
                .catch(function (error) {
                  console.log(error)
                })
        },
        showAddPetDiv: function () {
          var self = this
          self.showAddPet = !self.showAddPet
        },
        syncTpLink: function () {
          this.$store.dispatch('loginTP')
        }
      }
    }
</script>

<style scoped>
    .videoPlayer {
        padding-bottom: 50px;
    }
    .dashboard {
        padding-top: 20px;
    }
</style>