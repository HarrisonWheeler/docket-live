import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import Pop from '../utils/Pop'
import { SocketHandler } from '../utils/SocketHandler'

class SocketService extends SocketHandler {
  constructor() {
    super()
    this
      .on('error', this.onError)
      .on('NEW_PLAYER', this.addPlayer)
  }


  addPlayer(player){
    logger.log("socketPlayer", player)
    AppState.activeSession.currentPlayers.push(player)
  }

  onError(e) {
    Pop.toast(e.message, 'error')
  }
}

export const socketService = new SocketService()
