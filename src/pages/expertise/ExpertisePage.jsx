import React from "react";
import PageWrapper from "../../components/PageWrapper"; // wrapper pour l'animation
import { useNavigate } from "react-router-dom";

const ExpertisePage = () => {
const navigate = useNavigate(); // Hook pour naviguer
const goToExpertise = () => {

    navigate("/Portfolio/"); // route vers la page Expertise
  };
  return (
    <PageWrapper animation="matrix"> {/* animation spécifique à cette page */}
        <button className="btn btn-primary mt-3" onClick={goToExpertise}>HOME</button>
    </PageWrapper>
  );
};

export default ExpertisePage;
