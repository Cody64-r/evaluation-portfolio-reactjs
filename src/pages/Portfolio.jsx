import React from "react";
import "./Portfolio.css";

function Portfolio() {
  const projects = [
    {
      title: "Fresh Food",
      tech: "PHP et MySQL",
      image: "/img/fresh-food.jpg",
    },
    {
      title: "Restaurant Akira",
      tech: "WordPress",
      image: "/img/restaurant-japonais.jpg",
    },
    {
      title: "Espace bien-être",
      tech: "LARAVEL",
      image: "/img/espace-bien-etre.jpg",
    },
    {
      title: "SEO",
      tech: "SEO",
      image: "/img/seo.jpg",
    },
    {
      title: "Création d'une API",
      tech: "PHP - SYMFONY",
      image: "/img/coder.jpg",
    },
    {
      title: "Maquette d’un site web",
      tech: "FIGMA",
      image: "/img/screens.jpg",
    },
  ];

  return (
    <div className="portfolio-page">
      {/* Bannière en haut de page */}
      <img
        src="/img/banner.jpg"
        alt="Bannière Portfolio"
        className="banner"
      />

      <div className="page-container">
        <h1>Portfolio</h1>
        <p>Voici quelques-unes de mes réalisations.</p>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div className="card" key={index}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>Site réalisé avec {project.tech}</p>
              <button>Voir le site</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
