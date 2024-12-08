import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/index";
import About from "../pages/About";
import RegisterMovie from "../pages/RegisterMovie";
import GetAllMovies from "../pages/GetAllMovies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movies",
    element: <GetAllMovies />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/registerMovie",
    element: <RegisterMovie />,
  },
]);

export { router };
