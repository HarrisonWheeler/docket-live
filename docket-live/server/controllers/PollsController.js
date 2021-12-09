import { Auth0Provider } from '@bcwdev/auth0provider'
import { pollsService } from '../services/PollsService'
import BaseController from '../utils/BaseController'

export class PollsController extends BaseController {
  constructor() {
    super('api/polls')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAllPolls)
  }

  async getAllPolls(req, res, next) {
    try {
      const polls = await pollsService.getAllPolls(req.query)
      res.send(polls)
    } catch (error) {
      next(error)
    }
  }
}
