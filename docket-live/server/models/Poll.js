import { Schema } from 'mongoose'
import { Question } from './Question'

export const Poll = new Schema({
  title: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, required: true },
  questions: { type: [Question] },
  week: { type: String }

},
{ timestamps: true, toJSON: { virtuals: true } })

Poll.virtual('creator', {
  localField: 'userId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})
