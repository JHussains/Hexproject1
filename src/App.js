import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Created  <code> by </code> Javed Hussain
        </p>
        <a
          className="App-link"
          href="https://getinfoline.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Please visit my web page 
        </a>
      </header>
    </div>
  );
}

export default App;
