import { Auth0Provider } from '@bcwdev/auth0provider'
import { pollSessionsService } from '../services/PollSessionsService'
import BaseController from '../utils/BaseController'

export class PollSessionsController extends BaseController {
  constructor() {
    super('api/pollSessions')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getPollSessions)
  }

  async getPollSessions(req, res, next) {
    try {
      const sessions = await pollSessionsService.getSessions(req.query)
      res.send(sessions)
    } catch (error) {
      next(error)
    }
  }
}
