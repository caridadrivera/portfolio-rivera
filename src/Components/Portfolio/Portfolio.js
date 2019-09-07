import React from 'react';
import memorieImg from '../images/Memorie.jpeg'
import mindfulImg from '../images/Mindful.jpeg'
import nycImg from '../images/NYC-spots.jpeg'
import movieImg from '../images/React-Movie-Search.jpeg';



const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-heading">
            <h1>Portfolio </h1>
            <h6> View some of my work </h6>
        </div>

        <div className="portfolio-item">
          <div className="portfolio-img has-margin-right">
            <img src={memorieImg} alt=""/>
          </div>
          <div className="portfolio-description has-margin-right">
            <h6> Web Development </h6>
            <h1> Blog Website</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            </p>
            <a href="#" className="cta"> View Details </a>
          </div>
        </div>

        <div className="portfolio-item">
          <div className="portfolio-description has-margin-right">
            <h6> Web Design </h6>
            <h1> Product layout</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            </p>
            <a href="#" className="cta"> View Details </a>
          </div>
          <div className="portfolio-img">
            <img src={mindfulImg} alt=""/>
          </div>
        </div>


        <div className="portfolio-item">
          <div className="portfolio-img has-margin-right">
            <img src={nycImg} alt=""/>
          </div>
          <div className="portfolio-description has-margin-right">
            <h6> Web Development </h6>
            <h1> Product Sketch </h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            </p>
            <a href="#" className="cta"> View Details </a>
          </div>
        </div>


        <div className="portfolio-item">
          <div className="portfolio-description has-margin-right">
            <h6> Web Development </h6>
            <h1> Product Sketch </h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            </p>
            <a href="#" className="cta"> View Details </a>
          </div>
          <div className="portfolio-img has-margin-right">
            <img src={movieImg} alt=""/>
          </div>
        </div>


      </div>
    </section>
  );
};



export default Portfolio;
