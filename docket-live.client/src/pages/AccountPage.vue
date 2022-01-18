<template>
  <div class="">
    <button @click="loadData">load data</button>
    <Chart :data="fakeData" />
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Account',
  setup() {
    return {
      account: computed(() => AppState.account),
      fakeData: computed(() => AppState.fakeData),
      loadData(){
        AppState.fakeData = [{"_id":{"$oid":"61e5aa5401b16f24f836906a"},"pollId":{"$oid":"61ba694ac84e9bcd4781ff6c"},"pollSessionId":{"$oid":"61e5a84a4a9daf84d440a32f"},"questionId":{"$oid":"61ba7337627b9d9e540b89b0"},"playerId":{"$oid":"61d88804fedafcdfe59faf5a"},"answer":{"content":"creator of vue","value":{"$numberInt":"1"}},"createdAt":{"$date":{"$numberLong":"1642441300180"}},"updatedAt":{"$date":{"$numberLong":"1642441300180"}},"__v":{"$numberInt":"0"}}, {"_id":{"$oid":"61e5abd501b16f24f83690b3"},"pollId":{"$oid":"61ba694ac84e9bcd4781ff6c"},"pollSessionId":{"$oid":"61e5a84a4a9daf84d440a32f"},"questionId":{"$oid":"61ba7337627b9d9e540b89b0"},"playerId":{"$oid":"61d88804fedafcdfe59faf5a"},"answer":{"content":" king","value":{"$numberInt":"-1"}},"createdAt":{"$date":{"$numberLong":"1642441685304"}},"updatedAt":{"$date":{"$numberLong":"1642441685304"}},"__v":{"$numberInt":"0"}}]
      }
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
