import { Auth0Provider } from '@bcwdev/auth0provider'
import { pollSessionsService } from '../services/PollSessionsService'
import BaseController from '../utils/BaseController'

export class PollSessionsController extends BaseController {
  constructor() {
    super('api/pollSessions')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getPollSessions)
      .get('/:id', this.getPollSessionById)
  }

  async getPollSessions(req, res, next) {
    try {
      const sessions = await pollSessionsService.getSessions(req.query)
      res.send(sessions)
    } catch (error) {
      next(error)
    }
  }

  async getPollSessionById(req, res, next) {
    try {
      const session = await pollSessionsService.getPollSessionById(req.params.id)
      res.send(session)
    } catch (error) {
      next(error)
    }
  }
}
