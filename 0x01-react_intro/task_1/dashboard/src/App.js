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
      <div className="App-body"> {/* Changed <body> to <div> */}
        <p>Login to access the full dashboard</p>
        <label htmlFor="e-mail">Email</label> {/* Changed 'for' to 'htmlFor' */}
        <input type="email" name="email" id="e-mail" />
        <br />
        <label htmlFor="pass-word">Password</label> {/* Changed 'for' to 'htmlFor' */}
        <input type="password" id="pass-word" />
        <br />
        <button>OK</button>
      </div> {/* Closed the <div> */}
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p> {/* Added parentheses to function calls */}
      </footer>
    </div>
  );
}

export default App;
