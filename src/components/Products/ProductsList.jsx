import React from 'react';

export const ProductsList = ({ produts }) => {
  return (
    <div>
      <ul>
        {produts.map(({ name, price, id }) => (
          <li key={id}>
            {name} = {price}$
          </li>
        ))}
      </ul>
    </div>
  );
};
