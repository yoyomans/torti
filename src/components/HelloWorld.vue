<template>
  <div class="wrapped">
    <button class="button">Enter</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
