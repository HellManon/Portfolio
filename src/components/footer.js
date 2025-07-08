import React from "react";
import "../style/footer.css";

const Footer = () => {
  return (
    <footer className="footer mt-5 pt-5 pb-3 text-light">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-6">
            <h5 className="fw-bold">Manon</h5>
            <p className="mb-2">développeuse • Java • React</p>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Réseaux</h6>
            <div className="d-flex gap-3">
              <a
                href="https://linkedin.com/in/tonprofil"
                className="footer-icon"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://github.com/tonpseudo"
                className="footer-icon"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://youtube.com/@ta-chaine"
                className="footer-icon"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Bonus</h6>
            <ul className="list-unstyled small bonus-list">
                <li>COMING SOON</li>
                
             {/* <li><a href="/cats">💥 SPA (à venir)</a></li>
              <li><a href="/404">Page 404 stylisée</a></li>
              <li><a href="/artiste">Mon univers artistique</a></li> */}
            </ul>
          </div>
          <div className="text-center mt-4">
  <p className="text-light fs-6">© {new Date().getFullYear()} Tous droits réservés.</p>
</div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;
