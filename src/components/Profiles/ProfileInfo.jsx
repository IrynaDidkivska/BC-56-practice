import { TodoList } from 'components/TodoList/TodoList';
import React from 'react';

export const ProfileInfo = ({ name, email }) => {
  return (
    <div>
      <TodoList />
      <h1>name:{name}</h1>
      <h2>email:{email}</h2>
    </div>
  );
};
