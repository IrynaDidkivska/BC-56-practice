import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout';
import { About } from 'Pages/About';
import { Home } from 'Pages/Home';
import { Users } from 'Pages/Users';
import { NotFound } from 'Pages/NotFound';
import { User } from 'Pages/User';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<User />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
