import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid var(--color-border);
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  background: ${(props) =>
    props.isSelected &&
    'linear-gradient(to right, var(--color-primary), var(--color-secondary))'};

  li {
    font-size: 1.8rem;
    color: ${(props) =>
      props.isSelected ? 'var(--color-white)' : 'var(--color-font-primary)'};
  }

  &:hover {
    background: linear-gradient(
      to right,
      var(--color-primary),
      var(--color-secondary)
    );
    box-shadow: var(--box-shadow);

    li {
      color: var(--color-white);
    }
  }
`;
