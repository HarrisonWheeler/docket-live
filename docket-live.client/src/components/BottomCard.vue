<template>
    <div class="row justify-content-center mt-5" v-if="account.role === 'staff'">
      <div class="col-10 results">
        <div class="row">
          <div class="col-4 mt-4">
            {{playerAnswers}}
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
          <div class="col-4 text-end mt-4" v-if="activeSession.currentPlayers">
            {{activeSession.currentPlayers.length}}
          </div>
        </div>
         <div class="progress mt-3">
          <div class="progress-bar gradient" role="progressbar" :style="{width: progress + '%'}" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>

            </div>
      </div>

    </div>


     <div class="row mt-5" v-else-if="activeAnswer?.answer">
      <div class="col-12 text-center">
      <h1>Waiting For Next Question...</h1>
      </div>
    </div>


    <div class="row" v-else >
       <div class="col-6" v-for="(c, index) in activeQuestion.choices" :key="index">
        <button class="btn w-100 choice mt-5" :class="buttonColors[index]" @click="selectAnswer(c)">{{c.content}}</button>
      </div>
    </div>


</template>


<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { answersService } from "../services/AnswersService"
export default {
  setup(){
      const buttonColors = ['btn-success', 'btn-primary', 'btn-warning', 'btn-danger']
    return {
      buttonColors,
      playerAnswers: computed(() => AppState.playerAnswers.length),
      account: computed(() => AppState.account),
      activeSession: computed(() => AppState.activeSession),
      activeQuestion: computed(() => AppState.activeQuestion),
      activeAnswer: computed(() => AppState.activeAnswer),
       progress: computed(() => AppState.playerAnswers.length / AppState.activeSession?.currentPlayers.length * 100),
      async selectAnswer(answer){
        try {
          let newAnswer = {questionId: this.activeQuestion.id, pollId: this.activeSession.pollId, pollSessionId: this.activeSession.id, answer: answer}
          await answersService.createAnswer(newAnswer)
        } catch (error) {
          logger.error(error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
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
transition: width 2s;
}

.progress-bar{
 border-radius: 0px 15px 15px 0px;
border-left: none;
transition: width 1s;
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
