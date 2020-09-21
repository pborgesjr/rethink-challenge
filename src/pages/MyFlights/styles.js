import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;
`;

export const Flight = styled.div`
  display: flex;
  justify-content: space-between;
  background: var(--color-white);
  border-radius: 5px;
  margin-top: 15px;
  padding: 10px 15px;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: var(--box-shadow);
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 1.5rem;
  }
`;

export const DescriptionSpan = styled.span`
  font-weight: 600;
`;

export const ValueSpan = styled.span``;
