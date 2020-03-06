<template>
<div>
    <div class="d-chart" ref="chart">
    </div>
</div>
</template>

<script>
export default {
  name: 'HomeCharts',
  data () {
    return {
      myCharts: null,
      option: {
        title: {
          text: '城市访问量'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          show: false,
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['太原', '大同', '阳泉', '长治', '晋城', '朔州', '晋中', '运城', '忻州', '临汾', '吕梁']
        },
        series: [
          {
            type: 'bar',
            barWidth: 20,
            data: [120, 220, 300, 310, 256, 328, 345, 156, 200, 196, 95]
          }]
      }
    }
  },
  mounted () {
    this.initChart()
  },
  methods: {
    initChart () {
      if (!this.myCharts) {
        this.myCharts = this.$echarts.init(this.$refs.chart)
      }
      this.myCharts.setOption(this.option)
    }
  }
}
</script>

<style lang="less" scoped>
.d-chart{
    width: 25rem;
    height: 30rem;
}
</style>
