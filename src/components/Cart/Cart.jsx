import React from 'react';

export const Cart = ({ cart }) => {
  return (
    <>
      <ul>
        {cart.map(({ id, title, count, price }) => (
          <li key={id}>
            {title},{count},{price} total={count * price}{' '}
          </li>
        ))}
      </ul>
    </>
  );
};
