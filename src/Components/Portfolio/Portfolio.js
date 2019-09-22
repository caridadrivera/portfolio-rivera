import React from 'react';
import AOS from 'aos';

import memorieImg from '../images/Memorie.jpeg'
import mindfulImg from '../images/Mindful.jpeg'
import nycImg from '../images/NYC-spots.jpeg'
import movieImg from '../images/React-Movie-Search.jpeg';
import reactGame from '../images/TicTac.png'


const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-heading">
            <h1>Web Development Portfolio </h1>
            <h6> View some of my work </h6>
        </div>

        <div className="portfolio-item">
          <div className="portfolio-img has-margin-right" data-aos="fade-right" data-aos-delay="300">
            <img src={memorieImg} alt=""/>
          </div>
          <div className="portfolio-description has-margin-right" data-aos="fade-left" data-aos-delay="600">
            <h1> Memory Game</h1>
            <p>
            This game uses HTML, CSS and vanilla JavaScript to build a card memory game
            composed of three different levels of difficulty and a leaderboard.
            It is supported by a Ruby on Rails backend that persists the images, players and time
            </p>
            <a href="https://www.youtube.com/watch?v=98ledb3KwcI" className="cta"> View Demo </a>
            <a href="https://github.com/caridadrivera/tile-matching-game-JS" className="cta"> View Code </a>

          </div>
        </div>

        <div className="portfolio-item">
          <div className="portfolio-description has-margin-right" data-aos="fade-right" data-aos-delay="900">
            <h1> Mindful Activity App</h1>
            <p>
            Using only Ruby on Rails for backend and front end,
            this app persists data and displays it beautifully in the front-end using HTML and custom CSS.
            This application allows you to post activities you’ve done during the day to stay mindful(ie: running, meditating).
            Using Active Record and self-referential relationships, the user is able to follow other users and see other users activity history.

            </p>
            <a href="https://www.youtube.com/watch?v=rAKMoulJ7NQ" className="cta"> View Demo </a>
            <a href="https://github.com/caridadrivera/mindful-rails-app" className="cta"> View Code
             </a>

          </div>
          <div className="portfolio-img" data-aos="fade-left" data-aos-delay="1200">
            <img src={mindfulImg} alt=""/>
          </div>
        </div>


        <div className="portfolio-item">
          <div className="portfolio-img has-margin-right" data-aos="fade-left" data-aos-delay="1500">
            <img src={nycImg} alt=""/>
          </div>
          <div className="portfolio-description has-margin-right" data-aos="fade-right" data-aos-delay="1800">
            <h1> NYC Spots</h1>
            <p>
            This application uses React.js and Ruby on Rails to build a platform
            where people share reviews of the night life in New York City.
            The logged-in user gets to like other user's post and delete or post posts in their section.
            </p>
            <a href="https://www.youtube.com/watch?v=0DtWwmRTJmE" className="cta"> View Demo </a>
            <a href="https://github.com/caridadrivera/NYC-Spots-React-Rails" className="cta"> View Code </a>

          </div>
        </div>


        <div className="portfolio-item">
          <div className="portfolio-description has-margin-right" data-aos="fade-right" data-aos-delay="1800">
            <h1>React Movie Searcher </h1>
            <p>
            This appication uses React.js to fetch from the Movie Database API and render movies to the user.
            The user is able to filter out movies in the search box and load more from the database.
            On click, the user can see a summary of the movie and it's rating using React Router.
            </p>
            <a href="https://www.youtube.com/watch?v=Otcgs3BfJnA&feature=youtu.be" className="cta"> View Demo</a>
            <a href="https://github.com/caridadrivera/react-movie-search" className="cta"> View Code </a>

          </div>
          <div className="portfolio-img has-margin-right" data-aos="fade-left" data-aos-delay="2100">
            <img src={movieImg} alt=""/>
          </div>
        </div>



        <div className="portfolio-item">
          <div className="portfolio-description has-margin-right" data-aos="fade-left" data-aos-delay="2500">
            <h1>React Tic Tac Toe </h1>
            <p>
            This appication uses React to create a classic Tic Tac Toe game that consists of two players that are handled based on state.
            </p>
            <a href="https://www.youtube.com/watch?v=Hzt5qjwfmWs" className="cta"> View Demo</a>
            <a href="https://github.com/caridadrivera/React-tic-tac-toe" className="cta"> View Code </a>

          </div>
          <div className="portfolio-img has-margin-right" data-aos="fade-right" data-aos-delay="2600">
            <img src={reactGame} alt=""/>
          </div>

        </div>













      </div>
    </section>
  );
};



export default Portfolio;
