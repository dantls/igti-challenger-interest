import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-box-base);
  border-radius: 8px;

  label{
    font-size: 1.4rem;
    margin-right: 0.5rem;
  }
  input{
    width: 15.6rem;
    height: 2.6rem;
    margin-top: 0.5rem;
    border-radius: 0.3rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    padding: 0 0.8rem;
  }
`;
