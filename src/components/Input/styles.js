import styled from 'styled-components';

export const Wrapper = styled.div``;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 0 5px;
  background: var(--color-white);

  span {
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--color-font-secondary);
  }

  input {
    height: 40px;
    max-width: 200px;
    font-size: 2rem;
    border: 0;
    background: var(--color-white);
    color: var(--color-font-primary);
  }
`;
