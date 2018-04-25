<template>
    <div>
        <form>
            <div class="form-group">
                <label>Pets Name</label>
                <input type="text" class="form-control" name="petName" v-model="petsName">
                <label>Pets Age</label>
                <input type="number" min="0" class="form-control" name="petAge" v-model="petsAge">
                <input type="hidden" class="form-control" name="date" v-model="date">
            </div>
            <button type="submit" class="btn btn-success btn-sm" @click="addPetDetails">Add Pet</button>
        </form>
    </div>
</template>

<script>
    import moment from 'moment'
    import axios from 'axios'
//    import { mapActions } from 'vuex'

    export default {
      data: function () {
        return {
          'petsAge': 0,
          'petsName': '',
          'date': moment().format('MMM Do YY')
        }
      },
      methods: {
        addPetDetails () {
          console.log('adding pet')
          let self = this
          let myStorage = window.localStorage
          axios.post('http://localhost:3000/addPetDetails', {
            petName: self.petsName,
            date: self.date,
            petAge: self.petsAge,
            ownerId: myStorage.getItem('userId')
          })
                  .then(function (response) {
                    console.log(response)
                    console.log('does this work')
                  })
                    .catch(function (error) {
                      console.log(error)
                    })
        }
      }
    }
</script>