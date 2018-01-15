<template>
  <div class="wrapped">
    <button class="button" @click="test">Enter</button>
  </div>
</template>

<script>
export default {
  methods: {
    test: function () {
      console.log('in here!')
    }
  }
}
</script scoped>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.wrapper {
    text-align: center;
}

.button {
    position: absolute;
    top: 50%;
}
</style>
