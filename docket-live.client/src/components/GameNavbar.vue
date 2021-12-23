<template>
  <div class="row my-2">
    <div class="col-6 d-flex align-items-center">
    <i class="mdi mdi-eye nav-icon mdi-24px"></i>
    <i class="mdi mdi-arrow-right-thin nav-icon ms-5"></i>

    </div>

    <div class="col-6 d-flex align-items-center justify-content-end">
      <button class="btn nav-btn me-5 w-25">Cancel Poll</button>
      <i class="mdi mdi-music-note-eighth nav-icon mdi-36px"></i>
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
.nav-icon{
  color: #ABC1CD;
}

.nav-btn{
  border: 2px solid #ABC1CD;
box-sizing: border-box;
border-radius: 50px;
color: #ABC1CD;
}
</style>
