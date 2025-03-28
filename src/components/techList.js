import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "../style/techlist.css"
import { technologies } from "../datas/technologies";


function TechList() {

    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-out', once: true,  once: false, });
      }, []);

  return (
    <section className="techlist">
      <h2>Mes technos</h2>
      <ul className="tech-list" data-aos="fade-down">
        {technologies.map((tech, index) => (
          <li key={index} className="tech-item">
            <img className="tech-item-cover" src={tech.cover} alt={`${tech.name} logo`} />
            <span className="tech-item-name">{tech.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TechList;
