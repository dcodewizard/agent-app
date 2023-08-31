import { listAgentsApi } from "store/api/agents";
import { 
  LIST_AGENT_FAILURE, 
  LIST_AGENT_SUCCESS 
} from "store/constants/agentConstants";
import { SUCCESSFUL } from "store/constants/statusCodes";

import { AgentParams, IAgent } from 'types/Agent';

const success = (
  agents: IAgent[], 
  totalPageCount: number
  ) => ({
  type: LIST_AGENT_SUCCESS,
  agents,
  totalPageCount
});

const failure = (error: any) => ({
  type: LIST_AGENT_FAILURE,
  error,
});

export const listAgents = (params: AgentParams, setLoader: any) => (dispatch: any) => {
  listAgentsApi(params)
  .then((response) => {
    if (response.status === SUCCESSFUL) {
      const {data} = response;
      dispatch(success(data.agents, data.totalPageCount));
    } else {
      dispatch(failure(response));
    }
  })
  .catch((err) => {
    dispatch(failure(err));
  }).finally(() => setLoader && setLoader(false));
};