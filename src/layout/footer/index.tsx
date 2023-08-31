import React from 'react';

interface FooterProps {
  title: string;
}

const Footer: React.FC<FooterProps> = ({ title }) => {
  return (
    <footer className='bg-dark text-center text-lg-start text-white footer'>
      <div className='text-center p-3'>
        {title} © 2023 Copyright: Agents App
      </div>
    </footer>
  );
};

export default Footer;
