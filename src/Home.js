import React from "react";
import "./Home.css";
import img from "./secimg.webp"

const Home = () => {
    return (
        <section id="home" className="home">
            <div className="home-container">
                {/* Left Text Section */}
                <div className="home-text">
                    <h1>Hi, I’m <span className="highlight">Hikmot Bolanle</span></h1>
                    <h2>Full-Stack Developer</h2>
                    <p>
                        I specialize in building modern, responsive, and dynamic web
                        applications using React, Node.js, PHP, Angular, MongoDB, and
                        MySQL. Let’s build something amazing together!
                    </p>
                    <div className="home-buttons">
                        <a href="#projects" className="btn-primary">View My Work</a>
                        <a href="#contact" className="btn-secondary">Contact Me</a>
                    </div>
                </div>

                {/* Right Image Section */}
                <div className="home-image">
                    <img
                        src={img}
                        alt="Profile"
                    />
                </div>
            </div>
        </section>
    );
};

export default Home;
