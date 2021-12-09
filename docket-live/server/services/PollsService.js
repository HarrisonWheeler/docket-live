import { dbContext } from '../db/DbContext'

class PollsService {
  async getAllPolls(query = {}) {
    const polls = await dbContext.Polls.find(query)
    // TODO check role to return all polls
    return polls
  }
}

export const pollsService = new PollsService()
