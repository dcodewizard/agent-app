import { AgentParams, IAgent } from "types/Agent";
import { get, post } from "../axios";

const endpointURL = process.env.REACT_APP_BASE_URL;

export const createAgentApi = (body: IAgent) => {
  return post(`${endpointURL}/create-agent`, body);
}

export const listAgentsApi = (params: AgentParams) => {
  return get(`${endpointURL}/agents?page=${params.page}&search=${params.search}`);
}

export const getAgentApi = (params: string) => {
  return get(`${endpointURL}/show-agent/${params}`);
};
