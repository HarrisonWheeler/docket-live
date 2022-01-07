import { SocketHandler } from '../utils/SocketHandler'

export class SocketPollHandler extends SocketHandler {
  /**
   * @param {import("socket.io").Server} io
   * @param {import("socket.io").Socket} socket
   */
  constructor(io, socket) {
    super(io, socket)
    this
      .on('JOIN_ROOM', this.joinRoom)
  }

  joinRoom(roomName) {
    this.socket.join(roomName)
  }
}
