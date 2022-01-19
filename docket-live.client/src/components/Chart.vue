<template>
<div>
  chart
<canvas id="resultsChart"></canvas>
</div>
</template>


<script>
import { watchEffect } from "vue"
import {chartService} from '../services/ChartService'
import { logger } from "../utils/Logger"
export default {
  props: {answers: {type: Array, required: true}, question: {type: Object, required: true}},
  setup(props){
    watchEffect(() => {
      logger.log(props.question)
        let ctx = document.getElementById('resultsChart')?.getContext('2d')
        logger.log(ctx)
        if(ctx){
          let data = {question: props.question, answers :props.answers}
          chartService.drawChart(ctx, data)
        }
      })
    return {}
  }
}
</script>


<style lang="scss" scoped>
canvas{
  outline: 1px red solid;
  max-height: 65vh;
}
</style>
