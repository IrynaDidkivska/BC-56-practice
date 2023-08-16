import { AddPostForm } from 'Components/AddPostForm';
import React from 'react';
import { PostList } from '../Components/PostList';
import { PostFilter } from 'Components/PostFilter';

export const Home = () => {
  return (
    <div>
      <AddPostForm />
      <PostList />
    </div>
  );
};
