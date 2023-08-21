import React from 'react';
import { Navbar } from './Navbar';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

export const Layout = () => {
  return (
    <Wrapper>
      <Navbar />
      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
`;
