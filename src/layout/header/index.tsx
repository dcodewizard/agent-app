import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className='header navbar navbar-expand-lg navbar-dark bg-dark'>
      <ul className='navbar-nav'>
        <span className='navbar-brand'>{title}</span>
      </ul>
    </header>
  );
};

export default Header;
