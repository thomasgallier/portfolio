import React from 'react';
import ReactDOM from 'react-dom';

import './css/style.css';
import './css/reset.css';

import Home from './screen/Home';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(console.log);
