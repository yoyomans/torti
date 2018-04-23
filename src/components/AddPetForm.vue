<template>
    <div>
        <form>
            <input type="text" v-model="petsName"/> Name
            <input type="number" min="0" max="100" v-model="petsAge"> Age
        </form>
    </div>
</template>

<script>
    export default {
      data: function () {
        return {
          'petsAge': 0,
          'petsName': ''
        }
      }
    }
</script>