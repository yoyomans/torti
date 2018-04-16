<template>
  <div id="app">
    <notifications group="auth" position="top center"/>
    <notifications group="app" position="bottom center"/>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {

}

body::after {
  background: url(./assets/tort.jpg) no-repeat center center fixed;
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

</style>
