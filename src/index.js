import React from 'react';
import ReactDOM from 'react-dom';
import Application from './pages/Application';
import './i18n';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById('root')
);
