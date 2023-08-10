import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

export const Layout = () => {
  const pages = [
    { title: 'Home', src: '/' },
    { title: 'About', src: '/about' },
    { title: 'Users', src: '/users' },
  ];
  return (
    <div>
      <nav>
        <ul>
          {pages.map(page => (
            <li key={page.title}>
              <NavLink to={page.src}>{page.title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <OutletStyled>
        <Outlet />
      </OutletStyled>
    </div>
  );
};

const OutletStyled = styled.div`
  box-shadow: 2px 2px 3px 1px gray;
  min-height: 90vh;
`;
