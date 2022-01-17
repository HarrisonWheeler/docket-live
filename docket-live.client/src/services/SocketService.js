import { AppState } from "../AppState"
import { router } from "../router"
import { logger } from "../utils/Logger"
import Pop from '../utils/Pop'
import { SocketHandler } from '../utils/SocketHandler'

class SocketService extends SocketHandler {
  constructor() {
    super()
    this
      .on('error', this.onError)
      .on('NEW_PLAYER', this.addPlayer)
      .on('RECIEVE_NEXT_QUESTION', this.recieveNextQuestion)
  }


  addPlayer(player){
    logger.log("socketPlayer", player)
    if(!AppState.activeSession?.players.includes(player.id)){
      AppState.activeSession.currentPlayers.push(player)

    }
  }

  recieveNextQuestion(payload){
    logger.log('Recieving Message', payload)
    router.push({name: 'QuestionPage', params: {id: AppState.activeSession.id, index: payload.index}})
  }

  onError(e) {
    Pop.toast(e.message, 'error')
  }
}

export const socketService = new SocketService()
