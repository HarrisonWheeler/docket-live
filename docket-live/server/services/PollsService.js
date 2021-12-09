import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class PollsService {
  async getAllPolls(query = {}) {
    const polls = await dbContext.Polls.find(query)
    // TODO check role to return all polls
    return polls
  }

  async getPollById(id) {
    const poll = await dbContext.Polls.findOne({ _id: id })
    if (!poll) {
      throw new BadRequest('Invalid Id')
    }

    // TODO check role
    return poll
  }

  async createPoll(body) {
    const polls = await dbContext.Polls.create(body)
    if (!polls) {
      throw new BadRequest('Could not create')
    }
    return polls
  }
}

export const pollsService = new PollsService()
