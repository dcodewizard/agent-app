import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { IAgent, AgentParams } from 'types/Agent';
import AgentList from 'components/Agents/List';
import AgentForm from 'components/Agents/Form';
import Button from 'components/Shared/Button';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import Modal from 'components/Shared/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { listAgents } from 'store/actions/agent/listAgents';
import { RootState } from 'store/reducers';
import AgentSearch from './Form/Search';
import AppLoader from 'components/Shared/AppLoader';
import { ToastContainer } from 'react-toastify';

const Agents: FC = () => {
  const [agents, setAgents] = useState<IAgent[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [loader, setLoader] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<AgentParams>({
    page: 1,
    search: ""
  });

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const dispatch: Dispatch<any> = useDispatch();

  const agentList = useSelector<RootState, any>((state) => state.data.agents);
  const { totalCount } = useSelector<RootState, any>((state) => state.data);
  const { agent } = useSelector<RootState, any>((state) => state.data);

  useEffect(() => {
    setLoader(true);
    dispatch(listAgents(currentPage, setLoader))
  },[currentPage, agent])

  useEffect(() => {
    if (agentList.length > 0)
      setAgents(agentList)
  },[agentList, totalCount])

  return (
    <div>
      {loader && <AppLoader />}
      <ToastContainer />
      {showModal && (
        <Modal showModal={showModal} onClose={() => setShowModal(false)}>
          <AgentForm setShowModal={setShowModal} setLoader={setLoader} />
        </Modal>
      )}

      <div className='heading'>
        <h1>List of All Agents</h1>
      </div>

      <div className='d-flex searchBar'>
        <AgentSearch
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setLoader={setLoader}
        />

        <Button
          className='btn btn-primary joinButton'
          buttonText='Join The Team'
          icon={<PersonAddAlt1Icon/>}
          onClick={handleButtonClick}
        />
      </div>

      <AgentList
        agents={agents}
        totalPages={totalCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setLoader={setLoader}
      />
    </div>
  );
};

export default Agents;
