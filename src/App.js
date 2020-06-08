import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
     <div className="App">
 <header className="App-header">
     <img src={logo} className="App-logo" alt="logo" />
     <h2>
         Welcome to iOS Application
     </h2>
 </header>
<h1>Piaic Offering Best Following Courses</h1>
          <center>
          <fieldset><legend>
          <b><i>
          <font color="grey">Piaic Offering</font>
          </i></b></legend>
          <h4><font color="darkblue">
          Artifical Intelligence
          <br />
          Native Cloud Computing
          <br />
          Blockchain
          <br />
          Internet of Things
          </font></h4>
          </fieldset>
          </center>
<center>
          <h4><font color="#bada55">
          Created by:</font> <font color="#beg">Javed Hussain</font></h4>
</center>
</div>

    );

}

export default App;
