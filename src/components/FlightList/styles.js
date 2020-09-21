import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  padding-top: 50px;

  ul {
    display: flex;
    flex-direction: column;
  }
`;

export const Flight = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 5px;
  padding: 10px 15px;

  & + & {
    margin-top: 20px;
  }

  button {
    border: 0;
    background: #30ab51;
    color: #fff;
    font-size: 1.5rem;
    width: 100px;
    border-radius: 5px;
    height: 60px;
    transition: all 0.2s ease;

    &:hover {
      background: #237a3b;
      box-shadow: 0px 0px 8px 1px rgba(133, 133, 133, 0.75);
    }
  }
`;

export const FlightInfo = styled.div`
  flex: 1;
  padding-right: 45px;
`;

export const FlightItems = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;

  li {
    font-size: 1.8rem;
    color: #424242;
  }
`;
export const FareList = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #c4c4c4;
  padding-top: 20px;
`;
