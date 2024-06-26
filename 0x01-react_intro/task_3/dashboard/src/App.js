import React from 'react';
import holbertonLogo from './holberton-logo.png';
import './App.css';
import { getFooterCopy, getFullYear } from './utils.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holbertonLogo} className="App-logo" alt="Holberton logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="e-mail">Email: </label>
        <input type="email" name="email" id="e-mail" />

        <label htmlFor="pass-word">Password: </label>
        <input type="password" id="pass-word" />

        <button>OK</button>
      </div>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
