import React from "react";
import "./Projects.css";
import secproject from "./trendy.jpeg"

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2>My Projects</h2>
        <p className="projects-intro">
          Here are some of the projects I have worked on recently:
        </p>

        <div className="projects-grid">
          {/* Udemy Clone */}
          <div className="project-card">
            <img src="https://via.placeholder.com/400x250" alt="Udemy Clone" />
            <h3>Udemy Clone</h3>
            <p>
              A Udemy-like learning platform built with React, Node.js, and
              MongoDB. Includes authentication, course upload, and video
              streaming.
            </p>
            <a
              href="https://your-udemy-clone-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View Project
            </a>
          </div>

          {/* Bank App */}
          <div className="project-card">
            <img src="https://via.placeholder.com/400x250" alt="Bank App" />
            <h3>Bank App</h3>
            <p>
              A modern banking app built with JavaScript and Firebase, offering
              login authentication, transactions, and real-time updates.
            </p>
            <a
              href="https://your-bank-app-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View Project
            </a>
          </div>

          {/* E-commerce Website */}
          <div className="project-card">
            <img
              src={secproject}
              alt="E-commerce Website"
            />
            <h3>E-commerce Website</h3>
            <p>
              A full-stack e-commerce platform (ongoing project) built with
              React, Node.js, and MongoDB. Features shopping cart and payment
              gateway integration.
            </p>
            <a
              href="https://e-commerce-website-two-iota-42.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
