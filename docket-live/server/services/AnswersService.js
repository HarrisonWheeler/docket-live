import { BadRequest } from '@bcwdev/auth0provider/lib/Errors'
import { dbContext } from '../db/DbContext'

class AnswersService {
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
