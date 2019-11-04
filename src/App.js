import React, { useState, useEffect }  from 'react';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import Experience from './Components/Experience/Experience';
import Contact from './Components/Contact/Contact';

import './App.css';
import desktopImage from './background-image.jpg';
import mobileImage from './background-2.jpg';
import $ from 'jquery';
import AOS from 'aos';
import { tsMethodSignature } from '@babel/types';

$(document).ready(function() {

  $('.menu-toggler').on('click', function() {
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
  });

  $('.top-nav .nav-link').on('click', function() {
    $('.menu-toggler').removeClass('open');
    $('.top-nav').removeClass('open');
  });

  $('.nav a[href*="#"]').on('click', function() {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 100
    }, 2000);
  });

  $('#up').on('click', function() {
    $('html, body').animate({
      scrollTop: 0
    }, 2000);
  });

  AOS.init({
    easing: 'ease',
    duration: 1800
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

  const TypeWriter = function(textElement, words, wait = 3000){
    this.textElement = textElement
    this.words = words;
    this.text = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 8);
    this.type();
    this.isDeleting = false;
  }



  TypeWriter.prototype.type = function() {
    const current = this.wordIndex % this.words.length;

    const fullText = this.words[current]

    if(this.isDeleting){
      /* remove a char */
      this.text = fullText.substring(0, this.text.length - 1)
    } else {
      /* add a char */
      this.text = fullText.substring(0, this.text.length + 1)
    }

    /* output whatever is my current text, every half a second */

    this.textElement.innerHTML = `<h6 class="text">${this.text} </h6>`

    let typeSpeed = 100;

    if(this.isDeleting) {
      typeSpeed /= 2;
    }
    // if word is complete
    if(!this.isDeleting && this.text === fullText){
      //Set delete to true
      typeSpeed = this.wait;
      //set delete to true 
      this.isDeleting = true;
    } else if (this.isDeleting && this.text === ''){
      this.isDeleting = false;
      this.wordIndex++

      typeSpeed = 500
    }


    setTimeout(()=> this.type(), typeSpeed)
  }




  document.addEventListener('DOMContentLoaded', init);

  function init() {
    const textElement = document.querySelector('.text-type');
    const words = JSON.parse(textElement.getAttribute('data-words'));
    const wait = textElement.getAttribute('data-wait');

    new TypeWriter(textElement, words, wait);
  }

  return (

    <div className="App">
       <About />
       <Portfolio />
       <Experience />
       <footer className="copyright">
         <div className="up" id="up">
             <i className="fas fa-chevron-up"> </i>
             <p> &copy; 2019 Caridad Rivera </p>
         </div>

       </footer>

    </div>




    );
}

export default App;
