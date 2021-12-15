<template>
  <div class="row justify-content-between my-4" v-for="(q, index) in questions" :key="q.id">
    <div class="col-md-4">
      {{index + 1}}. {{q.body}}
    </div>
    <div class="col-md-2 col-6 mt-2 mt-md-0 " v-for="(c, index) in q.choices" :key="index">
      <input type="text"  class="w-100" disabled :placeholder="c.content">
    </div>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity"
import { watchEffect } from "@vue/runtime-core"
export default {
  props: {questions: {type: Array, required: true}},
  setup(props){

    return {

    }
  }
}
</script>


<style lang="scss" scoped>
input{
  background: #ABC1CD;
border-radius: 45px;
}
</style>
