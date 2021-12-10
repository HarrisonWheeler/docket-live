import { Schema } from 'mongoose'

export const PollSession = new Schema({
  pollId: { type: Schema.Types.ObjectId, ref: 'Poll', required: true },
  className: { type: String, required: true },
  isActive: { type: Boolean, default: false },
  isLive: { type: Boolean, default: false }

},
{ timestamps: true, toJSON: { virtuals: true } })

PollSession.virtual('poll', {
  localField: 'pollId',
  foreignField: '_id',
  justOne: true,
  ref: 'Poll'

})
