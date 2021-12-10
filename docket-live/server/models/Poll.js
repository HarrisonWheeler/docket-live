import { Schema } from 'mongoose'

export const Poll = new Schema({
  title: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, required: true }

},
{ timestamps: true, toJSON: { virtuals: true } })

Poll.virtual('creator', {
  localField: 'userId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})
