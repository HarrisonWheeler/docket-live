import { Unauthorized } from '@bcwdev/auth0provider/lib/Errors'
import { dbContext } from '../db/DbContext.js'

// IMPORTANT profiles should not be updated or modified in any way here. Use the AccountService

class ProfileService {
  async checkUserRole(userId) {
    const user = await dbContext.Account.findOne({ _id: userId })
    if (user.role !== 'staff') {
      throw new Unauthorized('Only staff can alter polls')
    }
  }

  async addStaffMember(newStaffMember, currentStaffMember) {
    const staffMember = await dbContext.Account.findOne({ _id: currentStaffMember })
    if (staffMember.role !== 'staff') {
      throw new Unauthorized('Only staff members may grant this permission')
    }
    const newStaff = await dbContext.Account.findOne({ _id: newStaffMember })
    newStaff.role = 'staff'
    return await dbContext.Account.findOneAndUpdate({ _id: newStaff.id }, newStaff, { new: true })
  }

  /**
    * Returns a user profile from its id
    * @param {string} id
   */
  async getProfileById(id) {
    const profile = await dbContext.Profiles.findById(id)
    return profile
  }

  /**
    * Returns a list user profiles from a query search of name likeness
    * limits to first 20 without offset
    * @param {string} name
   */
  async findProfiles(name = '', offset = 0) {
    const filter = new RegExp(name, 'ig')
    return await dbContext.Profiles
      .aggregate([{
        $match: { name: filter }
      }])
      .collation({ locale: 'en_US', strength: 1 })
      .skip(Number(offset))
      .limit(20)
      .exec()
  }
}

export const profileService = new ProfileService()
