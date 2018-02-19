<script>
import {Line, mixins} from 'vue-chartjs'
import axios from 'axios'
export default {
  extends: Line,
  mixins: [mixins.reactiveData],
  props: ['data', 'options'],
  data: function () {
    return {
      'chartData': {
        labels: [],
        datasets: [{'label': '', 'backgroundColor': '', 'data': []}]
      }
    }
  },
  mounted () {
    let self = this
    axios.get('http://localhost:3000/chartData')
        .then(function (response) {
          console.log(response.data.labels.length)
          self.chartData.labels = response.data.labels
          self.chartData.datasets[0].label = response.data.datasets[0].label
          self.chartData.datasets[0].backgroundColor = response.data.datasets[0].backgroundColor
          self.chartData.datasets[0].data = response.data.datasets[0].data
          console.log(self.chartData)
          self.drawGraph()
        })
        .catch(function (error) {
          console.log(error)
        })
  },
  methods: {
    drawGraph: function () {
      let self = this
      self.renderChart(self.chartData, this.options) // todo put this in method and call it when we get the data make request in here may need watch?
    }
  },
  watch: {
    'chartData' (to, from) {
      console.log('In this watch')
      this.renderChart(this.chartData, this.options)
    }
  }
}
</script>