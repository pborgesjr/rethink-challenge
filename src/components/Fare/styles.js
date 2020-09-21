import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  background: ${(props) =>
    props.isSelected && 'linear-gradient(to right, #34b1e3, #24708f)'};

  li {
    font-size: 1.8rem;
    color: ${(props) => (props.isSelected ? '#fff' : '#424242')};
  }

  &:hover {
    background: linear-gradient(to right, #34b1e3, #24708f);
    box-shadow: 0px 0px 8px 1px rgba(133, 133, 133, 0.75);

    li {
      color: #fff;
    }
  }
`;
