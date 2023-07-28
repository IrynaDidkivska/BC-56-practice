import React from 'react';

export const Modal = ({ children }) => {
  return (
    <div>
      <h1>Modal</h1>
      <hr />
      {children}
      <hr />
      <button>Close</button>
    </div>
  );
};
