import { Layout } from 'Components/Layout';
import { FavouritePosts } from 'pages/FavouritePosts';
import { Home } from 'pages/Home';
import { LoginForm } from 'pages/LoginForm';
import { NotFound } from 'pages/NotFound';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Зробити лічильник улюблених над посиланням - Oleh
// Зробити логін окремо
// Винести форму додавання на окремий роут
// Організувати видалення з улюблених - Taras
// Додати можливість вибрати категорію поста через селект

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="liked" element={<FavouritePosts />} />
      </Route>
      <Route path="login" element={<LoginForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
