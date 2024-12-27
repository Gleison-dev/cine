import { Link } from "react-router-dom";
import logo from "../../assets/cineafro.png";
import Li from "../Li";

export default function Header() {
  return (
    <>
      <section className="flex justify-around items-center text-white h-40 relative">
        <div>
          <img className="w-40" src={logo} alt="logo do cineafro" />
        </div>
        <div className="ml-48">
          <ul className="flex">
            <Link to="/">
              <Li text="Home" />
            </Link>
            <Link to="/movies">
              <Li text="Filmes" />
            </Link>
            <Link to="/about">
              <Li text="Sobre" />
            </Link>
          </ul>
        </div>
        <div className="flex items-center">
          <Link to="/getMovieByTitle">
            <button className="flex items-center gap-2 text-lg bg-dark_orange p-4 rounded-md text-black">
              Pesquisar filme
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z"></path>
              </svg>
            </button>
          </Link>
        </div>
      </section>
      <hr className="border-2 border-dark_orange" />
    </>
  );
}
