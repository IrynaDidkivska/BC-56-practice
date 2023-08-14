import React from 'react';

export const TodoList = () => {
  return (
    <div>
      <h1>Best todo ever</h1>
      <ul>
        {[].map(item => (
          <li key={item.id}>
            {item.title} <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
