import React from 'react';
import AOS from 'aos';
import './Experience.css';

const Experience = () => {
  return (

    <section className="experience" id="experience">


    <div className="container">
      <div className="section-heading">
          <h1>Education </h1>
      </div>
      <div className="timeline" data-aos="fade-down" data-aos-delay="300">
        <ul>
          <li className="date" data-date="02/2019 - 06/2019">
            <h1> Flatiron School Software Engineering Bootcamp </h1>
            <p>
            In-person, 15-week immersive Software Engineering program where we learned to built projects using
            HTML, CSS, Javascript, Ruby, Ruby on Rails, Sinatra, SQL, Active Record, React.js and Redux.js
            </p>
          </li>
          <li className="date" data-date="08/2010 - 05/2014">
            <h1> St. Lawrence University </h1>
            <p>
            Bachelor of Arts in Anthropology
            </p>
          </li>

        </ul>
      </div>
    </div>






      <div className="container">
        <div className="section-heading">
            <h1>EMPLOYMENT HISTORY</h1>

        </div>
        <div className="timeline" data-aos="fade-down" data-aos-delay="300">
          <ul>
            <li className="date" data-date="03/2015 - 11/2018">
              <h1> StateFarm </h1>
              <p>
              <li> + Using Salesforce as a platform for keeping track and following up with clients interested in personal and commercial insurance. </li>
              <li> + Met and exceeded monthly sales for 2 years straight by setting up daily follow ups in Outlook and Salesforce </li>
              <li> + Manage all phases of the sales cycle, from prospecting to close and follow-up support. </li>

              </p>
            </li>
            <li className="date" data-date="06/2014 - 12/2014">
              <h1> Dyckman Dental Services </h1>
              <p>
              <li>+ Answered, screened, and directed inbound phone calls.</li>
              <li>+ Alphabetically organized patient charts and made appointments using Microsoft Office</li>
              <li>+ Set up interviews and helped in the hiring process of the clinic </li>
              </p>
            </li>

          </ul>
        </div>
      </div>



    </section>
      );
};


export default Experience;
