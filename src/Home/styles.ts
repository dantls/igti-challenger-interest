import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

`;

export const Content = styled.main`
  h1 {
    text-align: center;
    margin-bottom: 3rem;
  }
  div {
    display: flex;
    justify-content: space-around;
  }

  background: var(--color-box-base);
  width: 100%;
  max-width: 74rem;
  border-radius: 0.8rem;
  margin: 0 auto;
  padding-top: 0rem;
  overflow: hidden;
`;
