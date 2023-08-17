import React from 'react';
import { useSelector } from 'react-redux';
import { likedPosts } from 'redux/selectors';
import { styled } from 'styled-components';

export const FavouritePosts = () => {
  const likedPostsData = useSelector(likedPosts);
  return (
    <ListStyled>
      {likedPostsData.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ListStyled>
  );
};

export const ListStyled = styled.ul`
  display: flex;
  max-width: 80vw;
  margin: 30px auto;
  flex-direction: column;
  gap: 20px;
`;
