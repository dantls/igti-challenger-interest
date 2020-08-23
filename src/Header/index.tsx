import React from 'react';
import { Container } from './styles';

interface HeaderProps {
  title: string;
}

const Home: React.FC<HeaderProps> = ({ title }) => (
  <Container>
    <h1>{title}</h1>
  </Container>
);

export default Home;
