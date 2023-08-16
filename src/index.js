import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import { ThemeProvider } from 'styled-components';

import { theme } from 'styles/theme';
import { App } from 'App';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="BC-56-practice">
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
        <ToastContainer autoClose={1500} />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);
