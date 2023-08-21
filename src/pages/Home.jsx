import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { loginThunk, regThunk } from 'redux/operations';
import { styled } from 'styled-components';

export const Home = () => {
  const dispatch = useDispatch();
  const credentials = {
    name: 'Petro',
    email: 'Petro100500@mail.com',
    password: 'qwerty123',
  };

  const handleLogin = () => {
    dispatch(
      loginThunk({ email: credentials.email, password: credentials.password })
    );
  };
  return (
    <>
      <div>
        <button onClick={() => dispatch(regThunk(credentials))}>
          Register
        </button>
      </div>
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </>
  );
};
