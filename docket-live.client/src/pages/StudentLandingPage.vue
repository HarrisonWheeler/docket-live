<template>
<Navbar />
  <div class="container-fluid">
    <div class="row height justify-content-center align-items-center">
      <div class="col-md-4 col-11 bg-primary custom-card text-center">
        <p class=" my-2">
          <b>
Enter Poll Code!
          </b></p>
        <form @submit.prevent="joinPoll">
        <div class="d-flex justify-content-center">
        <input type="text" class="code-input w-75 text-center" placeholder="xxxx" maxlength="4" required minlength="4" v-model="code">
        </div>
        <div class="d-flex justify-content-center my-3">
        <button class="btn btn-warning button w-50">Join</button>
        </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity"
import { pollSessionsService } from "../services/PollSessionsService"
import { logger } from "../utils/Logger"
import { router } from "../router"
export default {
  setup(){
    const code = ref('')
    return {
      code,
      async joinPoll(){
        try {
          const activeId = await pollSessionsService.joinPoll(code.value)
          router.push({name: 'StartLivePollPage', params: {id: activeId }})
        } catch (error) {
          logger.error(error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.height{
  height: 90vh;
}

.custom-card{
  box-shadow: 0px 6px 0px #196895;
  border-radius: 5px;
}

.code-input{
  background: #F2F2F2;
border-radius: 5px;
height: 5vh;
}

.button{
box-shadow: 0px 4px 0px #EAA95D;;
border-radius: 8px;
border: 1px solid rgba(248, 248, 248, 0.24);
box-sizing: border-box;
border-radius: 5px;
height: 70px;
}
</style>
