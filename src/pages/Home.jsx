import { AddPostForm } from 'Components/AddPostForm';
import React, { useEffect } from 'react';
import { PostList } from '../Components/PostList';
import { PostFilter } from 'Components/PostFilter';
import { useDispatch } from 'react-redux';
import { fetchPostsThunk } from 'redux/operations';

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsThunk());
  }, [dispatch]);
  return (
    <div>
      <AddPostForm />
      <PostList />
    </div>
  );
};
