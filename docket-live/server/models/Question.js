import { Schema } from 'mongoose'

export const Question = new Schema({
  body: { type: String, required: true },
  pollId: { type: Schema.Types.ObjectId, required: true, ref: 'Poll' },
  choices: { type: [Object], default: [{ content: 'Great', value: 2 }, { content: 'Ok', value: 1 }, { content: 'Struggling', value: -1 }, { content: 'Totally Lost', value: -2 }] }
},
{ timestamps: true, toJSON: { virtuals: true } })

Question.virtual('poll', {
  localField: 'pollId',
  foreignField: '_id',
  justOne: true,
  ref: 'Poll'

})
