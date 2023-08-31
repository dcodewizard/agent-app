import { combineReducers } from 'redux';
import { agentsReducer } from './agentsReducer';
import { AgentState } from 'types/Agent';

export interface RootState {
  data: AgentState;
}

const rootReducer = combineReducers({
  data: agentsReducer,
});

export default rootReducer;