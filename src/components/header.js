
import React from "react";
import "../style/header.css";
import logo from "../images/logo.png";

function Header() {
    
    return (
        <header className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    
    {/* Logo et titre à gauche */}
    <a className="navbar-brand d-flex align-items-center" href="https://github.com/HellManon">
      <img src={logo} alt="logo" className="logo me-2" />
      Manon
    </a>

    {/* Bouton hamburger pour mobile */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Menu centré */}
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav text-center">
        <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
        <li className="nav-item"><a href="#techlist" className="nav-link">Languages</a></li>
        <li className="nav-item"><a href="#expertise" className="nav-link">Compétences</a></li>
        <li className="nav-item"><a href="#projets" className="nav-link">Projets</a></li>
        <li className="nav-item"><a href="#experiences" className="nav-link">Expériences</a></li>
        {/* Bouton LinkedIn dans le menu burger (uniquement en mobile) */}
        <li className="nav-item mt-3 d-lg-none">
          <a href="https://www.linkedin.com/in/manonhell/" target="_blank" className="btn btn-primary w-100">
            Contactez-moi
          </a>
        </li>
      </ul>
    </div>

    {/* Bouton LinkedIn visible seulement en desktop */}
    <a href="https://www.linkedin.com/in/ton-profil" target="_blank" className="btn btn-primary d-none d-lg-inline-block">
      Contactez-moi
    </a>
  </div>
</header>

    )
}

    

export default Header;
