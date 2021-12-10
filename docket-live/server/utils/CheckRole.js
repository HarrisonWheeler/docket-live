import { Unauthorized } from '@bcwdev/auth0provider/lib/Errors'
import { logger } from './Logger'

export function checkRole(req, res, next) {
  logger.log('checking role for user', req.userInfo)
  if (!req.userInfo.roles.includes('staff')) {
    throw new Unauthorized('you are not authorized to do this')
  }
  next()
}
