import { dbContext } from '../db/DbContext'

class PollSessionsService {
  async getSessions(query = {}) {
    const sessions = await dbContext.PollSessions.find(query)
    return sessions
  }
}

export const pollSessionsService = new PollSessionsService()
