import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  showModal: false,
  chartData: {
    labels: [],
    datasets: [{'label': '', 'backgroundColor': '', 'data': []}]
  }
}

const mutations = {
  showHide (state) {
    state.showModal = !state.showModal
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
        })
        .catch(function (error) {
          console.log(error)
        })
  }
}

const getters = {
  modalState: state => state.showModal,
  chartData: state => state.chartData
}

const actions = {
  showHide: ({ commit }) => commit('showHide'),
  updateChartData: ({ commit }) => commit('getChartData')
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
