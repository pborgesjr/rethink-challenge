import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 5px;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 64px;
    width: 64px;
  }
`;

export const Button = styled.button`
  display: none;
  border: 0;
  background: transparent;

  @media (max-width: 1000px) {
    display: unset;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-left: 10px;
  color: #212121;

  @media (max-width: 1000px) {
    font-size: 2rem;
  }
`;

export const DesktopNavBar = styled.div`
  display: flex;
  align-items: center;

  button {
    border: 0;
    background: transparent;
    font-size: 2rem;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const NavLinkCustom = styled(NavLink).attrs(() => ({
  activeStyle: { borderBottom: '1px solid #34b1e3', borderBottomWidth: '4px' },
}))`
  font-size: 2rem;
  color: #212121;

  & + a {
    margin: 0 10px;
  }
`;
