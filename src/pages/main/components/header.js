import React from "react";
import "../style/header.css";
import logo from "../../../images/logo.png";
import { HashLink as Link } from 'react-router-hash-link';

function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">

        {/* Logo et titre à gauche */}
        <a className="navbar-brand d-flex align-items-center" href="https://github.com/HellManon" target="_blank">
          <img src={logo} alt="logo" className="logo me-2" />
          <h1>Hell Manon</h1>
        </a>

        {/* Bouton hamburger pour mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu centré */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav text-center">
            <li className="nav-item"><Link to="/Portfolio#home" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="/Portfolio#techlist" className="nav-link">Languages</Link></li>
            <li className="nav-item"><Link to="/Portfolio#expertise" className="nav-link">Compétences</Link></li>
            <li className="nav-item"><Link to="/Portfolio#projets" className="nav-link">Projets</Link></li>
            <li className="nav-item"><Link to="/Portfolio#experiences" className="nav-link">Expériences</Link></li>

            {/* Bouton LinkedIn mobile */}
            <li className="nav-item mt-3 d-lg-none">
              <a href="https://www.linkedin.com/in/manonhell/" target="_blank" className="btn btn-primary w-100">
                Contactez-moi
              </a>
            </li>
          </ul>
        </div>

        {/* Bouton LinkedIn desktop */}
        <a
          href="https://www.linkedin.com/in/manonhell/"
          target="_blank"
          className="btn btn-primary d-none d-lg-inline-block"
        >
          Contactez-moi
        </a>
      </div>
    </header>
  );
}

export default Header;
