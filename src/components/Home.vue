<template>
    <div>
        <div class="test">
            {{ username }}
            <h1>HOME</h1>
        </div>
    </div>
</template>


<script>
  export default {
    props: ['username'],
    data: function () {
      return {
        'username': this.username
      }
    }
  }
</script>

<style scoped>
    .test {
        background-color: white;

    }

</style>