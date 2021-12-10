import { Unauthorized } from '@bcwdev/auth0provider/lib/Errors'
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

  async editPoll(body) {
    const orignalPoll = await this.getPollById(body.id)
    // TODO make role check here instead
    if (orignalPoll.creatorId.toString() !== body.creatorId) {
      throw new Unauthorized('Acess Denied, you do not own this poll')
    }
    // TODO make role check here
    const edited = await dbContext.Polls.findOneAndUpdate({ _id: orignalPoll.id }, body, { new: true })
    if (!edited) {
      throw new BadRequest('Could Not Edit')
    }
    return edited
  }

  async deletePoll(id, userId) {
    // TODO cange this to role check
    const deleted = await dbContext.Polls.findOneAndDelete({ _id: id, creatorId: userId })
    if (!deleted) {
      throw new BadRequest('Could Not Delete')
    }
    return deleted
  }
}

export const pollsService = new PollsService()
