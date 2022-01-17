import { Auth0Provider } from '@bcwdev/auth0provider'
import { answersService } from '../services/AnswersService'
import BaseController from '../utils/BaseController'

export class AnswersController extends BaseController {
  constructor() {
    super('api/answers')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAnwers)
      .post('', this.createAnswer)
      .delete('/:id', this.deleteAnswer)
  }

  async getAnwers(req, res, next) {
    try {
      req.query.playerId = req.userInfo.id
      res.send(await answersService.getAnwer(req.query))
    } catch (error) {
      next(error)
    }
  }

  async createAnswer(req, res, next) {
    try {
      req.body.playerId = req.userInfo.id
      const answer = await answersService.createAnswer(req.body)
      res.send(answer)
    } catch (error) {
      next(error)
    }
  }

  async deleteAnswer(req, res, next) {
    try {
      const answer = await answersService.deleteAnswer(req.params.id)
      res.send(answer)
    } catch (error) {
      next(error)
    }
  }
}
