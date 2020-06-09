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
          Visit Our Website 
        </a>
    <h1>Piaic Offering Best Following Courses</h1>
          <center>
          <fieldset><legend>Piaic Offering</legend>
            <h3>Artifical Intelligence</h3>
            <h3>Cloud Native Computing</h3>
            <h3>Blockchain</h3>
            <h3>Internet of Things</h3>
          </fieldset>
          <h4><font color="yellowgreen">Created by: Javed Hussain</font></h4>
          </center>
    </div>
  );
}

export default App;
