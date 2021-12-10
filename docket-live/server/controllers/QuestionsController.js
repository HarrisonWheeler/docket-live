import BaseController from '../utils/BaseController'

export class QuestionsController extends BaseController {
  constructor() {
    super('api/questions')
    this.router
      .post('', this.createQuestion)
  }

  createQuestion(arg0, createQuestion) {
    throw new Error('Method not implemented.')
  }
}
