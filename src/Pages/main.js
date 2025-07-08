import React  from "react";
import '../style/App.css'
import Header from "../components/header";
import Home from "../components/home";
import TechList from "../components/techList";
import Expertise from "../components/expertise";
import Projects from '../components/projects';
import Experiences from '../components/experiences';
import Footer from '../components/footer';

export function Main () {
    return <div>
    <Header />
    <Home />
    <TechList />
    <Expertise />
    <Projects />
    <Experiences />
    <Footer />
    </div>

}

export default Main;