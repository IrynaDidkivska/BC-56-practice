import React from 'react';
import { deleteTodo } from 'store/actions';

export const TodoList = ({ data, dispatch }) => {
  return (
    <div>
      <h1>Best todo ever</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.value}{' '}
            <button onClick={() => dispatch(deleteTodo(item.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
