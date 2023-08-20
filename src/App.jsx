import { Layout } from 'Components/Layout';
import { Home } from 'pages/Home';
import { LoginForm } from 'pages/LoginForm';
import { NotFound } from 'pages/NotFound';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/login" element={<LoginForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
