import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Notifications from './Notifications.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Notifications />
    <App />
  </React.StrictMode>
);

// Render the Notifications component
// const notificationsRoot = ReactDOM.createRoot(document.getElementById('root-notifications'));
// notificationsRoot.render(
//   <React.StrictMode>
//     <Notifications />
//   </React.StrictMode>
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
