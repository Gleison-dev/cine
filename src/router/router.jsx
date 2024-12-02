import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/index";
import MovieByGenre from "../pages/MovieByGenre";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movieByGenre",
    element: <MovieByGenre />
  }
]);

export { router };
