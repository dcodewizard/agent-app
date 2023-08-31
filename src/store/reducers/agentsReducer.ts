import {
  CREATE_AGENT_SUCCESS,
  CREATE_AGENT_FAILURE,
  LIST_AGENT_FAILURE,
  LIST_AGENT_SUCCESS,
  GET_AGENT_SUCCESS,
  GET_AGENT_FAILURE,
} from 'store/constants/agentConstants';
import { AgentState } from 'types/Agent';

const initialState = {
  agent: {},
  isLoading: false,
  agents: [],
  totalCount: 0,
};

export const agentsReducer = (state = initialState, action: AgentState) => {
  switch (action.type) {
    case CREATE_AGENT_SUCCESS:
      return {
        ...state,
        agent: action.agent
      };

    case CREATE_AGENT_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    case LIST_AGENT_SUCCESS:
      return {
        ...state,
        agents: action.agents,
        totalCount: action.totalPageCount,
      };

    case LIST_AGENT_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    case GET_AGENT_SUCCESS:
      return {
        ...state,
        agent: action.agent,
      };

    case GET_AGENT_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};
