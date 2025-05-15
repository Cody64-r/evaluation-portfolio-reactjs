import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact</h1>
      <p>
        Pour me contacter en vue d’un entretien ou d’une future collaboration, merci de remplir le formulaire de contact.
      </p>

      <div className="contact-content">
        <div className="form-container">
          <h2>Formulaire de contact</h2>
          <form>
            <input type="text" placeholder="Votre nom" required />
            <input type="email" placeholder="Votre adresse email" required />
            <input type="tel" placeholder="Votre numéro de téléphone" />
            <input type="text" placeholder="Sujet" />
            <textarea placeholder="Votre message" required></textarea>
            <button type="submit">Envoyer</button>
          </form>
        </div>

        <div className="info-container">
          <h2>Mes coordonnées</h2>
          <p><strong>John Doe</strong></p>
          <p><i class="fa-regular fa-map"></i> 40 rue Laure Diebold</p>
          <p><i class="fa-solid fa-location-dot"></i> 69009 Lyon, France</p>
          <p><i class="fa-solid fa-mobile-screen-button"></i> 10 20 30 40 50</p>
          <p><i class="fa-regular fa-envelope"></i> john.doe@gmail.com</p>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps?q=40+rue+Laure+Diebold+Lyon&output=embed"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
