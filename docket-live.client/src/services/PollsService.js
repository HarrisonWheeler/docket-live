import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class PollsService{
  async getPolls(){
    const res = await api.get('api/polls')
    logger.log(res.data)
    AppState.polls = res.data
  }
}


export const pollsService = new PollsService()
