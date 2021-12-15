<template>
    <Navbar />
  <div class="container">
    <div class="row mt-4 text-center">
      <div class="col-md-2 col-3 bg-light me-md-2 me-1 border-rounded">
        <p class="">
        Live polls
        </p>
      </div>
      <div class="col-md-2 col-3 bg-light me-md-2 me-1 border-rounded">
        Surveys
      </div>
      <div class="col-md-2 col-3 bg-light border-rounded">
        Results
      </div>
    </div>
<router-view></router-view>



  </div>
</template>


<script>
import { computed, onMounted } from "@vue/runtime-core"
import { logger } from "../utils/Logger"
import {pollsService } from '../services/PollsService'
import { AppState } from "../AppState"

export default {
  setup(){
    onMounted(async() => {
      try {
        await pollsService.getPolls()
      } catch (error) {
        logger.log(error)
      }
    })
    return{

    }

  }
}
</script>


<style lang="scss" scoped>
.content-height{
  height: 75vh;
}

.border-rounded{
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;

}

.search{
  background: #E9EBEC;
box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.25);
border-radius: 5px;
}
</style>
