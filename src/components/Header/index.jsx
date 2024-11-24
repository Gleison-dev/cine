import logo from "../../assets/cineafro.png";
import search_icon from "../../assets/search_icon.svg";
import Li from "../Li";

export default function Header() {
  return (
    <>
      <section className="flex justify-around items-center">
        <div>
          <img className="w-52" src={logo} alt="logo do cineafro" />
        </div>
        <div>
          <ul className="flex">
            <Li text="Home" />
            <Li text="Filmes" />
            <Li text="Sobre" />
          </ul>
        </div>
        <div className="flex items-center">
          <input type="text" placeholder="Pesquisar filme" />
          <button>
            <img src={search_icon} alt="Ícone de pesquisa" />
          </button>
        </div>
      </section>
    </>
  );
}
