import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router
import App from './App'; // Your main app component

ReactDOM.render(
  <Router> {/* Wrap your app with Router */}
    <App />
  </Router>,
  document.getElementById('root')
);
