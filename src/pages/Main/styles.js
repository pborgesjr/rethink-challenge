import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  form {
    width: 100%;
    max-width: 1300px;
  }
`;

export const RadioInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;

  input {
    width: 16px;
    height: 24px;
    color: var(--color-font-primary);
  }

  label {
    margin-left: 10px;
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--color-white);
  }

  label:nth-of-type(1) {
    margin-right: 15px;
  }
`;

export const DateInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  width: 150px;
  border: 0;
  background: var(--color-button-unhovered);
  font-size: 2rem;
  border-radius: 5px;
  color: var(--color-white);
  transition: background 0.2s ease-in-out;

  &:hover {
    background: var(--color-button-hovered);
    box-shadow: var(--box-shadow);
  }
`;
