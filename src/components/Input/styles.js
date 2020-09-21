import styled from 'styled-components';

export const Wrapper = styled.div``;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 0 5px;
  background: #fff;

  span {
    font-size: 1.4rem;
    font-weight: 600;
    color: #212121;
  }

  input {
    height: 40px;
    max-width: 200px;
    font-size: 2rem;
    border: 0;
    background: #fff;
    color: #424242;
  }
`;
