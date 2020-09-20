import React from 'react';
import PropTypes from 'prop-types';
import { IoMdCloseCircleOutline } from 'react-icons/io';

import { Container, NavLinkCustom } from './styles';

export default function MobileNavBar({ handleMenuVisibility, isVisible }) {
  return (
    <Container isVisible={isVisible}>
      <NavLinkCustom to="/home" onClick={handleMenuVisibility}>
        Home
      </NavLinkCustom>
      <NavLinkCustom to="/myflights" onClick={handleMenuVisibility}>
        My Flights
      </NavLinkCustom>

      <IoMdCloseCircleOutline
        onClick={handleMenuVisibility}
        size={60}
        color="#fff"
      />
    </Container>
  );
}

MobileNavBar.propTypes = {
  handleMenuVisibility: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
};

MobileNavBar.defaultProps = {
  isVisible: false,
};
