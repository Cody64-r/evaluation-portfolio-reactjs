import React, { useState } from "react";
import "./MentionsLegales.css";

function MentionsLegales() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="legal-page">
      <h1>Mentions légales</h1>
      <div className="accordion">
        <div className="accordion-item">
          <button className="accordion-header" onClick={() => toggle(0)}>
            Éditeur du site <span>{openIndex === 0 ? "▲" : "▼"}</span>
          </button>
          {openIndex === 0 && (
            <div className="accordion-content">
              <p><strong>John Doe</strong></p>
              <p><i class="fa-regular fa-map"></i> 40 rue Laure Diebold</p>
              <p><i class="fa-solid fa-location-dot"></i> 69009 Lyon, France</p>
              <p><i class="fa-solid fa-mobile-screen-button"></i> 10 20 30 40 50</p>
              <p><i class="fa-regular fa-envelope"></i> john.doe@gmail.com</p>
            </div>
          )}
        </div>

        <div className="accordion-item">
          <button className="accordion-header" onClick={() => toggle(1)}>
            Hébergeur <span>{openIndex === 1 ? "▲" : "▼"}</span>
          </button>
          {openIndex === 1 && (
            <div className="accordion-content">
              <p><strong>alwaysdata</strong></p>
              <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
              <p>
                🌐 <a href="https://www.alwaysdata.com" target="_blank" rel="noreferrer">www.alwaysdata.com</a>
              </p>
            </div>
          )}
        </div>

        <div className="accordion-item">
          <button className="accordion-header" onClick={() => toggle(2)}>
            Crédits <span>{openIndex === 2 ? "▲" : "▼"}</span>
          </button>
          {openIndex === 2 && (
            <div className="accordion-content">
              <p>Ce site a été réalisé par John Doe, étudiant au <a href="https://www.centre-europeen-formation.fr" target="_blank" rel="noreferrer">Centre Européen de formation</a>.</p>
              <p><em>Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a href="https://pixabay.com" target="_blank" rel="noreferrer">Pixabay</a></em></p>
              <p><em>La favicon de ce site a été fournie par <a href="https://www.flaticon.com" target="_blank" rel="noreferrer">Flaticon</a></em></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MentionsLegales;
