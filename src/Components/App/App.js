import React, { useState } from 'react';
import './App.css';
import '../About/About.css';
import '../Nav/Nav.css';
import '../Hero/Hero.css';
import '../Portfolio/Portfolio.css';
import '../Contact/Contact.css';
import Burger from '../Nav/Burger.js'
import NavLinks from '../Nav/NavLinks.js'
import LogoNav from '../Nav/LogoNav';
import About from '../About/About';
import Hero from '../Hero/Hero';
import PortfolioList from '../Portfolio/PortfolioList';
import Contact from '../Contact/Contact';

function App() {

  const [navIsActive, setIsActive] = useState(false);

  function toggleNavActive() {
    setIsActive(navIsActive => !navIsActive)
  }

  const [portfolio] = useState([
    {
      id: 1,
      title: 'Rebalance',
      role: 'Author',
      description: (<div><p>Rebalance is a React application to help the user re-balance a stock portfolio.</p> <p>The application uses the Alpha Vantage API to return the current stock price of the stock that best matches the user search keyword. Users can add stocks to their portfolio, set the current amount they own, set the desired target percentage, add asset value to their portfolio, and remove stocks from their portfolio.</p></div>),
      imgSrc: './Images/RebalanceScreenshot.jpg',
      imgAlt: 'Rebalance',
      toolsList: ['React', 'API', 'HTML', 'JavaScript', 'Bootstrap', 'CSS', 'Github Pages'],
      repoLink: 'https://github.com/dmeegan/Rebalance',
      liveSiteLink: 'https://dmeegan.github.io/Rebalance/'
    },
    {
      id: 2,
      title: 'Title V Bot',
      role: 'Author',
      description: (<div><p>Title V Bot is a web application to help the user design septic systems in accordance with the Massachusetts Title V ("Title-Five") regulations 310 CMR 15.000.</p> <p>The Title V Bot application guides the user through the necessary design procedure for a typical septic system. Built in alerts serve the purpose of notifying the user of any inputs that may be against the regulations. Having these built in edge cases also make the application a good tool for teaching someone who may not be too familiar with the regulations.</p></div>),
      imgSrc: './Images/TitleVBotScreenshot.jpg',
      imgAlt: 'Title V Bot',
      toolsList: ['HTML', 'JavaScript', 'CSS', 'Netlify'],
      repoLink: 'https://github.com/dmeegan/TitleVBot',
      liveSiteLink: 'https://titlevbot.netlify.app/'
    },
    {
      id: 3,
      title: 'Windfall Awareness',
      role: 'Contributor',
      description: (<div><p>I have been lucky enough to be a contributor on the Windfall Awareness project as part of the Boston brigade of Code for America. This project has given me valuable experience working as part of a team of developers to add functionality and fix bugs in a pre-existing code base.</p> <p>This is a tool to help retirees affected by the Social Security Windfall Elimination Provision (WEP). WEP mostly affects public servants like teachers and firefighters, and can mean a reduction in SSA benefits of up to 50%. This tool will help affected workers better plan retirement and self-advocate with the Social Security administration.</p></div>),
      imgSrc: './Images/WAscreenshot.JPG',
      imgAlt: 'Windfall Awareness',
      toolsList: ['React', 'Gatsby', 'Typsecript', 'CSS in JS'],
      repoLink: 'https://github.com/codeforboston/windfall-elimination',
      liveSiteLink: 'https://ssacalculator.org/'
    },
  ]);

  return (
    <div className="App" id="home">
      <div className="nav-container">
        <nav className="nav">
          <LogoNav />
          <NavLinks navIsActive={navIsActive} />
          <Burger navIsActive={navIsActive} toggleNavActive={toggleNavActive} />
        </nav>
      </div>
      <div className="Main">
        <Hero />
        <About />
        <PortfolioList portfolio={portfolio} />
        <Contact />
      </div>
    </div>
  );
}

export default App;
