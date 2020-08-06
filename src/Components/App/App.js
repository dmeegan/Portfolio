import React, { useState } from 'react';
import './App.css';
import '../About/About.css';
import '../Nav/Nav.css';
import '../Hero/Hero.css';
import Burger from '../Nav/Burger.js'
import NavLinks from '../Nav/NavLinks.js'
import LogoNav from '../Nav/LogoNav';
import About from '../About/About';
import Hero from '../Hero/Hero';
import PortfolioList from '../Portfolio/PortfolioList';

function App() {

  const [navIsActive, setIsActive] = useState(false);

  function toggleNavActive() {
    setIsActive(navIsActive => !navIsActive)
  }

  const [portfolio] = useState([
    {
      id: 1,
      title: 'Rebalance',
      description: 'Rebalance is a React application to help the user re-balance a stock portfolio. The application uses the Alpha Vantage API to return the current stock price of the stock that best matches the user search keyword. Users can add stocks to their portfolio, set the current amount they own, set the desired target percentage, add asset value to their portfolio, and remove stocks from their portfolio.',
      imgSrc: 'https://github.com/dmeegan/Rebalance/tree/master/media/AddStockToPortfolio.gif',
      imgAlt: 'Rebalance',
      toolsList: ['React', 'API', 'HTML', 'JavaScript', 'Bootstrap', 'CSS'],
      repoLink: 'https://github.com/dmeegan/Rebalance',
      liveSiteLink: 'https://dmeegan.github.io/Rebalance/'
    },
    {
      id: 2,
      title: 'Title V Bot',
      description: 'Title V Bot is a web application to help the user design septic systems in accordance with the Massachusetts Title V("Title-Five") regulations 310 CMR 15.000. The The Title V Bot application guides the user through the necessary design procedure for a typical septic system. Built in alerts serve the purpose of notifying the user of any inputs that may be against the regulations. Having these built in edge cases also make the application a good tool for teaching someone who may not be too familiar with the regulations.',
      imgSrc: '../../media/TitleVBot/TitleVBotDemo1.gif',
      imgAlt: 'Title V Bot',
      toolsList: ['HTML', 'JavaScript', 'CSS'],
      repoLink: 'https://github.com/dmeegan/TitleVBot',
      liveSiteLink: 'https://titlevbot.netlify.app/'
    },
  ]);

  return (
    <div className="App">
      <div className="nav-container">
        <nav className="nav">
          <LogoNav />
          <NavLinks navIsActive={navIsActive} />
          <Burger navIsActive={navIsActive} toggleNavActive={toggleNavActive} />
        </nav>
      </div>
      <Hero />
      <About />
      <PortfolioList portfolio={portfolio}/>
    </div>
  );
}

export default App;
