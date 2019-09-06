import React from 'react';
import profileImg from '../images/profile.jpeg';
import './About.css';
import $ from 'jquery';

const About = () => {


    return (
      <section className="about" id="about">
        <div className="container">
            <div className="profile-img">
               <img src={profileImg} alt="" />
            </div>
            
          <div className="about-details">
            <div className="about-heading">
              <h1>About</h1>
              <h6>About</h6>
            </div>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t
              empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l
              aboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>

            <div className="social-media">
              <ul className="nav-list">
                <li>
                  <a href="#" className="icon-link">
                      <i className="fab fa-facebook-square"> </i>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon-link">
                      <i className="fab fa-twitter-square"> </i>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon-link">
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
