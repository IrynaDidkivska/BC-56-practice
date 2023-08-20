import React, { useState } from 'react';

export const LoginForm = () => {
  const [userName, setUserName] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={({ target: { value } }) => setUserName(value)}
      />
      <button>Log In</button>
    </form>
  );
};
