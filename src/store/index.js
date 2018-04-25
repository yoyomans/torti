import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let myStorage = window.localStorage

const state = {
  showModal: false,
  hideWelcomeModal: myStorage.getItem('userFirstLogin'),
  chartData: {
    labels: [],
    datasets: [{'label': '', 'backgroundColor': '', 'data': []}]
  },
  graphLoaded: false,
  petsData: {}
}

const mutations = {
  showHide (state) {
    state.showModal = !state.showModal
  },
  hideWelcomeModal (state) {
    state.hideWelcomeModal = !state.hideWelcomeModal
  },
  getChartData (state) {
    console.log('GETTING CHART DATA')
    axios.get('http://localhost:3000/chartData')
        .then(function (response) {
          console.log(response.data.labels.length)
          state.chartData.labels = response.data.labels
          state.chartData.datasets[0].label = response.data.datasets[0].label
          state.chartData.datasets[0].backgroundColor = response.data.datasets[0].backgroundColor
          state.chartData.datasets[0].data = response.data.datasets[0].data
          state.graphLoaded = true
        })
        .catch(function (error) {
          console.log(error)
        })
  }
}

const getters = {
  modalState: state => state.showModal,
  chartData: state => state.chartData,
  loadedGraph: state => state.graphLoaded,
  hideWelcomeModal: state => state.hideWelcomeModal
}

const actions = {
  showHide: ({ commit }) => commit('showHide'),
  updateChartData: ({ commit }) => commit('getChartData'),
  hideWelcomeModal: ({ commit }) => commit('hideWelcomeModal')
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
