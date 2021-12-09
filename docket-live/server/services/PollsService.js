import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class PollsService {
  async createPoll(body) {
    const poll = await dbContext.Polls.create(body)
    if (!poll) {
      throw new BadRequest('Could not create')
    }
    return poll
  }

  async getAllPolls(query = {}) {
    const polls = await dbContext.Polls.find(query)
    // TODO check role to return all polls
    return polls
  }
}

export const pollsService = new PollsService()
