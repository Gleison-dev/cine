import Header from "../../components/Header/index";
import Input from "../../components/Input/index";

export default function GetMovieByTitle() {
  return (
    <>
      <section className="text-body_white">
        <div>
          <Header />
        </div>
        <div className="flex flex-col justify-center items-center mt-52 gap-5">
          <div>
            <h1 className="text-2xl">Pesquisar Filme</h1>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <Input placeholder="Digite o título do filme" />
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="#FFFF"
                viewBox="0 0 256 256"
                className="fill-current hover:text-dark_orange hover:cursor-pointer"
              >
                <path d="M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
