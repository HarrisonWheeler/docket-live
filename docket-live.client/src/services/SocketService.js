import { AppState } from "../AppState"
import { router } from "../router"
import { logger } from "../utils/Logger"
import Pop from '../utils/Pop'
import { SocketHandler } from '../utils/SocketHandler'
import { answersService } from "./AnswersService"

class SocketService extends SocketHandler {
  constructor() {
    super()
    this
      .on('error', this.onError)
      .on('NEW_PLAYER', this.addPlayer)
      .on('RECIEVE_NEXT_QUESTION', this.recieveNextQuestion)
  }


  /**
   * Takes in the userInfo of the player joining the room, pushes that player into the current players arr on the activeSession
   * @param {Object} player
   */
  addPlayer(player){
    logger.log("socketPlayer", player)
    if(!AppState.activeSession?.players.includes(player.id)){
      AppState.activeSession.currentPlayers.push(player)

    }
  }


  /**
   * This method pushes all users in a room to the next question, sets the active question in the AppState, and if not the host checks to see if the user has answered that question.
   * @param {Object} payload
   */
  async recieveNextQuestion(payload){
    logger.log('Recieving Message', payload)
    router.push({name: 'QuestionPage', params: {id: AppState.activeSession.id, index: payload.index}})
    AppState.activeQuestion = AppState.activeSession.poll?.questions[payload.index -1]
    if(AppState.account.role !== 'staff'){
      await answersService.queryAnswers(AppState.activeQuestion.id)
    }
  }

  onError(e) {
    Pop.toast(e.message, 'error')
  }
}

export const socketService = new SocketService()
