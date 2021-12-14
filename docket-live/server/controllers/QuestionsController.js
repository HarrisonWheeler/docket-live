import { Auth0Provider } from '@bcwdev/auth0provider'
import { answersService } from '../services/AnswersService'
import { questionsService } from '../services/QuestionsService'
import BaseController from '../utils/BaseController'
import { checkRole } from '../utils/CheckRole'

export class QuestionsController extends BaseController {
  constructor() {
    super('api/questions')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:id', this.getQuestionById)
      .get('/:id/answers', this.getAnswersByQuestionId)
      .use(checkRole)
      .post('', this.createQuestion)
      .put('/:id', this.editQuestion)
      .delete('/:id', this.deleteQuestion)
  }

  async getQuestionById(req, res, next) {
    try {
      const question = await questionsService.getQuestionById(req.params.id)
      res.send(question)
    } catch (error) {
      next(error)
    }
  }

  async getAnswersByQuestionId(req, res, next) {
    try {
      const answers = await answersService.getByQuestionId(req.params.id)
      res.send(answers)
    } catch (error) {
      next(error)
    }
  }

  async createQuestion(req, res, next) {
    try {
      req.body.userId = req.userInfo.id
      const question = await questionsService.create(req.body)
      res.send(question)
    } catch (error) {
      next(error)
    }
  }

  async editQuestion(req, res, next) {
    try {
      req.body.userId = req.userInfo.id
      req.body.id = req.params.id
      const question = await questionsService.editQuestion(req.body)
      res.send(question)
    } catch (error) {
      next(error)
    }
  }

  async deleteQuestion(req, res, next) {
    try {
      const question = await questionsService.deleteQuestion(req.params.id)
      res.send(question)
    } catch (error) {
      next(error)
    }
  }
}
