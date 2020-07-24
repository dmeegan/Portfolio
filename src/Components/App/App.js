import React, { useState } from 'react';
import './App.css';
import '../About/About.css';
import '../Nav/Nav.css';
import Burger from '../Nav/Burger.js'
import NavLinks from '../Nav/NavLinks.js'
import LogoNav from '../Nav/LogoNav';
import About from '../About/About';

function App() {

  const [navIsActive, setIsActive] = useState(false);

  function toggleNavActive() {
    setIsActive(navIsActive => !navIsActive)
  }

  return (
    <div className="App">
      <div className="nav-container">
        <nav className="nav">
          <LogoNav />
          <NavLinks navIsActive={navIsActive} />
          <Burger navIsActive={navIsActive} toggleNavActive={toggleNavActive} />
        </nav>
      </div>
        <About />
    </div>
  );
}

export default App;
