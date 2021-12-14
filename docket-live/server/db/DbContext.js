import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { Answer } from '../models/Answer'
import { Poll } from '../models/Poll'
import { PollSession } from '../models/PollSession'

class DbContext {
  Polls = mongoose.model('Poll', Poll)

  PollSessions = mongoose.model('PollSession', PollSession)

  Answers = mongoose.model('Answer', Answer)
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
}

export const dbContext = new DbContext()
