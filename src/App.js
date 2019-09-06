import React, { useState, useEffect }  from 'react';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import Experience from './Components/Experience/Experience';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import './App.css';
import desktopImage from './portfoliobackground.jpg';
import mobileImage from './portfoliobackground2.jpg';
import $ from 'jquery';

$(document).ready(function() {
  $('.menu-toggler').on('click', function() {
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
  });
});
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

       <About />
       <Services />
       <Portfolio />
       <Experience />
       <Contact />
       <Footer />
    </div>


    );
}

export default App;
