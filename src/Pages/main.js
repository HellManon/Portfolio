import React  from "react";
import '../style/App.css'
import Header from "./main/components/header";
import Home from "./main/components/home";
import TechList from "./main/components/techList";
import Expertise from "./main/components/expertise";
import Projects from './main/components/projects';
import Experiences from './main/components/experiences';
import Footer from './main/components/footer';

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