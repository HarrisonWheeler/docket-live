import { BadRequest } from '@bcwdev/auth0provider/lib/Errors'
import { dbContext } from '../db/DbContext'

class QuestionsService {
  async getQuestionsByPollId(pollId) {
    const questions = await dbContext.Questions.find({ pollId: pollId })
    return questions
  }

  async getQuestionById(id) {
    const question = await dbContext.Questions.findOne({ _id: id })
    if (!question) {
      throw new BadRequest('No Question Found')
    }
    return question
  }

  async create(body) {
    const question = await dbContext.Questions.create(body)
    if (!question) {
      throw new BadRequest('Could Not Create')
    }
    return question
  }

  async editQuestion(updatedQuestion) {
    const question = await this.getQuestionById(updatedQuestion.id)
    updatedQuestion.body = updatedQuestion.body == null ? question.body : updatedQuestion.body
    updatedQuestion.choices = updatedQuestion.choices == null ? question.choices : updatedQuestion.choices
    updatedQuestion.pollId = question.pollId
    const updated = await dbContext.Questions.findOneAndUpdate({ _id: question.id }, updatedQuestion, { new: true })
    if (!updated) {
      throw new BadRequest('Could Not Update')
    }
    return updated
  }

  async deleteQuestion(id) {
    await this.getQuestionById(id)
    return await dbContext.Questions.findOneAndDelete({ _id: id })
  }
}

export const questionsService = new QuestionsService()
