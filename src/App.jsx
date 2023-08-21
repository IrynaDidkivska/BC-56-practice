// 1. Створити редакс папку, слайс, стор - Оля
// 2. Доєднати редакс до проекта - Оля
// 2.1 Логін санк, кнопка логін - Ігор
// 3. Зробити санки - Олексій
// 4. Зробити обробку санок - Олексій
// 5. Навігація
// 6. Дві сторінки

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
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
