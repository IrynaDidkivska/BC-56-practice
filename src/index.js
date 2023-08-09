import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import { ThemeProvider } from 'styled-components';

import { App } from 'components/App';
import { theme } from 'styles/theme';
import { ContextProvider } from 'context/ContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <ThemeProvider theme={theme}>
      <App />
      <ToastContainer autoClose={1500} />
    </ThemeProvider>
  </ContextProvider>
);
