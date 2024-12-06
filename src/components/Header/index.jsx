import { Link } from "react-router-dom";
import logo from "../../assets/cineafro.png";
import search_icon from "../../assets/search_icon.svg";
import Li from "../Li";

export default function Header() {
  return (
    <>
      <section className="flex justify-around items-center text-white h-40">
        <div>
          <img className="w-40" src={logo} alt="logo do cineafro" />
        </div>
        <div className="ml-48">
          <ul className="flex">
            <Link to="/">
              <Li text="Home" />
            </Link>
            <Li text="Filmes" />
            <Link to="/about">
              <Li text="Sobre" />
            </Link>
          </ul>
        </div>
        <div className="flex items-center">
          <input
            className="w-72 bg-body mr-5 outline-none border p-2 text-dark_orange rounded-md"
            type="text"
            placeholder="Pesquisar filme"
          />
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
              className="fill-current hover:text-dark_orange"
            >
              <path d="M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z"></path>
            </svg>
          </button>
        </div>
      </section>
      <hr className="border-2 border-dark_orange" />
    </>
  );
}
