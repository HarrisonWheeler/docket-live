<template>
  <div class="container-fluid">
    <div class="row text-center">
      <div class="col-12" v-if="activeSession.poll">
        <h1 class="text-light">{{activeSession.poll.title}}</h1>
        <h2 class="text-primary">
          {{activeSession.className}} - Week Here
        </h2>
        <h2 class="text-warning">Join Code: {{activeSession.sessionCode}}</h2>
      </div>
    </div>
    <div class="row justify-content-center ">
      <div class="col-4">
        <p class="text-warning m-0">Who's All Here?</p>
      </div>
      <div class="col-4">
            <button class="btn start-poll">Start Poll</button>
      </div>
      <div class="col-2 text-end">
        <span class="join-timer p-3 text-center">10</span>
      </div>
      <div class="col-10 player-area">
        <div class="row">
          <div class="col-3 player-bubble my-2">
            <p class="mx-2">
            FakePerson here!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
import { onMounted } from "@vue/runtime-core"
import { logger } from "../utils/Logger"
import { pollSessionsService } from "../services/PollSessionsService"
import { useRoute } from "vue-router"
export default {
  setup(){
    const route = useRoute()
    onMounted(async() => {
      try {
        await pollSessionsService.getById(route.params.id)
      } catch (error) {
        logger.error(error)
      }
    })
    return {
      activeSession: computed(() => AppState.activeSession)
    }
  }
}
</script>


<style lang="scss" scoped>
.player-area{
  background: rgba(243, 242, 242, 0.25);
border: 1px solid #F5F5F5;
box-sizing: border-box;
box-shadow: 0px 5px 0px #D7D7D7;
backdrop-filter: blur(20px);
border-radius: 5px;
height: 60vh;
}

.start-poll{
  background: #86E29B;
box-shadow: 0px 4px 0px #57A480;
border-radius: 50px;
position: absolute;
 transform: translateY(5px);
z-index: 1000;
}

.join-timer{
  background: #86E29B;
box-shadow: 0px 4px 0px #57A480;
border-radius: 50%;
width: 64px;
height: 64px;
position: absolute;
 transform: translateY(-4px);
z-index: 1000;
}

.player-bubble{
  background: #EA5DB1;
border-radius: 50px;
}
</style>
