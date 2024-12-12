import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/index";
import About from "../pages/About";
import RegisterMovie from "../pages/RegisterMovie";
import GetAllMovies from "../pages/GetAllMovies";
import ActionGenre from "../pages/ActionGenre";
import AdventureGenre from "../pages/AdventureGenre";
import ComedyGenre from "../pages/ComedyGenre";
import DramaGenre from "../pages/DramaGenre";
import DocumentaryGenre from "../pages/DocumentaryGenre";
import SuspenseGenre from "../pages/SuspenseGenre";
import RomanceGenre from "../pages/RomanceGenre";
import AnimationGenre from "../pages/AnimationGenre";

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
  {
    path: "/actionGenre",
    element: <ActionGenre />,
  },
  {
    path: "/adventureGenre",
    element: <AdventureGenre />,
  },
  {
    path: "/comedyGenre",
    element: <ComedyGenre />,
  },
  {
    path: "/dramaGenre",
    element: <DramaGenre />,
  },
  {
    path: "/documentaryGenre",
    element: <DocumentaryGenre />,
  },
  {
    path: "/suspenseGenre",
    element: <SuspenseGenre />,
  },
  {
    path: "/romanceGenre",
    element: <RomanceGenre />,
  },
  {
    path: "/animationGenre",
    element: <AnimationGenre />,
  },
]);

export { router };
