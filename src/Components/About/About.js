import React from 'react';
import profileImg from '../images/profilePic.jpg';
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
           
            </div>
            <p>
              Welcome to my portfolio!
              <br></br>
              
              I am a Software Developer with experience in building responsive and intuitive websites using the following STACK:
              Front-End: HTML, CSS, Javascript
              Fameworks: React.js, Ruby on Rails
              Back-End: Node.js, PostgreSQL
               <br></br>
              I also have experience building CRUD APIs with 
              Ruby, Ruby on Rails, Express.js, Sinatra, PostgreSQL and MondoDB.

            </p>

            <div className="social-media">
              <ul className="nav-list">
                <li>
                  <a href="https://www.linkedin.com/in/cari-rivera/" className="icon-link">
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
