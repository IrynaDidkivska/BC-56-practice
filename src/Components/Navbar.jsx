import React from 'react';
import { NavLink } from 'react-router-dom';
import { Flex } from './AddPostForm';

export const Navbar = () => {
  return (
    <Flex>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/liked">Liked</NavLink>
    </Flex>
  );
};
