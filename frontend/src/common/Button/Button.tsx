import React from 'react';
import './button.css';

interface ButtonProps {
  text: string;
  onClick: () => void;
  id: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, id }) => {
  return (
    <button id={id} onClick={onClick}>
      <span>+</span>
      {text}
    </button>
  );
};

export default Button;

