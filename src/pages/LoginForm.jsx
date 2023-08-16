import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/userSlice';

export const LoginForm = () => {
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn(userName));
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
