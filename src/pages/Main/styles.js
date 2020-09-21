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
    color: #424242;
  }

  label {
    margin-left: 10px;
    font-size: 1.4rem;
    font-weight: 600;
    color: #212121;
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
  background: #30ab51;
  font-size: 2rem;
  border-radius: 5px;
  color: #fff;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: #237a3b;
  }
`;
