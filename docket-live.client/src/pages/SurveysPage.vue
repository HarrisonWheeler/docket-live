<template>
  <div class="row justify-content-start content-height">
      <div class="col-12 bg-light">
        <div class="row mt-4">
          <div class="col-6">
            <input type="text" placeholder="search..." class="search w-100">
          </div>
        </div>
          <div class="row justify-content-center">
          <PollComponent v-for="p in polls" :key="p.id" :poll="p" />

          </div>
      </div>

    </div>
</template>


<script>
export default {
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>
