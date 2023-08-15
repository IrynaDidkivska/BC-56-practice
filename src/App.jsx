import { AddPostForm } from 'Components/AddPostForm';
import { LoginForm } from 'Components/LoginForm';
import { PostList } from 'Components/PostList';
import React from 'react';

export const App = () => {
  return (
    <div>
      <LoginForm />
      <hr />
      <br />
      <AddPostForm />
      <PostList />
    </div>
  );
};
