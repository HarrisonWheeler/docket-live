import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class PollSessionsService{

  async createPollSession(newPollSession){
    const res = await api.post('api/pollSessions', newPollSession)
    logger.log(res.data)
  }
}



export const pollSessionsService = new PollSessionsService()
