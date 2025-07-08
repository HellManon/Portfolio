import '../style/App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Main from '../Pages/main';
import Spa from '../components/spa';

const router = createBrowserRouter([
    {
      path: '/Portfolio/',
      element: <Main />
    },
    {
      path: '/Portfolio/spa',
      element: <Spa />
    }
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;