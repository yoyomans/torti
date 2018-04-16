<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="modal-header">
                        <slot name="header">
                            Add pet
                        </slot>
                    </div>

                    <div class="modal-body">
                        <slot name="body">
                                <form>
                                <div class="form-group">
                                    <label>Pets Name</label>
                                    <input type="text" class="form-control" name="petName" v-model="petName">
                                    <label>Pets Age</label>
                                    <input type="number" min="0" class="form-control" name="petAge" v-model="petAge">
                                    <input type="hidden" class="form-control" name="date" v-model="date">
                                </div>
                                <button type="submit" class="btn btn-warning btn-sm" @click="updateWeight">Update</button>
                            </form>
                        </slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                            <button class="btn btn-danger btn-sm" @click="hideWelcomeModal">
                                Cancel
                            </button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import moment from 'moment'
    import axios from 'axios'
    import { mapActions } from 'vuex'
    export default {
      data: function () {
        return {
          'petName': '',
          'date': moment().format('MMM Do YY'),
          'petAge': ''
        }
      },
      methods: {
        ...mapActions({
          hideWelcomeModal: 'hideWelcomeModal'
        }),
        updateWeight: function () {
          let self = this
          let myStorage = window.localStorage
          axios.post('http://localhost:3000/completeRegistration', {
            petName: self.petName,
            date: self.date,
            petAge: self.petAge,
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

<style>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 300px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }

    .modal-body {
        margin: 20px 0;
    }

    .modal-default-button {
        float: right;
    }

    /*
     * The following styles are auto-applied to elements with
     * transition="modal" when their visibility is toggled
     * by Vue.js.
     *
     * You can easily play with the modal transition by editing
     * these styles.
     */

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>