import React, { useState, useEffect } from 'react';
import './App.css';
import Burger from '../Nav/Burger.js'
import NavLinks from '../Nav/NavLinks.js'
// import { activeStyle, nonActiveStyle } from './App.styles';

function App() {

  const [navIsActive, setIsActive] = useState(false);

  function toggleNavActive () {
    setIsActive(navIsActive => !navIsActive)
  }

  return (
    <div className="App">
      <div className="nav-container">
        <nav className="nav">
          <div className="logo">Logo Here</div>
          <NavLinks navIsActive={navIsActive}/>
          <Burger navIsActive={navIsActive} toggleNavActive={toggleNavActive} />
        </nav>
      </div>
    </div>
  );
}

export default App;
