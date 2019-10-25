import React from 'react';

const Services = () =>{
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-heading">
            <h1>Skills </h1>
            <h6> What I can do:</h6>
        </div>

        <div class="my-skills">
          <div class="skill" data-aos="fade-in" data-aos-delay="600">
            <div class="icon-container">
              <i class="fas fa-code"> </i>
            </div>
            <h1> Web Development</h1>
            <p>
              I architecture websites from the backend to the front-end using HTML, CSS, Javascript,
              React.js, Redux.js, Jquery, Ruby, Ruby on Rails, Sinatra and SQL.
            </p>
          </div>


        </div>
      </div>
    </section>
  )
}

export default Services;
