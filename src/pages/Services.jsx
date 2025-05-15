import React from "react";
import "./Services.css";

function Services() {
  return (
    <div className="page-container">
      {/* Bannière en haut de page */}
      <img
        src="/img/banner.jpg"
        alt="Bannière Services"
        className="page-banner"
      />

      <h1>Mon offre de services</h1>
      <p>Voici les prestations sur lesquelles je peux intervenir :</p>
      <div className="services-grid">
        <div className="service-card">
          <i className="fas fa-pencil-alt icon"></i>
          <h3>UX Design</h3>
          <p>L'UX Design consiste à concevoir des produits en plaçant l'utilisateur au centre.</p>
        </div>
        <div className="service-card">
          <i className="fas fa-code icon"></i>
          <h3>Développement web</h3>
          <p>Création de sites internet en HTML, CSS, JavaScript, PHP, etc.</p>
        </div>
        <div className="service-card">
          <i className="fas fa-search icon"></i>
          <h3>Référencement</h3>
          <p>Optimisation SEO pour améliorer la visibilité sur les moteurs de recherche.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;

