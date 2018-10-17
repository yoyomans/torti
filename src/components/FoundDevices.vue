<template>
    <div>
        <div v-for="device in devices">
            <h1>{{ device.deviceName }}</h1>
            <p>Name of device: {{ device.alias }}</p>
            <p>Device model: {{ device.deviceModel }}</p>
            <button @click="toggleLight(device.alias)">Toggle {{ device.alias }}</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
      data: function () {
        return {
          devices: this.$store.state.devices
        }
      },
      methods: {
        toggleLight: function (deviceAlias) {
          axios.get('http://localhost:3000/toggleLight', {
            params: {
              alias: deviceAlias
            }
          })
              .then(function (response) {
                console.log(response)
              })
              .catch(function (error) {
                console.log(error)
              })
        }
      }
    }
</script>