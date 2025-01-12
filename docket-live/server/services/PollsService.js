
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
    return poll
  }

  async createPoll(body) {
    const polls = await dbContext.Polls.create(body)
    if (!polls) {
      throw new BadRequest('Could not create')
    }
    return polls
  }

  // FIXME[epic=PollEditing] editing a poll should no longer edit the original, instead it should create a copy of the master with the new changes
  async editPoll(body) {
    const orignalPoll = await this.getPollById(body.id)

    const edited = await dbContext.Polls.findOneAndUpdate({ _id: orignalPoll.id }, body, { new: true })
    if (!edited) {
      throw new BadRequest('Could Not Edit')
    }
    return edited
  }

  async deletePoll(id, userId) {
    const deleted = await dbContext.Polls.findOneAndDelete({ _id: id })
    if (!deleted) {
      throw new BadRequest('Could Not Delete')
    }
    return deleted
  }
}

export const pollsService = new PollsService()
