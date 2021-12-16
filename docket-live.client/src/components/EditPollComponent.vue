<template>
  <div class="component">
    <div class="row justify-content-between my-4" v-for="(q, index) in poll.questions" :key="q.id">
    <div class="col-md-4">
      {{index + 1}}. {{q.body}}
    </div>
    <div class="col-md-2 col-6 mt-2 mt-md-0 " v-for="(c, index) in q.choices" :key="index">
      <input type="text"  class="w-100" :placeholder="c.content">
    </div>
  </div>
    <!-- ------------------------------------- New Question Inputs -------------------------- -->
    <div class="row my-4">
      <div class="col-md-4">
  <!-- <i class="mdi mdi-delete bg-primary p-3 mx-3" title="delete poll"></i> -->
        <input type="text"  class="w-100" placeholder="c.content">
      </div>
      <div class="col-md-2 col-3">
        <input type="text"  class="w-100" placeholder="c.content">
      </div>
      <div class="col-md-2 col-3">
        <input type="text"  class="w-100" placeholder="c.content">
      </div>
      <div class="col-md-2 col-3">
        <input type="text"  class="w-100" placeholder="c.content">
      </div>
      <div class="col-md-2 col-3">
        <input type="text"  class="w-100" placeholder="c.content">
      </div>
    </div>
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
input{
  background: #ABC1CD;
border-radius: 45px;
}
</style>
