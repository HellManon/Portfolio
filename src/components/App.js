import '../style/App.css';
import catGif from "../assets/chat.gif"
import catGif2 from "../assets/chat (28).gif"

function App() {
  return (
    <div className="App">
     <h1>Mon portfolio</h1>
     <p>Site en construction</p>
     <img src={catGif} alt="gif cat 1"></img><br></br>
     <img src={catGif2} alt="gif cat 2"></img>
    </div>
  );
}

export default App;
