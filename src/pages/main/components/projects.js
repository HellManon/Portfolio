import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import projects from "../datas/projets/projects.json";
import projectImages from "../datas/imagesProjets.js";
import "../style/projects.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: false });
  }, []);

  return (
    <section id="projets" className="container py-5">
      <h2 className="text-center mb-5" data-aos="fade">Mes projets GitHub</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="col-md-6 mb-4 d-flex"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <div className="card flex-fill project-card">
                <h3 className="card-title text-center mt-3">{project.titre}</h3>
              <img
                src={projectImages[project.id]}
                alt={project.titre}
                className="card-img-top"
              />
              <div className="card-body">
                
                <p className="card-text">{project.description}</p>
                
                
                
              </div>
              <a href={project.lien} target="_blank" className="btn btn-primary card-btn">
                Voir sur GitHub
          </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
