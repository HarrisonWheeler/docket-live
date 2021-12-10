import { dbContext } from '../db/DbContext'

class QuestionsService {
  async getQuestionsByPollId(pollId) {
    const poll = await dbContext.Questions.find({ pollId: pollId })
    return poll
  }
}

export const questionsService = new QuestionsService()
