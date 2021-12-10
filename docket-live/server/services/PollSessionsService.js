import { BadRequest } from '@bcwdev/auth0provider/lib/Errors'
import { dbContext } from '../db/DbContext'

class PollSessionsService {
  async getSessions(query = {}) {
    const sessions = await dbContext.PollSessions.find(query).populate('poll')
    return sessions
  }

  async getPollSessionById(id) {
    const session = await dbContext.PollSessions.findOne({ _id: id }).populate('poll')
    if (!session) {
      throw new BadRequest('No Session Found')
    }
    return session
  }

  async createSession(body) {
    const session = await dbContext.PollSessions.create(body)
    if (!session) {
      throw new BadRequest('Could Not Create Session')
    }
    await session.populate('poll')
    return session
  }
}

export const pollSessionsService = new PollSessionsService()
