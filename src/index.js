import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Store from './app/Store.js';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Toaster position='top-center' reverseOrder={false} />
      <App />
    </Provider>
  </React.StrictMode>
);
