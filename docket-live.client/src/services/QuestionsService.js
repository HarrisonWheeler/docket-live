import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class QuestionsService {


  setActiveQuestion(index){
    let num = Number(index)
    num--
    AppState.activeQuestion = AppState.activeSession.poll?.questions[num]
    logger.log(AppState.activeQuestion)
  }

  toggleChart(){
    AppState.revealChart = !AppState.revealChart
  }

  async getQuestionById(pollId, questionId){
    const res = await api.get('api/polls/' + pollId + '/questions/' + questionId)
    logger.log('active Question', res.data.questions[0])
    AppState.activeQuestion = res.data.questions[0]
  }

  async getAnswersByQuestionId(id){
    const res = await api.get('api/questions/' + id + '/answers')
    logger.log('anwers by questionId', res.data)
    AppState.answers = res.data
  }
  async addQuestion(newQuestion){
  const res = await api.post('api/questions', newQuestion)
  logger.log(res.data)
  const index = AppState.polls.findIndex(p => p.id === newQuestion.pollId)
  AppState.polls.splice(index, 1, res.data)
}



  async deleteQuestion(pollId, id){
  const res = await api.delete('api/polls/' + pollId + '/questions/' + id)
  logger.log(res.data)
 const found = AppState.polls.find(p => p.id == pollId)
 found.questions = found.questions.filter(q => q.id !== id)
}
}


export const questionsService = new QuestionsService()
