import React, { useEffect } from 'react';
import { PostList } from '../Components/PostList';
import { useDispatch } from 'react-redux';
import { fetchPostsThunk } from 'redux/operations';
import { Button } from 'Components/AddPostForm';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsThunk());
  }, [dispatch]);
  const navigate = useNavigate();
  return (
    <div>
      <ButtonCreate onClick={() => navigate('post')}> Create Post</ButtonCreate>
      <br />
      <PostList />
    </div>
  );
};

const ButtonCreate = styled(Button)`
  margin: 40px 0;
`;
