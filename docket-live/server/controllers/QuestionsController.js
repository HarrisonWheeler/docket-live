import { Auth0Provider } from '@bcwdev/auth0provider'
import { questionsService } from '../services/QuestionsService'
import BaseController from '../utils/BaseController'

export class QuestionsController extends BaseController {
  constructor() {
    super('api/questions')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:id', this.getQuestionById)
      .post('', this.createQuestion)
  }

  async getQuestionById(req, res, next) {
    try {
      const question = await questionsService.getQuestionById(req.params.id)
      res.send(question)
    } catch (error) {
      next(error)
    }
  }

  async createQuestion(req, res, next) {
    try {
      req.body.id = req.params.id
      req.body.userId = req.userInfo.id
      const question = await questionsService.create(req.body)
      res.send(question)
    } catch (error) {
      next(error)
    }
  }
}
