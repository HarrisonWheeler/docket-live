<template>
  <div class="container-fluid">
    <GameNavbar />
    <div class="row text-center">
      <div class="col-12" v-if="activeSession.poll">
        <h1 class=" title-shadow">{{activeSession.poll.title}}</h1>
        <h2 class="class-shadow">
          {{activeSession.className}} - Week Here
        </h2>
        <h2 class="code-shadow">Join Code: {{activeSession.sessionCode}}</h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-3">
        <p class="text-warning m-0">Who's All Here?</p>
      </div>
      <div class="col-4">
            <button class="btn start-poll ms-5 ">Start Poll</button>
      </div>
      <div class="col-3 text-end">
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

.title-shadow{
  font-size: 75px;
  color: #FFFFFF;
text-shadow: 0px 4px 0px #ABC1CD;
}

.class-shadow{
color: #3BA5DC;
text-shadow: 0px 4px 0px #196895;
font-size: 40px;
}

.code-shadow{
  color: #EAD35D;
text-shadow: 0px 1px 0px #EAA95D;
font-size: 40px;
}
.player-area{
  background: rgba(243, 242, 242, 0.25);
border: 1px solid #F5F5F5;
box-sizing: border-box;
box-shadow: 0px 5px 0px #D7D7D7;
backdrop-filter: blur(20px);
border-radius: 5px;
height: 55vh;
}

.start-poll{
  background: #86E29B;
box-shadow: 0px 4px 0px #57A480;
border-radius: 50px;
position: absolute;
 transform: translateY(5px);
z-index: 1000;
width: 250px;
// top: 50%;
left: 50%;
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
