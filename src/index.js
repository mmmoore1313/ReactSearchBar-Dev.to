import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import App from './App.jsx'
import reportWebVitals from './reportWebVitals';

import { HashRouter } from 'react-router-dom'

const appJsx = (
  <HashRouter>
    <App />
  </HashRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
