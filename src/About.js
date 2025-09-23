import React from "react";
import "./About.css";
import aboutImage from "./firstimg.jpg"; // replace with your image

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImage} alt="About me" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi, I'm <span className="highlight">Olabiyi Hikmot</span>, a passionate 
            web developer with a love for building clean, user-friendly, and 
            modern web applications. I specialize in front-end development 
            with React and enjoy turning ideas into reality with code.
          </p>
          <p>
            When I'm not coding, I love reading, watching movies, and 
            exploring new technologies to keep improving my skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
