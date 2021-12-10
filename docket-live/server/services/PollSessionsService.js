import { BadRequest } from '@bcwdev/auth0provider/lib/Errors'
import { dbContext } from '../db/DbContext'

class PollSessionsService {
  async getSessions(query = {}) {
    const sessions = await dbContext.PollSessions.find(query)
    return sessions
  }

  async getPollSessionById(id) {
    const session = await dbContext.PollSessions.findOne({ _id: id })
    if (!session) {
      throw new BadRequest('No Session Found')
    }
    return session
  }
}

export const pollSessionsService = new PollSessionsService()
