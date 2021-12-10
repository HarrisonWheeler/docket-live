import { BadRequest } from '@bcwdev/auth0provider/lib/Errors'
import { dbContext } from '../db/DbContext'
import { profileService } from './ProfileService'

class QuestionsService {
  async getQuestionsByPollId(pollId) {
    const questions = await dbContext.Questions.find({ pollId: pollId })
    return questions
  }

  async create(body) {
    await profileService.checkUserRole(body.userId)
    const question = await dbContext.Questions.create(body)
    if (!question) {
      throw new BadRequest('Could not create')
    }
    return question
  }
}

export const questionsService = new QuestionsService()
