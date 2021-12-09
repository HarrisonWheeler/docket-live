import { Auth0Provider } from '@bcwdev/auth0provider'
import { pollsService } from '../services/PollsService'
import BaseController from '../utils/BaseController'

export class PollsController extends BaseController {
  constructor() {
    super('api/polls')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAllPolls)
      .get('/:id', this.getPollById)
      .post('', this.createPoll)
      .put('/:id', this.editPoll)
      .delete('/:id', this.deletePoll)
  }

  async getAllPolls(req, res, next) {
    try {
      const polls = await pollsService.getAllPolls(req.query)
      res.send(polls)
    } catch (error) {
      next(error)
    }
  }

  getPollById(arg0, getPollById) {
    throw new Error('Method not implemented.')
  }

  async createPoll(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      req.body.id = req.params.id
      const poll = await pollsService.createPoll(req.body)
      res.send(poll)
    } catch (error) {
      next(error)
    }
  }

  editPoll(arg0, editPoll) {
    throw new Error('Method not implemented.')
  }

  deletePoll(arg0, deletePoll) {
    throw new Error('Method not implemented.')
  }
}
