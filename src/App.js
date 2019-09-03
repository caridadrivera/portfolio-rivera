import React, { useState, useEffect }  from 'react';
import Homepage from './Components/Homepage/Homepage';
import logo from './logo.svg';
import './App.css';
import desktopImage from './portfoliobackground.jpeg'
import mobileImage from './portfoliobackground2.jpg'

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
        <div className="App" style={{backgroundImage: `url(${imageUrl})` }}>
            <div className="App-content">
                <h1>Caridad Rivera</h1>
                <p>Developer.</p>
            </div>
        </div>
    );
}

export default App;
