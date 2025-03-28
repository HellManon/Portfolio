import '../style/App.css';
import Header from "./header";
import Home from "./home";
import TechList from "./techList";



function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <TechList />
    </div>
  );
}

export default App;
