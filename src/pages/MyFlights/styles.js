import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Profile = styled.div`
  display: flex;
  background: var(--color-white);
  padding: 10px 15px;
  border-radius: 5px;
  margin-top: 15px;

  img {
    width: 128px;
    height: 128px;
    border-radius: 50%;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 15px;

  span {
    color: var(--color-font-primary);
    font-size: 1.8rem;
  }
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
