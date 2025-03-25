
import React from "react";
import "../style/header.css"

function Header() {
    
    return (
        <div className="container">
  <header className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    {/* Container global pour aligner tous les éléments */}
    <div className="container-fluid d-flex justify-content-between align-items-center">
      
      {/* Logo à gauche */}
      <a className="navbar-brand" href="#">
        <img src="#" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
        Manon
      </a>

      {/* Bouton hamburger pour mobile */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Liens de navigation au centre */}
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Languages</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Compétences</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Expériences</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Projets</a>
          </li>
        </ul>
      </div>

      {/* Bouton LinkedIn à droite */}
      <a href="https://www.linkedin.com/in/ton-profil" target="_blank" className="btn btn-primary">
        Contactez-moi
      </a>
    </div>
  </header>
</div>


    )
}

    

export default Header;
