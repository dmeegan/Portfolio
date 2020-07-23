import React, { useState } from 'react';
import './App.css';
import Burger from '../Nav/Burger.js'
import NavLinks from '../Nav/NavLinks.js'
// import { activeStyle, nonActiveStyle } from './App.styles';

function App() {

  const [navIsActive, setIsActive] = useState(false);

  function toggleNavActive() {
    setIsActive(navIsActive => !navIsActive)
  }

  function disableNav() {

  }

  return (
    <div className="App">
      <div className="nav-container">
        <nav className="nav">
          <div className="logo">Logo Here</div>
          <NavLinks navIsActive={navIsActive} />
          <Burger navIsActive={navIsActive} toggleNavActive={toggleNavActive} />
        </nav>
      </div>
        <section className="about-section">
          <img className="headshot" src='headshot.jpg' title="Dan Meegan" alt="dan meegan headshot photo"/>
          <h1>About Me</h1>
          <p>I am a self-taught web developer currently based in Boston. I am focused on creating clean modern websites and web applications.</p>
          <p>Please feel free to contact me with any opportunities.</p>
        </section>
    </div>
  );
}

export default App;
