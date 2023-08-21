import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginThunk } from 'redux/operations';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';
export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(loginThunk({ email, password }));
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <motion.div
          initial={{ opacity: 0, y: '-200%' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: 'backInOut', duration: 0.8 }}
        >
          <motion.input
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, ease: 'backInOut', duration: 0.5 }}
            placeholder="Email..."
            type="email"
            onChange={({ target: { value } }) => setEmail(value)}
          />
          <motion.input
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, ease: 'backInOut', duration: 0.8 }}
            placeholder="Password..."
            type="password"
            onChange={({ target: { value } }) => setPassword(value)}
          />
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, ease: 'backInOut', duration: 0.1 }}
          >
            Log In
          </motion.button>
          <motion.h3
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, ease: 'backInOut', duration: 0.8 }}
          >
            You don't have an account? Let's{' '}
            <Link to="/register">Create it!</Link>
          </motion.h3>
        </motion.div>
      </Form>
    </>
  );
};

export const Form = styled.form`
  min-height: 100vh;
  display: flex;
  background: linear-gradient(
    112.1deg,
    rgb(32, 38, 57) 11.4%,
    rgb(63, 76, 119) 70.2%
  );
  justify-content: center;
  align-items: center;
  input {
    box-shadow: 0px 0px 1px 2px black;
    font-size: 1.5rem;
    padding: 5px;
    border: none;
  }

  div {
    padding: 40px 50px;
    backdrop-filter: blur(10%);
    box-shadow: 0px 0px 15px 2px black;
    display: flex;
    gap: 10px;
    flex-direction: column;
    h3 {
      margin: 10px 0;
      color: white;
      a {
        color: #07f407;
      }
    }
    button {
      border: none;
      box-shadow: 0px 0px 1px 1px black;

      color: white;
      background-color: transparent;
      padding: 8px 16px;
      transition: all 0.3s linear;
      &:hover {
        background-color: black;
        color: teal;
        box-shadow: 0px 0px 5px 4px black;
        cursor: pointer;
      }
    }
  }
`;
