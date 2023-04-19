// import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../layouts/Main";
import Courses from "../pages/Courses";
import Faq from "../pages/Faq";
import Blog from "../pages/Blog";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import Register from "../pages/Register";

const { createBrowserRouter } = require("react-router-dom");



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch("http://localhost:5000/courses"),
      },

      {
        path: "/faq",
        element: <Faq></Faq>,
      },

      {
        path: "/blog",
        element: <Blog></Blog>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/register",
        element: <Register></Register>,
      },

      {
        path: "/error",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);


export default router;