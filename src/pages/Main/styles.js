import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to right, #34b1e3, #24708f);
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
  justify-content: space-evenly;

  input {
    height: 40px;
    max-width: 200px;
    font-size: 2rem;
    border: 0;
    background: #fff;
    color: #424242;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #424242;
  border-radius: 5px;
  padding-left: 10px;
  background: #fff;

  label {
    font-size: 1.4rem;
    font-weight: 600;
    color: #212121;
  }
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
