import '../style/App.css';
import Header from "./header";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import catGif from "../assets/chat.gif"
import catGif2 from "../assets/chat (28).gif"

function App() {
  return (
    <div className="App">
      <Header />
     <img src={catGif} alt="gif cat 1"></img><br></br>
     <img src={catGif2} alt="gif cat 2"></img>
    </div>
  );
}

export default App;
