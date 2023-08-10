import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout';
import { About } from 'Pages/About';
import { Home } from 'Pages/Home';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
};
