import React from "react";

function Header() {
    
    return (
        <header className="bg-dark text-white py-4">
      <div className="container text-center">
        <h1>Mon portfolio</h1>
        <p className="lead">Site en construction</p>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
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
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">Langages</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Compétences</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Experiences</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
    )
}

    

export default Header;
