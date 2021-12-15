<template>
<div class="col-11 mt-4 p-0">
 <div class="bg-light w-100 collapse-trigger row align-items-center"   data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
   <div class="col-3">
     <p class="m-0">
     JavaScript
     </p>
     <p class="m-0">Week2</p>
     </div>
  <div class="col-6 text-center">
    <p>13 Questions</p>
  </div>
  <div class="col-md-1 col-3 offset-md-2 bg-success h-100 d-flex align-items-center justify-content-center">
    <i class="mdi mdi-tray-arrow-up icon"></i>
  </div>
<div class="collapse w-100 p-0" id="collapseExample">
  <div class="card card-body">
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
  </div>
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
.collapse-trigger{
  border: 2px solid #ABC1CD;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
border-radius: 5px;
height: 12vh;
}

.icon{
  font-size: 30px;
}

.collapse{
  background: #DBE3E8 !important;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 0px 0px 5px 5px;
}
</style>
