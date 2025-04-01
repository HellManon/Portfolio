import '../style/App.css';
import Header from "./header";
import Home from "./home";
import TechList from "./techList";
import Expertise from "./expertise";



function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <TechList />
      <Expertise />
    </div>
  );
}

export default App;
