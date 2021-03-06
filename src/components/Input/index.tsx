import React, { InputHTMLAttributes } from 'react';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => (
  <Container>
    <label htmlFor={name}>{label}</label>
    <input type="number" id={name} {...rest} />
  </Container>
);

export default Input;
