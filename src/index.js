import React from 'react';
import ReactDOM from 'react-dom/client';
import { PageRouter } from './Routers/PageRouter';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PageRouter />
  </React.StrictMode>
);


