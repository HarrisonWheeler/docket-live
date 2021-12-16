<template>
  <div class="component">
    <div class="row justify-content-between my-4" v-for="(q, index) in poll.questions" :key="q.id">
    <div class="col-md-4">
      <p class="m-0">
  <i class="mdi mdi-alpha-x mdi-24px" title="delete question" @click="deleteQuestion(q.id)"></i>
      {{index + 1}}. {{q.body}}

      </p>
    </div>
    <div class="col-md-2 col-6 mt-2 mt-md-0 " v-for="(c, index) in q.choices" :key="index">
      <input type="text"  class="w-100" :placeholder="c.content">
    </div>
  </div>
    <!-- ------------------------------------- New Question Inputs -------------------------- -->
    <div class="row my-4">
      <div class="col-md-4">
        <div class="row">
          <div class="col-2">
  <i class="mdi mdi-plus-circle mdi-24px text-primary icon" title="Add Question" @click="addQuestion"></i>

          </div>
          <div class="col-9 p-0">
        <input type="text"  class="w-100" placeholder="Question..." v-model="newQuestion">

          </div>
        </div>
      </div>
      <div class="col-md-2 col-6 mt-2 mt-md-0">
        <input type="text" disabled class="w-100" placeholder="Great">
      </div>
      <div class="col-md-2 col-6 mt-2 mt-md-0">
        <input type="text" disabled class="w-100" placeholder="Ok">
      </div>
      <div class="col-md-2 col-6 mt-2 mt-md-0">
        <input type="text" disabled class="w-100" placeholder="Struggling">
      </div>
      <div class="col-md-2 col-6 mt-2 mt-md-0">
        <input type="text" disabled class="w-100" placeholder="Totally Lost">
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity"
import {questionsService} from '../services/QuestionsService'
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
export default {
  props: {poll: {type: Object, required: true}},
  setup(props){
    const newQuestion = ref('')
    return {
      newQuestion,
      async addQuestion(){
        try {
          if(newQuestion.value.length > 0){
            await questionsService.addQuestion({body: newQuestion.value, pollId: props.poll.id})
            newQuestion.value = ''
          }
        } catch (error) {
          logger.error(error)
        }
      },
      async deleteQuestion(id){
        try {
          if(await Pop.confirm('Are You Sure', 'This Question Will Be Deleted')){
            await questionsService.deleteQuestion(props.poll.id, id)
          }
        } catch (error) {
          logger.error(error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
input{
  background: #ABC1CD;
border-radius: 45px;
}

.icon{
  border-radius: 45px;
  cursor: pointer;
}
</style>
