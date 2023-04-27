
import { RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import router from "./routes/Routes";
import Loader from "./utilities/Loader";
import { Toaster } from 'react-hot-toast';
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  });

  return (
    <div>
      <div>
        {isLoading ? (
          <Loader></Loader>
        ) : (
          <div>
            <div className="mx-auto  max-w-screen-2xl  ">
              <RouterProvider router={router}></RouterProvider>
              <Toaster />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

//!max-w-screen-2xl ata 1536 px porjonto
//!max-w-full  ata full w -100%
//!max-w-screen-xl ata 1280px porjonto