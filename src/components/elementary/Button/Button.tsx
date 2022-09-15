import { Children, Component } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import './Button.scss';

interface ButtonProps {
  text: string;
  type: string;
  clickHandler: (type: string) => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { text, type, clickHandler } = props;
  return (
    <div>
      <button className={type == 'primary'? 'primary-button': 'secondary-button'} onClick={() => clickHandler(type)}>
        {text}
      </button>
    </div>
  );
};

export default Button;
