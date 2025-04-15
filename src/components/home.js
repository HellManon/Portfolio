import React, { useEffect, useRef } from "react";
import Typed from "typed.js"; 
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Styles d'AOS
import "../style/home.css";
import photoProfil from "../images/profil.png";

function Home() {
  const typedElement = useRef(null);  // Création d'une référence pour le span

  useEffect(() => {

    // Initialisation d'AOS
    AOS.init({
        duration: 2000,  // Durée de l'animation (en ms)
        once: false,  // L'animation ne se joue qu'une seule fois
      });

    const options = {
      strings: ["Java", "Angular", "React", "Node.js"],
      typeSpeed: 155,
      backSpeed: 100,
      backDelay: 2000,
      startDelay: 500, // Délai avant le début de l'animation
      loop: true,
      showCursor: true, // Afficher le curseur de frappe
    };

    // Initialiser Typed.js sur l'élément référencé
    const typed = new Typed(typedElement.current, options);

    // Nettoyage de l'instance de Typed.js lors de la destruction du composant
    return () => {
      typed.destroy();
    };
  }, []); // L'effet s'exécute une seule fois lors du montage du composant

  return (
    <section id="home" className="hero section dark-background">
      <div className="container">
        <div className="row align-items-center">
          {/* Colonne de gauche (texte) */}
          <div className="col-md-6" data-aos="fade-right">
            <h1>Manon</h1>
            <h2 className="left-align">
              Je suis développeuse{" "}
              <span ref={typedElement} className="typed"></span>
            </h2>

            <p>
              J’aide les entreprises à concevoir, optimiser et faire évoluer leurs applications.<br />
              Passionnée par le développement, j’aime résoudre des problèmes techniques et créer des applications performantes qui font la différence. 
              Je m’adapte rapidement aux défis et apporte des solutions concrètes avec une approche axée sur l’amélioration continue.
            </p>

            <ul>
              <li>Développement d’applications web Java / Angular</li>
              <li>Optimisation et refonte de code</li>
              <li>Approche pragmatique et rigoureuse</li>
            </ul>

            <p>Vous cherchez une développeuse qui allie expertise et adaptabilité ?</p>
            <p>Discutons-en !</p>
          </div>

          {/* Colonne de droite (photo) */}
          <div className="col-md-6" data-aos="fade-left" >
          <img src={photoProfil} alt="Photo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
