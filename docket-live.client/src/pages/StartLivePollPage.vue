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
    <div class="row justify-content-center mt-md-0 mt-3">
      <div class="col-3">
        <p class="text-warning m-0">Who's All Here?</p>
      </div>
      <div class="col-4 d-flex justify-content-center" v-if="account.role == 'staff'">
            <button class="btn start-timer ms-2 " v-if="!timer"  @click="startTimer">Start Timer?</button>
            <button class="btn start-poll ms-2 " v-else @click="startPoll">Start Poll</button>
      </div>
      <div class="col-4" v-else></div>
      <div class="col-3 text-end">
        <span class="join-timer p-3 text-center">{{time}}</span>
      </div>
      <div class="col-10 player-area">
        <div class="row my-4">
          <div class="col-md-6 col-lg-3 col-12  p-2" v-for="(p, index) in activeSession.currentPlayers" :key="index">
            <div class="player-bubble p-1">
            <p class="m-2">
              <img :src="p.picture" class="profile-pic" alt="">
            {{p.name}}
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed, ref } from "@vue/reactivity"
import { AppState } from "../AppState"
import { onMounted } from "@vue/runtime-core"
import { logger } from "../utils/Logger"
import { pollSessionsService } from "../services/PollSessionsService"
import { useRoute } from "vue-router"
import { router } from "../router"
import { socketService } from "../services/SocketService"
export default {
  setup(){
    const route = useRoute()
    const timer = ref(false)
    const time =  ref(60)
    onMounted(async() => {
      try {
        const pollSession = await pollSessionsService.getById(route.params.id)
        socketService.joinRoom(pollSession.id)
      } catch (error) {
        logger.error(error)
      }
    })
    return {
      timer,
      time,
      account: computed(() => AppState.account),
      activeSession: computed(() => AppState.activeSession),
      startTimer(){
        timer.value = true
        setInterval(() => {
          if(time.value > 0){
            time.value -= 1
            console.log(time.value)
          }
        }, 1000)
      },
      startPoll(){
        router.push({name: 'QuestionPage', params: {id: route.params.id, index: 1}})
      }
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

.profile-pic{
  width: 45px;
height: 45px;
border-radius: 50%;
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
}

.start-timer{
  background: #3BA5DC;
box-shadow: 0px 4px 0px #196895;
border-radius: 50px;
position: absolute;
 transform: translateY(5px);
z-index: 1000;
width: 250px;
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
    right: 7%;
        display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
}

.player-bubble{
  background: #EA5DB1;
border-radius: 50px;
}
</style>
