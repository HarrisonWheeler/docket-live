<template>
<div>
<canvas id="resultsChart" width="400" height="400"></canvas>
</div>
</template>


<script>
import {Chart} from 'chart.js'
import { watchEffect } from "@vue/runtime-core"
import {chartService} from '../services/ChartService'
export default {
  props: {data: {type: Object, required: true}},
  setup(props){
    watchEffect(() => {
      const ctx = document.getElementById('resultsChart')?.getContext('2d')
      if(ctx){
        chartService.drawChart()
      }
      })
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>
