import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk, regThunk } from 'redux/operations';
import { Form } from './LoginForm';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
    <Form onSubmit={handleSubmit}>
      <motion.div
        initial={{ opacity: 0, x: '-200%' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: 'backInOut', duration: 0.8 }}
      >
        <motion.input
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, ease: 'backInOut', duration: 0.8 }}
          placeholder="Name..."
          type="text"
          onChange={({ target: { value } }) => setName(value)}
        />
        <motion.input
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, ease: 'backInOut', duration: 0.8 }}
          placeholder="Email..."
          type="email"
          onChange={({ target: { value } }) => setEmail(value)}
        />
        <motion.input
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, ease: 'backInOut', duration: 0.8 }}
          placeholder="Password..."
          type="password"
          onChange={({ target: { value } }) => setPassword(value)}
        />
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          Register
        </motion.button>
        <motion.h3
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          You already have an account? Let's <Link to="/login">Sign in!</Link>
        </motion.h3>
      </motion.div>
    </Form>
  );
};
