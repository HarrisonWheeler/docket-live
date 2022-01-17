import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class AnswersService{

  async queryAnswers(questionId){
    const res = await api.get('api/answers?' + `questionId=${questionId}&&playerId=userInfo` )
    AppState.activeAnswer = res.data
    logger.log('current Answer', res.data)
  }

  async createAnswer(answer){
    const res = await api.post('api/answers', answer)
    logger.log(res.data)
    AppState.activeAnswer = res.data
  }
}



export const answersService = new AnswersService()
