import { Dispatch, SetStateAction } from "react";
import { IReview } from "./Review";
export interface IAgent {
  id: string;
  firstName: string;
  lastName: string;
  photoUrl: string;
  agentLicense: string;
  address: string;
  practiceAreas?: string[];
  aboutMe: string;
  Reviews?: IReview[];
}

export interface FormValues {
  firstName: string;
  lastName: string;
  agentLicense: string;
  address: string;
  practiceAreas?: string[];
  aboutMe: string;
  photoUrl?: string;
}

export interface AgentProps {
  agent: IAgent;
}

export interface AgentListProps {
  agents: IAgent[];
  totalPages: number;
  currentPage: AgentParams;
  setCurrentPage: Dispatch<SetStateAction<AgentParams>>;
  setLoader: Dispatch<SetStateAction<boolean>>
}

export interface AgentState {
  agent: IAgent;
  agents: IAgent[];
  error: object;
  type: any;
  totalPageCount: number;
}

export interface AgentParams {
  search?: string;
  page?: number;
}

export interface SearchProps {
  currentPage: AgentParams;
  setCurrentPage: Dispatch<SetStateAction<AgentParams>>;
  setLoader: Dispatch<SetStateAction<boolean>>;
}

export interface AddAgentFormProps {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setLoader: Dispatch<SetStateAction<boolean>>;
}
