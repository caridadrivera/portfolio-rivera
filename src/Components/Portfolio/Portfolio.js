import React from 'react';

const Portfolio = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-heading">
            <h1>Portfolio </h1>
            <h6> View some of my work </h6>
        </div>

        <div className="portfolio-item">
          <div className="portfolio-img">
            <img src="" alt=""/>
          </div>
          <div className="portfolio-description">
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
          <div className="portfolio-img">
            <img src="" alt=""/>
          </div>
          <div className="portfolio-description">
            <h6> Web Development </h6>
            <h1> Blog Website</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            </p>
            <a href="#" className="cta"> View Details </a>
          </div>
        </div>


      </div>
    </section>
  );
};



export default Portfolio;
