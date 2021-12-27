<template>
  <div class="component" v-if="poll.questions">
    <div class="row justify-content-between my-4" v-for="(q, index) in poll.questions" :key="q.id">
    <div class="col-md-4">
      <p class="m-0">
        <span class="text-danger pointer" @click="deleteQuestion(q.id)" title="Delete Question">
        X
        </span>
        <span class="me-2">
          {{index + 1}}.
          </span>
        <input type="text"  class="w-75 questions" :placeholder="q.body" v-model="poll.questions[index].body">
      </p>
    </div>
    <div class="col-md-2 col-6 mt-2 mt-md-0 " v-for="(c, i) in q.choices" :key="i" >
      <input type="text"  class="w-100 answers" :placeholder="c.content" v-model="poll.questions[index].choices[i].content">
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
        <input type="text"  class="w-100 questions" placeholder="Question..." v-model="newQuestion">

          </div>
        </div>
      </div>
      <div class="col-md-2 col-6 mt-2 mt-md-0">
        <input type="text" disabled class="w-100 answers" placeholder="Great">
      </div>
      <div class="col-md-2 col-6 mt-2 mt-md-0">
        <input type="text" disabled class="w-100 answers" placeholder="Ok">
      </div>
      <div class="col-md-2 col-6 mt-2 mt-md-0">
        <input type="text" disabled class="w-100 answers" placeholder="Struggling">
      </div>
      <div class="col-md-2 col-6 mt-2 mt-md-0">
        <input type="text" disabled class="w-100 answers" placeholder="Totally Lost">
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity"
import {questionsService} from '../services/QuestionsService'
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { pollsService } from "../services/PollsService"
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
.answers{
  background: #ABC1CD;
border-radius: 45px;
padding-left: .75em;
}

.questions{
  border: 1px solid #ABC1CD;
box-sizing: border-box;
border-radius: 5px;
padding-left: .75em;

}

.icon{
  border-radius: 45px;
  cursor: pointer;
}
</style>
