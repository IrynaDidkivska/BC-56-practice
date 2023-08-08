import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import { ThemeProvider } from 'styled-components';

import { App } from 'components/App';
import { theme } from 'styles/theme';
import { MyContext, contextValue } from 'context/myContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <MyContext.Provider value={contextValue}>
    <ThemeProvider theme={theme}>
      <App />
      <ToastContainer autoClose={1500} />
    </ThemeProvider>
  </MyContext.Provider>
);
