export class PollSession{
  constructor(data){
    this.id = data.id
    this.pollId = data.pollId
    this.title = data.poll.title
    this.week = data.poll.week
    this.questions = data.poll.questions
    this.className = data.className
    this.isActive = data.isActive
    this.isLive = data.isLive
    this.sessionCode = data.sessionCode
    this.updatedAt = data.updatedAt
    this.createdAt = data.createdAt
  }
}
