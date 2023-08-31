import { getAgentApi } from "store/api/agents";
import {
  GET_AGENT_FAILURE,
  GET_AGENT_SUCCESS
} from "store/constants/agentConstants";
import { SUCCESSFUL } from "store/constants/statusCodes";

import { IAgent } from 'types/Agent';

const success = (agent: IAgent) => ({
  type: GET_AGENT_SUCCESS,
  agent,
});

const failure = (error: any) => ({
  type: GET_AGENT_FAILURE,
  error,
});

export const showAgentApi = (id: string) => (dispatch: any) => {
  getAgentApi(id)
    .then((response) => {
      if (response.status === SUCCESSFUL) {
        dispatch(success(response.data));
      } else {
        dispatch(failure(response));
      }
    })
    .catch((err) => {
      dispatch(failure(err));
    });
};
