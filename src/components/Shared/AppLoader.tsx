import React from 'react';
import { Puff } from 'react-loader-spinner';

const AppLoader: React.FC = () => {
  return (
    <div className='loader'>
      <Puff color="#273859" height={80} width={80} />
    </div>
  );
};

export default AppLoader;
