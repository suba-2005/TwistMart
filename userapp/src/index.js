// index.js or wherever you render your App
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './styles.css'; // Ensure styles are imported here

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
