import React, { useEffect } from "react";
import { FaArrowAltCircleRight } from 'react-icons/fa'; // Icône flèche verte
import skillsTechniques from "../datas/expertise/skillsTechnique.json";
import skillsFonctionnel from "../datas/expertise/skillsFonctionnel.json";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importation du CSS d'AOS
import "../style/expertise.css";

const Expertise = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Durée de l'animation (en ms)
      easing: 'ease-in-out', // Courbe d'animation
      once: false, // L'animation se joue une seule fois lors du scroll
    });
  }, []);

  return (
    <div id="expertise">
      <h2 data-aos="fade" className="text-center mb-5" data-aos="fade">Compétences techniques</h2>
      {Object.entries(skillsTechniques.compétences).map(([categorie, sousCategories]) => (
        <div key={categorie}>
          <div className="row">
            {Object.entries(sousCategories).map(([sousCategorie, competences]) => (
              <div
                key={sousCategorie}
                className="col-12 col-md-6 mb-4"
                data-aos="fade-up" // Animation fade-up
              >
                <h3 className="text-primary h3-expertise">{sousCategorie.replace(/_/g, " ").toUpperCase()}</h3>
                <ul className="list-unstyled">
                  {competences.map((competence, index) => (
                    <li key={index} className="d-flex align-items-center">
                      <FaArrowAltCircleRight className="text-success mr-2" />
                      <span>{competence}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}

      <h2 data-aos="fade" className="text-center mt-5 mb-5" data-aos="fade" >Compétences fonctionnelles</h2>
      {Object.entries(skillsFonctionnel.compétences).map(([categorie, sousCategories]) => (
        <div key={categorie}>
          <div className="row">
            {Object.entries(sousCategories).map(([sousCategorie, competences]) => (
              <div
                key={sousCategorie}
                className="col-12 col-md-6 mb-4"
                data-aos="fade-up" // Animation fade-up
              >
                <h3 className="text-primary h3-expertise">{sousCategorie.replace(/_/g, " ").toUpperCase()}</h3>
                <ul className="list-unstyled">
                  {competences.map((competence, index) => (
                    <li key={index} className="d-flex align-items-center">
                      <FaArrowAltCircleRight className="text-success mr-2" />
                      <span>{competence}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Expertise;
