import logo from './logo.svg';
import {RouterProvider} from 'react-router-dom'
import { routes } from './routes/Routes';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
      <div >
        <RouterProvider router={routes}></RouterProvider>
      </div>
  );
}

export default App;




/*
import {RouterProvider} from 'react-router-dom'
import { routes } from './Routes/Routes';

function App() {
  return (
    <div >
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
*/