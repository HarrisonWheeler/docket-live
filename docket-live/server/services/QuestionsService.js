import { BadRequest } from '@bcwdev/auth0provider/lib/Errors'
import { dbContext } from '../db/DbContext'
import { pollsService } from './PollsService'

class QuestionsService {
  async getQuestionById(pollId, questionId) {
    const poll = await dbContext.Polls.find({ _id: pollId, 'questions._id': questionId }, { 'questions.$': 1, _id: questionId })

    return poll[0]
  }

  async create(body) {
    const poll = await pollsService.getPollById(body.pollId)
    poll.questions.push(body)
    poll.save()
    return poll
  }

  async editQuestion(updatedQuestion) {
    const question = await this.getQuestionById(updatedQuestion.pollId, updatedQuestion.id)
    updatedQuestion.body = updatedQuestion.body == null ? question.body : updatedQuestion.body
    updatedQuestion.choices = updatedQuestion.choices == null ? question.choices : updatedQuestion.choices
    updatedQuestion.pollId = question.pollId
    const updated = await dbContext.Polls.findOneAndUpdate({
      _id: question.pollId,
      'questions._id': question.id
    }, {
      $set: { 'questions.$': updatedQuestion }
    }
    )
    if (!updated) {
      throw new BadRequest('Could Not Update')
    }
    return updated
  }

  async deleteQuestion(pollId, questionId) {
    const question = await this.getQuestionById(pollId, questionId)
    await dbContext.Polls.updateMany({
      _id: pollId
    },
    {
      $pull: {
        questions: {
          _id: questionId

        }
      }
    })
    return question
  }
}

export const questionsService = new QuestionsService()
