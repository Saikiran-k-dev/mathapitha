import logo from './logo.svg';
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Organisation from './pages/Organisation';
import AnimalCare from './pages/AnimalCare';
import Education from './pages/Education';
import Envirnoment from './pages/Envirnoment';
import Health from './pages/Health';
import SaveWater from './pages/SaveWater';
import SelfCare from './pages/SelfCare';
import Service from './pages/Service';
import Spiritual from './pages/Spiritual';
import Contact from './pages/Contact';
function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Nav />,
      children:[{
        index:true,
        element:<Home />
      },
    {path:"organisation",
      element:<Organisation />
    },
    {path:"animalcare",element:<AnimalCare />},
    {path:"education",element:<Education />},
    {path:"environment",element:<Envirnoment />},
    {path:"health",element:<Health />},
    {path:"savewater",element:<SaveWater />},
    {path:"selfcare",element:<SelfCare />},
    {path:"service",element:<Service />},
    {path:"spiritual",element:<Spiritual />},
    {path:"contact",element:<Contact />}
    ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
