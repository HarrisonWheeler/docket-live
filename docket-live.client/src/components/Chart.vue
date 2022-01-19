<template>
<div>
<canvas id="resultsChart"></canvas>
<button class="btn btn-success " @click="nextQuestion">Next Question</button>
</div>
</template>


<script>
import { onMounted } from "vue"
import {chartService} from '../services/ChartService'
import { logger } from "../utils/Logger"
import { questionsService } from "../services/QuestionsService"
import { useRoute } from "vue-router"
import { socketService } from "../services/SocketService"
export default {
  props: {answers: {type: Array, required: true}, question: {type: Object, required: true}},
  setup(props){
    const route = useRoute()
    onMounted(() => {
      logger.log(props.question)
        let ctx = document.getElementById('resultsChart')?.getContext('2d')
        logger.log(ctx)
        if(ctx){
          let data = {question: props.question, answers :props.answers}
          chartService.drawChart(ctx, data)
        }
      })
    return {
      route,
         async nextQuestion(){
        let nextQuestion = parseInt(route.params.index, 10)
        nextQuestion++
        questionsService.toggleChart()
        socketService.nextQuestion(route.params.id, nextQuestion)
      },
    }
  }
}
</script>


<style lang="scss" scoped>
canvas{
  outline: 1px red solid;
  max-height: 65vh;
}
</style>
