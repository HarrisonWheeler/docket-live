<template>
  <div class="container-fluid">
    <GameNavbar />
    <div class="row justify-content-center" v-if="activeQuestion.choices">
      <div class="col-12 text-center mb-4" v-if="activeSession.poll">
        <p class="title text-light m-0">
          {{activeSession.poll.title}}
        </p>
        <p class="class text-primary m-0">
          {{activeSession.className}} - Week here


        </p>
      </div>
      <div class="col-md-10">
        <p class="text-warning m-0 question-label">Question 1</p>
      </div>
      <div class="col-md-10 question-area d-flex align-items-center justify-content-center">
        <h1 class="question">{{activeQuestion.body}}?</h1>
      </div>
      <div class="col-12 text-center">
        <span class="timer">{{time}}</span>
      </div>
      <div class="col-6">
        <button class="btn btn-success w-100 choice mt-5">{{activeQuestion.choices[0].content}}</button>
      </div>
      <div class="col-6">
        <button class="btn btn-primary w-100 choice mt-5">{{activeQuestion.choices[1].content}}</button>
      </div>
      <div class="col-6">
        <button class="btn btn-warning w-100 choice my-3">{{activeQuestion.choices[2].content}}</button>
      </div>
      <div class="col-6">
        <button class="btn btn-danger w-100 choice my-3">{{activeQuestion.choices[3].content}}</button>
      </div>
    </div>
  </div>
</template>


<script>
import { computed, onMounted, ref } from "@vue/runtime-core"
import { pollSessionsService } from "../services/PollSessionsService"
import { useRoute } from "vue-router"
import { AppState } from "../AppState"
import { questionsService } from "../services/QuestionsService"
import { logger } from "../utils/Logger"
export default {
  setup(){
    const route = useRoute()
    const time = ref(60)
    onMounted(async() => {
      try {
        await pollSessionsService.getById(route.params.id)
        await questionsService.setActiveQuestion(route.params.index)
         setInterval(() => {
          time.value -= 1
        }, 1000)
      } catch (error) {
        logger.error(error)
      }
    })
    return {
      time,
      activeSession: computed(() => AppState.activeSession),
      activeQuestion: computed(() => AppState.activeQuestion)

    }
  }
}
</script>


<style lang="scss" scoped>
.title{
  font-size: 36px;
}

.class{
  font-size: 28px;
}

.question-area{
background: rgba(243, 242, 242, 0.35);
border: 1px solid #EBEBEB;
box-sizing: border-box;
box-shadow: 0px 5px 0px #D7D7D7;
backdrop-filter: blur(20px);
border-radius: 5px;
height: 40vh;
}

.question-label{
  font-size: 20px;
}

.question{
  //  font-size: 50px;
  color: #FFFFFF;
text-shadow: 0px 1px 0px black;
}

.timer{
  background: #ABC1CD;
box-shadow: 0px 4px 0px #7A8F99;
border-radius: 50%;
right: 47.4%;
width: 64px;
height: 64px;
position: absolute;
 transform: translateY(-30px);
z-index: 1000;
    font-size: 36px;
}

.choice{
  height: 15vh;
}

.btn-success{
box-shadow: 0px 5px 0px #509C7C;
border-radius: 5px;
color: #225B43;
font-size: 24px;
}

.btn-primary{
box-shadow: 0px 5px 0px #196895;
border-radius: 5px;
color: #1A4761;
font-size: 24px;

}
  .btn-warning{
  box-shadow: 0px 5px 0px #EAA95D;
border-radius: 5px;
color: #845C21;
font-size: 24px;
  }

.btn-danger{
box-shadow: 0px 5px 0px #CE4778;
border-radius: 5px;
color: #7D2646;
font-size: 24px;
}

</style>
