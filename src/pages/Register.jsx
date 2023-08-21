import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk, regThunk } from 'redux/operations';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(regThunk({ name, email, password }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={({ target: { value } }) => setName(value)} />
      <input
        type="email"
        onChange={({ target: { value } }) => setEmail(value)}
      />
      <input
        type="password"
        onChange={({ target: { value } }) => setPassword(value)}
      />
      <button>Log In</button>
    </form>
  );
};
