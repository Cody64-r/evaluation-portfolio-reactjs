import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* Section héros */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full-stack</h2>
          <a href="#about" className="btn-hero">En savoir plus</a>
        </div>
      </section>

      {/* À propos + compétences */}
      <section className="about-skills">
        <div className="about">
          <h3>À propos</h3>
          <div className="about-content">
            <img src="/img/john-doe-about.jpg" alt="John Doe" />
            <div className="about-text">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus.</p>
            </div>
          </div>
        </div>

        <div className="skills">
          <h3>Mes compétences</h3>
          <div className="skill">
            <p>HTML5 90%</p>
            <div className="bar html"></div>
          </div>
          <div className="skill">
            <p>CSS3 80%</p>
            <div className="bar css"></div>
          </div>
          <div className="skill">
            <p>JavaScript 70%</p>
            <div className="bar js"></div>
          </div>
          <div className="skill">
            <p>PHP 60%</p>
            <div className="bar php"></div>
          </div>
          <div className="skill">
            <p>React 50%</p>
            <div className="bar react"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
