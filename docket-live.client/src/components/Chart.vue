<template>
<div>
  chart
<canvas id="resultsChart" width="400" height="400"></canvas>
</div>
</template>


<script>
import { watchEffect } from "vue"
import {chartService} from '../services/ChartService'
import { logger } from "../utils/Logger"
export default {
  props: {data: {type: Array, required: true}},
  setup(props){
    watchEffect(() => {
      logger.log(props.data)
        let ctx = document.getElementById('resultsChart')?.getContext('2d')
        logger.log(ctx)
      if(ctx){
        chartService.drawChart(ctx, props.data)
      }
      })
    return {}
  }
}
</script>


<style lang="scss" scoped>
canvas{
  outline: 1px red solid;
}
</style>
