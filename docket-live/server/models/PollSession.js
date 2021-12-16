import { Schema } from 'mongoose'
import { generateCode } from '../utils/GenerateSessionCode'

export const PollSession = new Schema({
  pollId: { type: Schema.Types.ObjectId, ref: 'Poll', required: true },
  userId: { type: Schema.Types.ObjectId, required: true },
  className: { type: String, required: true },
  isActive: { type: Boolean, default: false },
  isLive: { type: Boolean, default: false },
  // TODO make sure this is working
  sessionCode: { type: String, default: generateCode() }

},
{ timestamps: true, toJSON: { virtuals: true } })

PollSession.virtual('poll', {
  localField: 'pollId',
  foreignField: '_id',
  justOne: true,
  ref: 'Poll'

})

PollSession.virtual('creator', {
  localField: 'userId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})
