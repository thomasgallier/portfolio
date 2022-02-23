import React from 'react';
import ReactDOM from 'react-dom';

import './css/reset.css';
import './css/style.css';

import Home from './Home';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(console.log);
