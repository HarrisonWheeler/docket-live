<template>
 <div>
    <QuestionComponent :questions="poll.questions" />
  </div>
</template>


<script>
export default {
  props: {poll: {type: Object, required: true}},
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>
