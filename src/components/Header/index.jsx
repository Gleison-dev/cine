import logo from "../../assets/cineafro.png";
import search_icon from "../../assets/search_icon.svg";
import Li from "../Li";

export default function Header() {
  return (
    <>
      <section className="flex justify-around items-center text-white">
        <div>
          <img className="w-52" src={logo} alt="logo do cineafro" />
        </div>
        <div className="ml-48">
          <ul className="flex">
            <Li text="Home" />
            <Li text="Filmes" />
            <Li text="Sobre" />
          </ul>
        </div>
        <div className="flex items-center">
          <input className="w-72 bg-body mr-5 outline-none border p-2 text-dark_orange" type="text" placeholder="Pesquisar filme" />
          <button>
            <img src={search_icon} alt="Ícone de pesquisa" />
          </button>
        </div>
      </section>
    </>
  );
}
