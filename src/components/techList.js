import React, { useEffect } from "react";
import AOS from "aos";
import "../style/techlist.css";
import { technologies } from "../datas/technologies";

function TechList() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-out', once: true });
  }, []);

  return (
    <section className="techlist" id="techlist">
      <h2 data-aos="fade">Mes technos</h2>

      {Object.entries(technologies).map(([category, techList], idx) => (
        <div key={idx} className="tech-category" data-aos="fade-up">
          <h3>{category}</h3>
          <ul className="tech-list">
            {techList.map((tech, index) => (
              <li key={index} className="tech-item">
                <img className="tech-item-cover" src={tech.cover} alt={`${tech.name} logo`} />
                <span className="tech-item-name">{tech.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default TechList;
