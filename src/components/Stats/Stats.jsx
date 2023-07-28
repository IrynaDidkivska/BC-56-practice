import { TodoList } from 'components/TodoList/TodoList';
import React from 'react';

export const Stats = ({ statistics, message }) => {
  // const {statistics, message} = props
  return (
    <div>
      <TodoList />
      <h1>{message}</h1>
      <ul>
        {statistics.map(({ id, title, count, user: { name, age } }) => (
          <li key={id}>
            <h1>tile:{title}</h1>
            <h2>count:{count}</h2>
            <p>{name}</p>
            <p>{age}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};
