import logo from "../../assets/cineafro.png";
import Li from "../Li/index";

export default function Footer() {
  return (
    <>
      <section className="flex justify-evenly mt-52 items-start">
        <div>
          <img className="w-52 h-52" src={logo} alt="Logo do site" />
        </div>
        <div>
          <p className="text-white text-xl">Navegação Rápida</p>
          <ul>
            <li className="text-dark_orange text-xl hover:cursor-pointer hover:underline">
              Home
            </li>
            <li className="text-dark_orange text-xl hover:cursor-pointer hover:underline">
              Filmes
            </li>
            <li className="text-dark_orange text-xl hover:cursor-pointer hover:underline">
              Sobre
            </li>
          </ul>
        </div>
        <div>
          <p className="text-white text-xl">Fale Conosco</p>
          <p className="text-dark_orange">cineafro@gmail.com</p>
        </div>
        <div>
          <p className="text-white text-xl">Redes Sociais</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="#E6D62D"
            viewBox="0 0 256 256"
          >
            <path d="M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162ZM176,26H80A54.06,54.06,0,0,0,26,80v96a54.06,54.06,0,0,0,54,54h96a54.06,54.06,0,0,0,54-54V80A54.06,54.06,0,0,0,176,26Zm42,150a42,42,0,0,1-42,42H80a42,42,0,0,1-42-42V80A42,42,0,0,1,80,38h96a42,42,0,0,1,42,42ZM190,76a10,10,0,1,1-10-10A10,10,0,0,1,190,76Z"></path>
          </svg>
        </div>
      </section>
    </>
  );
}
