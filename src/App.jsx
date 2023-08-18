import { Layout } from 'Components/Layout';
import { FavouritePosts } from 'pages/FavouritePosts';
import { Home } from 'pages/Home';
import { LoginForm } from 'pages/LoginForm';
import { NotFound } from 'pages/NotFound';
import CreatePost from 'pages/CreatePost';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLogin } from 'redux/selectors';

// Зробити лічильник улюблених над посиланням - Oleh
// Зробити логін окремо - Ira
// Винести форму додавання на окремий роут - Natali
// Організувати видалення з улюблених - Taras
// Додати можливість вибрати категорію поста через селект //

export const App = () => {
  const isLogin = useSelector(selectLogin);

  return !isLogin ? (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="liked" element={<FavouritePosts />} />
        <Route path="post" element={<CreatePost />} />
      </Route>
      <Route path="/login" element={<LoginForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
