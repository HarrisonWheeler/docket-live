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
  </div>
  <div class="row w-100">
<div class="collapse p-0" :id="'collapse-' + poll.id" @click.stop>
  <div class="card card-body reveal container-fluid position-relative" v-if="poll.questions.length > 0">
    <QuestionComponent :questions="poll.questions" />
    <div class="text-end position-absolute spill">
  <i class="mdi mdi-pencil edit bg-primary p-3 mx-2"></i>
  <i class="mdi mdi-delete edit bg-danger p-3 mx-3"></i>
    </div>
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

.edit{
 border-radius: 50%;
 height: 25px;
 width: 25px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

}

.spill{
 transform: translateY(10px);
 right: 0;
 bottom: 0;

}

.collapse{
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 0px 0px 5px 5px;
}

.reveal{
background: #DBE3E8;
min-height: 15vh;
}
</style>
