import React from 'react';

export const TodoList = ({ data = [], onDelete }) => {
  return (
    <div>
      <h1>Best todo ever</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.title}{' '}
            <button
              onClick={() => {
                onDelete(item.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
