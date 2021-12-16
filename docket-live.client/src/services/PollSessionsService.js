import { AppState } from "../AppState"
import { PollSession } from "../models/PollSession"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class PollSessionsService{


  async getResults(){
    const res = await api.get('api/pollSessions')
    AppState.polls = res.data.map(s => new PollSession(s))
    logger.log(AppState.polls)
  }

  async createPollSession(newPollSession){
    const res = await api.post('api/pollSessions', newPollSession)
    logger.log(res.data)
  }
}



export const pollSessionsService = new PollSessionsService()
