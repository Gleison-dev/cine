import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/index";
import About from "../pages/About";
import RegisterMovie from "../pages/RegisterMovie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
