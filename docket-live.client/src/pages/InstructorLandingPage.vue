<template>
    <Navbar />
  <div class="container">
    <div class="row mt-4 text-center">
      <div class="col-md-2 col-3 bg-light me-md-2 me-1">
        <p class="">
        Live polls
        </p>
      </div>
      <div class="col-md-2 col-3 bg-light me-md-2 me-1">
        Surveys
      </div>
      <div class="col-md-2 col-3 bg-light">
        Results
      </div>
    </div>
    <div class="row justify-content-start content-height">
      <div class="col-12 bg-light">
        <div class="row mt-4">
          <div class="col-6">
            <input type="text" placeholder="search..." class="search w-100">
          </div>
        </div>
          <div class="row justify-content-center">
          <PollComponent />

          </div>
      </div>
    </div>

  </div>
</template>


<script>

export default {
  setup(){
    return

  }
}
</script>


<style lang="scss" scoped>
.content-height{
  height: 75vh;
}

.search{
  background: #E9EBEC;
box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.25);
border-radius: 5px;
}
</style>
