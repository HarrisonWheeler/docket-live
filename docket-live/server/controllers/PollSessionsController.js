import { Auth0Provider } from '@bcwdev/auth0provider'
import { pollSessionsService } from '../services/PollSessionsService'
import BaseController from '../utils/BaseController'
import { checkRole } from '../utils/CheckRole'

export class PollSessionsController extends BaseController {
  constructor() {
    super('api/pollSessions')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getPollSessions)
      .get('/:id', this.getPollSessionById)
      .use(checkRole)
      .post('', this.createPollSession)
      .put('/:id', this.editPollSession)
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

  async createPollSession(req, res, next) {
    try {
      req.body.userId = req.userInfo.id
      const session = await pollSessionsService.createSession(req.body)
      res.send(session)
    } catch (error) {
      next(error)
    }
  }

  async editPollSession(req, res, next) {
    try {
      req.body.id = req.params.id
      const session = await pollSessionsService.editPollSession(req.body)
      res.send(session)
    } catch (error) {
      next(error)
    }
  }
}
