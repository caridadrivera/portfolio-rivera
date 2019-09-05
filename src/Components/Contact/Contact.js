import React from 'react'

const Contact = () => {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="section-heading">
            <h1>Contact</h1>
            <h6> Let's work together </h6>
        </div>

        <form action="">
          <label for="name"> Name: </label>
          <input type="text" id="name" name="name" placeholder="Enter your name..." required/>

          <label for="email"> Email: </label>
          <input type="email" id="email" name="email" placeholder="Enter your email..." required/>

          <label for="services"> Services: </label>
          <select name="services" id="services">
            <option value=""> Web Design </option>
            <option value=""> Web Development </option>
            <option value=""> Web Design </option>
            <option value=""> Web Design/Development </option>
          </select>

          <label for="subject"> Subject: </label>
          <textarea name="subject" id="subject" cols="10" rows="10"> </textarea>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    </section>
  
  );
};

export default Contact
