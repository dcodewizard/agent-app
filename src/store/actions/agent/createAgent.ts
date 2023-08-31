import { createAgentApi } from "store/api/agents";
import {
  CREATE_AGENT_FAILURE,
  CREATE_AGENT_SUCCESS
} from "store/constants/agentConstants";
import { CREATED } from "store/constants/statusCodes";

import { IAgent } from 'types/Agent';

const success = (agent: IAgent) => ({
  type: CREATE_AGENT_SUCCESS,
  agent,
});

const failure = (error: any) => ({
  type: CREATE_AGENT_FAILURE,
  error,
});

export const createAgent = (agent: any, setShowModal: any, setLoader: any, toast: any) => (dispatch: any) => {
  createAgentApi(agent)
  .then((response) => {
    const { data } = response;
    if (response.status === CREATED) {
      dispatch(success(data.agent));
      toast.success(data.message)
    } else {
      dispatch(failure(data.error));
      toast.error(data.error)
    }
  })
  .catch((err) => {
    dispatch(failure(err));
  }).finally(() => {
    setShowModal(false);
    setLoader(false);
  })
};



