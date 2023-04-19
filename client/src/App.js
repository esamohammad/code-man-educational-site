import logo from './logo.svg';
import {RouterProvider} from 'react-router-dom'
import router from './routes/Routes';
import './App.css';


function App() {
  return (
      <div className='max-w-full mx-auto'>
        <RouterProvider router={router}></RouterProvider>
      </div>
  );
}

export default App;




