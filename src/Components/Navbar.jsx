import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const Navbar = () => {
  const handleLogout = () => {};

  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>

      <button onClick={handleLogout}>Logout</button>
    </Nav>
  );
};
const Nav = styled.header`
  display: flex;
  gap: 40px;
  font-size: 1.5rem;
  background: linear-gradient(
    109.6deg,
    rgb(17, 247, 155) 11.2%,
    rgb(11, 132, 145) 91.1%
  );
  padding: 20px 20px;
`;
const NavLinkStyled = styled(NavLink)`
  position: relative;
`;
const LikedCounterStyled = styled.span`
  position: absolute;
  right: 50%;
  transform: translate(50%, -110%);
`;
