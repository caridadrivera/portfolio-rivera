import React from 'react';
import profileImg from '../images/profile.jpg';
import './About.css';
import $ from 'jquery';

const About = () => {


    return (

      <section className="about" id="about">
        <div className="container">
            <div className="profile-img" data-aos="fade-right" data-aos-delay="300">
               <img src={profileImg} alt="" />
            </div>

          <div className="about-details" data-aos="fade-left" data-aos-delay="600">
            <div className="about-heading">
              <h1>About</h1>
              <h6>About</h6>
            </div>
            <p>
              Welcome to my portfolio!
              I go by Cari for short. I am a personable Software Developer with a year's experience in the design
              and architecture of beautiful, scalable and intuitive websites using HTML, CSS, Jquery, JavaScript, React.js, Redux.js, Node.js,
              Ruby, Ruby on Rails, Express.js, Sinatra, PostgreSQL and MondoDB.
  
            </p>

            <div className="social-media">
              <ul className="nav-list">
                <li>
                  <a href="https://www.linkedin.com/in/caridad-rivera-639352126/" className="icon-link">
                      <i className="fab fa-linkedin-in"> </i>
                  </a>
                </li>

                <li>
                  <a href="https://github.com/caridadrivera" className="icon-link">
                      <i className="fab fa-github-square"> </i>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>


    );

};

export default About;
