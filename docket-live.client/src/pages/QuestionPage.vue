<template>
  <div class="container-fluid" v-if="activeQuestion.choices">
    <GameNavbar />
    <div class="row justify-content-center">
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
      <div class="col-12 text-center" v-if="account.role !== 'staff'">
        <span class="timer">19</span>
      </div>
      <div class="col-10 text-end" v-if="account.role === 'staff'">
        <button class="btn move-on" v-if="routeIndex < activeSession.poll?.questions.length" @click="nextQuestion">Move on</button>
         <button class="btn finish-poll" v-else @click="finishPoll">Finish Poll</button>
      </div>


    </div>
    <div class="row" v-if="account.role !== 'staff'" >
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

    <div class="row justify-content-center mt-5" v-else>
      <div class="col-10 results">
        <div class="row">
          <div class="col-4 mt-4">
            answered
          </div>
          <div class="col-4 text-center mt-4">
            <div class="row ">
              <div class="col-6 text-center">
                  <p class="collecting">
           Collecting Results
            </p>
              </div>
              <div class="col-6 mt-3 text-center">
            <div class="dot-pulse"></div>
              </div>
            </div>
          </div>
          <div class="col-4 text-end mt-4">
            remaining
          </div>
        </div>
         <div class="progress mt-3">
          <div class="progress-bar gradient" role="progressbar" style="width: 70%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>

            </div>
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
import { router } from "../router"
export default {
  setup(){
    const route = useRoute()
    const time = ref(60)
    onMounted(async() => {
      try {
        await pollSessionsService.getById(route.params.id)
        await questionsService.setActiveQuestion(route.params.index)
         setInterval(() => {
           if(time.value > 0){
             time.value -= 1
           }
        }, 1000)
      } catch (error) {
        logger.error(error)
      }
    })
    return {
      time,
      route,
      account: computed(() => AppState.account),
      activeSession: computed(() => AppState.activeSession),
      activeQuestion: computed(() => AppState.activeQuestion),
      routeIndex: computed(() => parseInt(route.params.index, 10)),
      async nextQuestion(){
        let nextQuestion = parseInt(route.params.index, 10)
        nextQuestion++
        router.push({name: 'QuestionPage', params: {id: route.params.id, index: nextQuestion}})
        await questionsService.setActiveQuestion(nextQuestion)
        time.value = 60
      },
      async finishPoll(){
        try {
          await pollSessionsService.finishPollSession()
          router.push({name: 'ResultsPage'})
        } catch (error) {
          logger.error(error)
        }
      }

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

.gradient{
  background: linear-gradient(to right, #e5405e 0%, #ffdb3a 45%, #3fffa2 100%);
  transition: ease;
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


.move-on{
      position: absolute;
    right: 10%;
    transform: translateY(-20px);
    background: #3BA5DC;
box-shadow: 0px 4px 0px #27688C;
border-radius: 50px;
color: white;
}

.finish-poll{
      position: absolute;
    right: 10%;
    transform: translateY(-20px);
    background: #ea0606;
box-shadow: 0px 4px 0px #7D2646;
border-radius: 50px;
color: white;
}

.choice{
  height: 15vh;
}

.collecting{
  color: #7A8F99;
  font-size: 18px;
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

.results{
  height: 20vh;
  background: #F3F2F2;
box-shadow: 0px 5px 0px #C1C1C1;
border-radius: 5px;
}

.progress{
  border: 2px solid #ABC1CD;
border-radius: 50px;
height: 5vh;
}

.progress-bar{
 border-radius: 0px 15px 15px 0px;
border-left: none;
}


.collect{
  color: #7A8F99;
  font-size: 24px;
}


.dot-pulse {
  position: relative;
  left: -9999px;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  background-color: #9880ff;
  color: #9880ff;
  box-shadow: 9999px 0 0 -5px #9880ff;
  animation: dotPulse 1.5s infinite linear;
  animation-delay: .25s;
}

.dot-pulse::before, .dot-pulse::after {
  content: '';
  display: inline-block;
  position: absolute;
  top: 0;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  background-color: #9880ff;
  color: #9880ff;
}

.dot-pulse::before {
  box-shadow: 9984px 0 0 -5px #9880ff;
  animation: dotPulseBefore 1.5s infinite linear;
  animation-delay: 0s;
}

.dot-pulse::after {
  box-shadow: 10014px 0 0 -5px #9880ff;
  animation: dotPulseAfter 1.5s infinite linear;
  animation-delay: .5s;
}

@keyframes dotPulseBefore {
  0% {
    box-shadow: 9984px 0 0 -5px #9880ff;
  }
  30% {
    box-shadow: 9984px 0 0 2px #9880ff;
  }
  60%,
  100% {
    box-shadow: 9984px 0 0 -5px #9880ff;
  }
}

@keyframes dotPulse {
  0% {
    box-shadow: 9999px 0 0 -5px #9880ff;
  }
  30% {
    box-shadow: 9999px 0 0 2px #9880ff;
  }
  60%,
  100% {
    box-shadow: 9999px 0 0 -5px #9880ff;
  }
}

@keyframes dotPulseAfter {
  0% {
    box-shadow: 10014px 0 0 -5px #9880ff;
  }
  30% {
    box-shadow: 10014px 0 0 2px #9880ff;
  }
  60%,
  100% {
    box-shadow: 10014px 0 0 -5px #9880ff;
  }
}

</style>
