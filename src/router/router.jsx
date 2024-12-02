import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/index";

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
