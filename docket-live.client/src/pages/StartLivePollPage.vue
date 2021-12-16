<template>
  <div class="component">


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

</style>
