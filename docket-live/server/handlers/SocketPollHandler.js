import { SocketHandler } from '../utils/SocketHandler'
import { logger } from '../utils/Logger'
import { Socket } from 'socket.io'
import { socketProvider } from '../SocketProvider'
export class SocketPollHandler extends SocketHandler {
  /**
   * @param {import("socket.io").Server} io
   * @param {import("socket.io").Socket} socket
   */
  constructor(io, socket) {
    super(io, socket)
    this
      .on('JOIN_ROOM', this.joinRoom)
      .on('NEXT_QUESTION', this.nextQuestion)
  }

  /**
   * Utilizes the socket to join a poll session room
   * @param {String} roomName
   *
   */
  joinRoom(roomName) {
    logger.log('someone is joining room', roomName)
    this.socket.join(roomName)
  }

  /**
   * Sends a message to all users in the room to navigate to the next indexed question
   * @param {Object} payload ex: {roomName: "room", index: 1 }
   */
  nextQuestion(payload) {
    logger.log('Next Question', payload)
    socketProvider.messageRoom(payload.roomName, 'RECIEVE_NEXT_QUESTION', payload)
  }
}
