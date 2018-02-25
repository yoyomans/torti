<script>
import { Line } from 'vue-chartjs'
// import { mapActions } from 'vuex'
export default {
  extends: Line,
  props: ['options'],
  data () {
    return {
      resultSet: this.$store.state.chartData
    }
  },
  mounted () {
    console.log('in chart', this.resultSet)
    this.fillData()
    // this.renderChart(this.resultSet, this.options)
  },
  methods: {
    fillData () {
      console.log('1 off to get data')
      this.$store.dispatch('updateChartData')
      this.renderChart(this.resultSet, this.options)
    }
  },
  sockets: {
    graphUpdate: function (val) {
      console.log('this was fired from the server', val)
      this.renderChart(val, this.options)
    }
  },
//  computed: {
//    ...mapGetters({
//      chartData: 'chartData'
//    })
//  },
//  methods: {
//    ...mapActions({
//      updateChartData: 'updateChartData'
//    }),
//    drawGraph: function () {
//      let self = this
//      self.renderChart(self.chartData, this.options) // todo put this in method and call it when we get the data make request in here may need watch?
//    }
//  },
  watch: {
    resultSet: function () {
      console.log('I NEED TO UPDATE')
      this._chart.destroy()
      this.renderChart(this.resultSet, this.options)
    }
  }
}
</script>