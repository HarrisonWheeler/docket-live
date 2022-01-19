import { BadRequest } from '@bcwdev/auth0provider/lib/Errors'
import { dbContext } from '../db/DbContext'

class AnswersService {
  async getByQuestionId(id) {
    const answers = await dbContext.Answers.find({ questionId: id })
    if (!answers) {
      throw new BadRequest('This Question Has No Answers Yet')
    }
    return answers
  }

  async getByPollSessionId(id) {
    const answers = await dbContext.Answers.find({ pollSessionId: id }).populate('question')
    if (!answers) {
      throw new BadRequest('This Question Has No Answers Yet')
    }
    return answers
  }

  async getAnswer(query = {}) {
    const answer = await dbContext.Answers.findOne(query)
    return answer
  }

  async createAnswer(body) {
    const answer = await dbContext.Answers.create(body)
    if (!body) {
      throw new BadRequest('Answer Could Not Be Created')
    }
    return answer
  }

  async deleteAnswer(id) {
    const answer = await dbContext.Answers.findOneAndDelete({ _id: id })
    if (!answer) {
      throw new BadRequest('Answer Could Not Be Deleted')
    }
    return answer
  }
}

export const answersService = new AnswersService()
