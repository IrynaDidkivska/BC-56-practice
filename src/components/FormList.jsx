import React from 'react';

export const FormList = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map(({ name, price, id }) => (
        <li key={id}>
          <p>{name}</p>
          <p>{price}$</p>
          <button onClick={() => onDelete(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
