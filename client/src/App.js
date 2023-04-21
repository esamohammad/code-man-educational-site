import logo from "./logo.svg";
import { RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import router from "./routes/Routes";
import Loader from "./utilities/Loader";
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
            <div className="mx-auto max-w-full">
              <RouterProvider router={router}></RouterProvider>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
