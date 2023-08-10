import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

export const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
      <OutletStyled>
        <Outlet />
      </OutletStyled>
    </div>
  );
};

const OutletStyled = styled.div`
  border: 2px solid red;
  margin: 20px 20px;
  min-height: 50vh;
  max-width: 400px;
`;
