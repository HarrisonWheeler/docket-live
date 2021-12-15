<template>
  <div class="row justify-content-start content-height">
      <div class="col-12 bg-light">
        <div class="row mt-4">
          <div class="col-md-6">
            <input type="text" placeholder="search..." class="search w-100 ms-md-4">
          </div>
        </div>
          <div class="row justify-content-center">
          <PollComponent v-for="p in polls" :key="p.id" :poll="p" />

          </div>
      </div>

    </div>
</template>


<script>
import { computed } from "@vue/reactivity"
import { pollsService } from "../services/PollsService"
import { onMounted } from "@vue/runtime-core"
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
    return {
        polls: computed(() => AppState.polls)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>
