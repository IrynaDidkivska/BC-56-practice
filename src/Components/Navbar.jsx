import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Flex } from './AddPostForm';
import { useDispatch, useSelector } from 'react-redux';
import { selectLikedPostsCount, selectLikedPostsCount2 } from 'redux/selectors';
import { styled } from 'styled-components';
import { logOut } from 'redux/userSlice';

export const Navbar = () => {
  const likedPostsCount = useSelector(selectLikedPostsCount);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <Flex>
      <NavLink to="/">Home</NavLink>
      <NavLinkStyled to="/liked">
        Liked <LikedCounterStyled>{likedPostsCount}</LikedCounterStyled>
      </NavLinkStyled>
      <Button onClick={handleLogout}>Logout</Button>
    </Flex>
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
