import { Auth0Provider } from '@bcwdev/auth0provider'
import { profileService } from '../services/ProfileService.js'
import BaseController from '../utils/BaseController'

export class ProfilesController extends BaseController {
  constructor() {
    super('api/profiles')
    this.router
      .get('', this.getProfiles)
      .get('/:id', this.getProfile)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .put('/:id', this.addStaffMember)
  }

  async addStaffMember(req, res, next) {
    try {
      const newStaffMember = await profileService.addStaffMember(req.params.id, req.userInfo.id)
      res.send(newStaffMember)
    } catch (error) {
      next(error)
    }
  }

  async getProfiles(req, res, next) {
    try {
      const profiles = await profileService.findProfiles(req.query.name, req.query.offset)
      res.send(profiles)
    } catch (error) {
      next(error)
    }
  }

  async getProfile(req, res, next) {
    try {
      const profile = await profileService.getProfileById(req.params.id)
      res.send(profile)
    } catch (error) {
      next(error)
    }
  }
}
