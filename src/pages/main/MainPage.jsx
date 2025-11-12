import React from "react";
import PageWrapper from "../../components/PageWrapper"; // wrapper pour animation
import Header from "./components/header";
import Home from "./components/home";
import TechList from "./components/techList";
import Expertise from "./components/expertise";
import Projects from './components/projects';
import Experiences from './components/experiences';
import Footer from './components/footer';

const MainPage = () => {
  return (
    <PageWrapper>
      <Header />
      <Home />
      <TechList />
      <Expertise />
      <Projects />
      <Experiences />
      <Footer />
    </PageWrapper>
  );
};

export default MainPage;
