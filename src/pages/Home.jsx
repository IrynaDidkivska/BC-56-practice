import { AddPostForm } from 'Components/AddPostForm';
import React from 'react';
import { PostList } from '../Components/PostList';

export const Home = () => {
  return (
    <div>
      <AddPostForm />
      <PostList />
    </div>
  );
};
