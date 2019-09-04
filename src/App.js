import React, { useState, useEffect }  from 'react';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import './App.css';
import desktopImage from './portfoliobackground.jpeg';
import mobileImage from './portfoliobackground2.jpeg';

/*Note that this is a functional component, since Hooks do not work with class components. */

const App = () => {
  /* The Effect Hook, useEffect, lets us perform side effects in a React functional component.*/
  /* With this hook, I only have to add the event listener once and it runs every time the component renders. It’s basically the equivalent of a class component’s componentDidMount and componentDidUpdate lifecycle methods combined. */
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  /* here, my windowwidth is the equivalent of this.state.windowWidth in a class component(without hooks)
  and setWindowWidth is a setter function similar to setState(windowWidth.innerWidth)
  at the resized windowWidth, display x */

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };


  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  })

  const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage

  return (
    <div className="App">
       <div className="menu-toggler">
         <div className="bar half start"></div>
         <div className="bar"></div>
         <div className="bar half end"></div>
       </div>
       <nav className="top-nav">
         <ul className="nav-list">
           <li>
             <a href="index.html" className="nav-link">Home</a>
           </li>
           <li>
             <a href="#about" className="nav-link">About</a>
           </li>
           <li>
             <a href="#services" className="nav-link">Services</a>
           </li>
           <li>
             <a href="#porfolio" className="nav-link">Portfolio</a>
           </li>
           <li>
             <a href="#experience" className="nav-link">Experience</a>
           </li>
           <li>
             <a href="#contact" className="nav-link">Contact</a>
           </li>
         </ul>
       </nav>
       <div className="landing-text">
         <h1>Caridad Rivera</h1>
         <h6>FullStack Developer</h6>
       </div>
       <About />
       <Services />
       <Portfolio />
    </div>


    );
}

export default App;