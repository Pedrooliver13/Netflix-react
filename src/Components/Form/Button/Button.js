import React from 'react';
import { ButtonElement } from './style';

const Button = ({ children, color }) => {
  return <ButtonElement color={color}>{children}</ButtonElement>;
};

export default Button;
