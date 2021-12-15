<template>
<div class="col-11 mt-4 p-0">
 <div class="bg-light w-100 collapse-trigger row align-items-center"   data-bs-toggle="collapse" :data-bs-target="'#collapse-' + poll.id" aria-expanded="false" aria-controls="collapseExample">
   <div class="col-3">
     <p class="m-0">
     <b>{{poll.title}}</b>
     </p>
     <p class="m-0 text-primary">Week2</p>
     </div>
  <div class="col-6 text-center">
    <p class="m-0"><b>{{poll.questions.length}} Questions</b></p>
    <p class="m-0">Last Edited: {{formatDate(poll.updatedAt)}}</p>
  </div>
  <div class="col-md-1 col-3 offset-md-2 bg-success h-100 d-flex align-items-center justify-content-center">
    <i class="mdi mdi-tray-arrow-up icon"></i>
  </div>
<div class="collapse w-100 p-0" :id="'collapse-' + poll.id">
  <div class="card card-body reveal">
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
  </div>
</div>
  </div>


</div>
</template>


<script>
export default {
  props: {poll: {type: Object, required: true}},
  setup(){
    return {
      formatDate(date){
        const formatted = new Date(date).toLocaleString('en-US', {day: 'numeric', month: 'short', year: 'numeric'})
        return formatted
      }
    }
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
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 0px 0px 5px 5px;
}

.reveal{
background: #DBE3E8;
}
</style>
