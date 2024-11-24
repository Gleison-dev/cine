import logo from "../../assets/cineafro.png";
import search_icon from "../../assets/search_icon.svg";
import Li from "../Li";

export default function Header() {
  return (
    <>
      <section>
        <div>
          <img src={logo} alt="logo do cineafro" />
        </div>
        <div>
          <ul>
            <Li text="Home" />
            <Li text="Filmes" />
            <Li text="Sobre" />
          </ul>
          <input type="text" placeholder="Pesquisar filme" />
          <button>
            <img src={search_icon} alt="Ícone de pesquisa" />
          </button>
        </div>
      </section>
    </>
  );
}
