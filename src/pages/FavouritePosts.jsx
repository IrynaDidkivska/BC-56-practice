import { PostStyled } from 'Components/PostList';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteLikedPost } from 'redux/likedPostsSlice';
import { likedPosts } from 'redux/selectors';
import { styled } from 'styled-components';

export const FavouritePosts = () => {
  const likedPostsData = useSelector(likedPosts);
  const dispatch = useDispatch();
  return (
    <ListStyled>
      {likedPostsData.map(post => (
        <>
          <PostStyled key={post.id}>
            {post.title}

            <button onClick={() => dispatch(deleteLikedPost(post.id))}>
              Delete post
            </button>
          </PostStyled>
        </>
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
