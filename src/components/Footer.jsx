import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-col">
          <h3>John Doe</h3>
          <p>
            40 rue Laure Diebold<br />
            69009 Lyon, France<br />
            10 20 30 40 50<br />
            <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
          </p>
          <div className="footer-icons">
            <a href="#"><FaGithub /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>

        <div className="footer-col">
          <h3>Liens utiles</h3>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Me contacter</Link></li>
            <li><Link to="/mentions-legales">Mentions légales</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Mes dernières réalisations</h3>
          <ul>
            <li><a href="#">Fresh Food</a></li>
            <li><a href="#">Restaurant Akira</a></li>
            <li><a href="#">Espace bien-être</a></li>
            <li><a href="#">SEO</a></li>
            <li><a href="#">Création d'une API</a></li>
            <li><a href="#">Maquette d’un site</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
