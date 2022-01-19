<template>
  <div class="container-fluid" v-if="activeQuestion.choices">
    <GameNavbar />
    <TopCard />
    <BottomCard />
  </div>
</template>


<script>
import { computed, onMounted, } from "@vue/runtime-core"
import { pollSessionsService } from "../services/PollSessionsService"
import { useRoute } from "vue-router"
import { AppState } from "../AppState"
import { questionsService } from "../services/QuestionsService"
import { answersService } from "../services/AnswersService"

import { logger } from "../utils/Logger"
import { socketService } from "../services/SocketService"
export default {
  setup(){
    const route = useRoute()
    onMounted(async() => {
      try {
        await pollSessionsService.getById(route.params.id)
        await questionsService.setActiveQuestion(route.params.index)
        if(AppState.account.role !== 'staff'){
          await answersService.queryAnswers(AppState.activeQuestion.id)
        }
        socketService.joinRoom(route.params.id)
      } catch (error) {
        logger.error(error)
      }
    })
    return {
      activeQuestion: computed(() => AppState.activeQuestion)
    }
  }
}
</script>


<style lang="scss" scoped>



</style>
