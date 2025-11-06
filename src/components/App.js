import '../style/App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Main from '../pages/main';
import Spa from '../pages/spa/spa';

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