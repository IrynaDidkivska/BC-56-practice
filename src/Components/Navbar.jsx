import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const Navbar = () => {
  const handleLogout = () => {};

  return (
    <div>
      <NavLink to="/">Home</NavLink>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

const NavLinkStyled = styled(NavLink)`
  position: relative;
`;
const LikedCounterStyled = styled.span`
  position: absolute;
  right: 50%;
  transform: translate(50%, -110%);
`;
