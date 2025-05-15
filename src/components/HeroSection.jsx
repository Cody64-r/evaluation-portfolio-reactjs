import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container text-center">
        <h1>Bonjour, je suis John Doe</h1>
        <h2>Développeur web full-stack</h2>
        <a href="/services" className="btn btn-danger mt-3">En savoir plus</a>
      </div>
    </section>
  );
};

export default HeroSection;
