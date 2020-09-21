import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const LoginFormContainer = styled.div`
  padding: 40px 32px;
  width: 100%;
  max-width: 448px;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    label {
      font-size: 1.4rem;
      font-weight: 600;
      color: var(--color-white);
      margin-bottom: 4px;
    }

    input {
      height: 40px;
      padding: 8px;
      border: 1px solid #424242;
      border-radius: 5px;
    }

    button {
      height: 40px;
      border: 0;
      background: var(--color-button-unhovered);
      color: #fff;
      border-radius: 5px;
      font-size: 1.4rem;
      font-weight: 600;
      transition: all ease 0.2s;

      &:hover {
        box-shadow: var(--box-shadow);
        background: var(--color-button-hovered);
      }
    }
  }
`;

export const LoginHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  img {
    height: 128px;
    width: 128px;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-style: bold;
  margin-left: 10px;
  color: var(--color-white);
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;

  span {
    color: red;
    font-weight: 600;
    font-size: 1.4rem;
    margin: 5px 0 0 5px;
  }
`;
