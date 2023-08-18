import React from 'react';
import { NavLink } from 'react-router-dom';
import { Flex } from './AddPostForm';
import { useSelector } from 'react-redux';
import { selectLikedPostsCount, selectLikedPostsCount2 } from 'redux/selectors';
import { styled } from 'styled-components';

export const Navbar = () => {
  const likedPostsCount = useSelector(selectLikedPostsCount);
  return (
    <Flex>
      <NavLink to="/">Home</NavLink>
      <NavLinkStyled to="/liked">
        Liked <LikedCounterStyled>{likedPostsCount}</LikedCounterStyled>
      </NavLinkStyled>
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
