import React from 'react';
import ReactDOM from 'react-dom';

import './css/style.css';
import './css/reset.css';

import Home from './screen/Home';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCkjw_e7_vdseDwokh4mqBBY7V1nBxWoFc",
    authDomain: "thomasgallierportfolio.firebaseapp.com",
    projectId: "thomasgallierportfolio",
    storageBucket: "thomasgallierportfolio.appspot.com",
    messagingSenderId: "528493861726",
    appId: "1:528493861726:web:c5d909640770a3241f4dcf",
    measurementId: "G-KHTV48Z7RX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(console.log);
