import React, { useEffect, useRef } from "react";
import Typed from "typed.js"; 
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Styles d'AOS
import "../style/home.css";
import photoProfil from "../../../images/profil.png";

function Home() {
  const typedElement = useRef(null);  // Création d'une référence pour le span

  useEffect(() => {

    // Initialisation d'AOS
    AOS.init({
        duration: 2000,  // Durée de l'animation (en ms)
        once: false,  // L'animation ne se joue qu'une seule fois
      });

    const options = {
      strings: ["Java", "IA", "Angular", "React", "Node.js"],
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
            
            <h2 className="left-align">Je suis développeuse{" "}
              <span ref={typedElement} className="typed"></span>
            </h2>

          {/* Colonne de gauche (texte) */}
          <div className="col-md-6 ps-md-5" data-aos="fade-right">

            <p>Passionnée par l’intelligence artificielle, je me spécialise dans ce domaine avec une vision claire :<br />
              👉 rendre l’IA accessible, locale et intégrable dans les projets concrets.
            </p>

            <p>
              Mon défi actuel :<br />
              🚀 créer un framework IA 100% Java, pensé pour être natif, interopérable et prêt à s’intégrer dans tout l’écosystème existant.
            </p>

            <p>
              L’objectif ?<br />
              🎯 Offrir aux développeurs un outil fiable pour ajouter de l’intelligence embarquée à leurs applications, sans complexité inutile.
            </p>

            <p>Je crois à une IA :</p>
            <ul>
              <li>✔️ pratique</li>
              <li>✔️ sobre</li>
              <li>✔️ efficace</li>
            </ul>

            <p>… qui se met au service des développeurs et des entreprises.</p>

            <p>
              👉 Si vous partagez cette vision ou cherchez à collaborer sur des projets autour de Java, l’IA ou les systèmes embarqués, je serai ravie d’échanger avec vous.
            </p>
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
