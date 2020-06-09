import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to iOS Application </h2>
      </header>
          <br />
            <a className="App-link"
          href="https://getinfoline.com"
          target="_blank"rel="noopener noreferrer">
          <h2>Visit Our Website</h2>
        </a>
    <h1>Piaic Offering Best Following Courses</h1>
          <center>
          <fieldset><legend><b><font color="#10cc26">Piaic Offering</font></b></legend>
            <ol>
            <li>Artifical Intelligence</li>
            <li>Cloud Native Computing</li>
            <li>Blockchain</li>
            <li>Internet of Things</li>
           </ol>
          </fieldset>
          <h4><font color="yellowgreen">Created by: Javed Hussain</font></h4>
          </center>
    </div>
  );
}

export default App;
