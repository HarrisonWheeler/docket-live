import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class PollsService{
  async getPolls(){
    const res = await api.get('api/polls')
    logger.log(res.data)
    AppState.polls = res.data
  }

  async editPoll(poll){
    const res = await api.put('api/polls/' + poll.id, poll)
    logger.log(res.data)
    const index = AppState.polls.findIndex(p => p.id === poll.id)
    AppState.polls.splice(index, 1, res.data)
  }
}


export const pollsService = new PollsService()
