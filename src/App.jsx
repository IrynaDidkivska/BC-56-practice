//1. Створити публічний та приватний роут
//2. Додати можливість рефрешу
//3. Зробити заглушку
//4. Редірект

import { Layout } from 'Components/Layout';
import { Home } from 'pages/Home';
import { LoginForm } from 'pages/LoginForm';
import { NotFound } from 'pages/NotFound';
import { Register } from 'pages/Register';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
