import React from 'react';
// import { ParcelProps } from '../../utils/interest';

import { Container } from './styles';

interface InstallmentProps {
  children: any;
}

const Installments: React.FC<InstallmentProps> = ({ children }) => (
  <Container>
    {children}
  </Container>
);

export default Installments;
