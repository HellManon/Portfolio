import '../style/App.css';
import Header from "./header";
import Home from "./home";
import TechList from "./techList";
import Expertise from "./expertise";
import Projects from './projects';
import Experiences from './experiences';



function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <TechList />
      <Expertise />
      <Projects  />
      <Experiences />
    </div>
  );
}

export default App;
