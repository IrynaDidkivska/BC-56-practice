import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';

import { App } from 'App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <ToastContainer autoClose={1500} />
  </>
);
