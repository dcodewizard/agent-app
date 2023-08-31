import React from 'react';
import { MouseEventHandler, ReactElement } from 'react';

interface ButtonProps {
  className: string;
  buttonText: string;
  icon: ReactElement;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { className, buttonText, icon , onClick } = props;

  return (
    <button className={className} onClick={onClick}>
      {icon} {buttonText}
    </button>
  );
};

export default Button;
