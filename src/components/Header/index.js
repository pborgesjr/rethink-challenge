import React, { useState } from 'react';
import { MdReorder } from 'react-icons/md';

import { logout } from '~/queries/user';

import {
  Container,
  Left,
  Button,
  Title,
  DesktopNavBar,
  NavLinkCustom,
} from './styles';
import logo from '~/assets/logo.svg';
import MobileNavBar from '~/components/MobileNavBar';

function Header() {
  const [menuVisibility, setMenuVisibility] = useState(false);

  function handleMenuVisibility() {
    setMenuVisibility(!menuVisibility);
  }

  function handleLogout() {
    logout();
  }

  return (
    <Container>
      <Left>
        <img src={logo} alt="logo" />
        <Title>rethink passagens</Title>
      </Left>

      <Button type="button" onClick={handleMenuVisibility}>
        <MdReorder size={48} color="#34b1e3" />
      </Button>

      <DesktopNavBar>
        <NavLinkCustom to="/home">Início</NavLinkCustom>
        <NavLinkCustom to="/myflights">Meus vôos</NavLinkCustom>
        <button type="button" onClick={handleLogout}>
          Sair
        </button>
      </DesktopNavBar>

      <MobileNavBar
        handleMenuVisibility={handleMenuVisibility}
        isVisible={menuVisibility}
      />
    </Container>
  );
}

export default Header;
