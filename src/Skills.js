import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2>My Skills</h2>
        <p className="skills-intro">
          Here are some of the technologies and tools I work with:
        </p>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>HTML & CSS</h3>
            <p>Building responsive and accessible layouts.</p>
          </div>
          <div className="skill-card">
            <h3>JavaScript (ES6+)</h3>
            <p>Dynamic and interactive web functionality.</p>
          </div>
          <div className="skill-card">
            <h3>React</h3>
            <p>Developing fast, modern, and reusable components.</p>
          </div>
          <div className="skill-card">
            <h3>Angular</h3>
            <p>Creating powerful and scalable web applications.</p>
          </div>
          <div className="skill-card">
            <h3>Node.js</h3>
            <p>Creating scalable server-side applications.</p>
          </div>
          <div className="skill-card">
            <h3>PHP</h3>
            <p>Server-side scripting for dynamic websites and APIs.</p>
          </div>
          <div className="skill-card">
            <h3>MySQL</h3>
            <p>Managing relational databases efficiently.</p>
          </div>
          <div className="skill-card">
            <h3>MongoDB</h3>
            <p>Handling flexible and scalable NoSQL databases.</p>
          </div>
          <div className="skill-card">
            <h3>Bootstrap</h3>
            <p>Building fast, mobile-first, responsive designs.</p>
          </div>
          <div className="skill-card">
            <h3>Firebase</h3>
            <p>Authentication, hosting, and real-time databases.</p>
          </div>
          <div className="skill-card">
            <h3>Git & GitHub</h3>
            <p>Version control and collaboration tools.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
