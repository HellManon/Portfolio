import React from "react";
import experiences from "../datas/experiences.json";
import "../style/experiences.css"

const Experiences = () => {
  return (
    <section id="experiences" className="container py-5">
      <h2 className="text-center mb-5" data-aos="fade">Expériences Professionnelles</h2>
      {experiences.map((exp, index) => (
        <article
          key={index}
          className="mb-5 p-4  article-experiences"
          data-aos="fade-right"
        >
          <div className="d-flex flex-wrap flex-md-nowrap justify-content-between align-items-start mb-2 titre-experience">
  <h4 className="fw-bold mb-2 mb-md-0">
    CLIENT : {exp.client}
  </h4>
  <h5 className=" text-md-end periode">{exp.periode}</h5>
</div>
          <p className="mt-2 job-role">
            <strong>Job Role chez le client :</strong> {exp.jobRole}
          </p>
          <p>
            <strong>Contexte :</strong> {exp.contexte}
          </p>

          {exp.activites.map((act, i) => (
            <div key={i} className="mb-3 activite">
              <h6 className="fw-bold">{`Activités : ${act.titre}`}</h6>
              <ul className="ps-3 liste">
                {act.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          ))}

          <p className="mb-0 environnement">
            <strong>Environnement Technique :</strong> {exp.techs}
          </p>
        </article>
      ))}
    </section>
  );
};

export default Experiences;
