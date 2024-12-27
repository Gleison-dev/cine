import { useEffect, useState } from "react";
import Header from "../../components/Header/index";
import Input from "../../components/Input/index";
import axios from "axios";
import CardMovie from "../../components/CardMovie/index";

export default function GetMovieByTitle() {
  const [movie, setMovie] = useState([]);
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        "https://cine-afro-backend.onrender.com/movieByTitle",
        {
          params: {
            title: title,
          },
        }
      );
      setMovie(data.movieByTitle);
      console.log(movie);
    } catch (error) {
      return console.error("Não foi possível buscar o filme: ", error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="text-body_white">
        <div>
          <Header />
        </div>
        <div className="flex flex-col justify-center items-center mt-40 gap-5">
          <div>
            <h1 className="text-2xl">Pesquisar Filme</h1>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <Input
                placeholder="Digite o título do filme"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <button onClick={handleSearch}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="#FFFF"
                  viewBox="0 0 256 256"
                  className="fill-current hover:text-dark_orange"
                >
                  <path d="M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z"></path>
                </svg>
              </button>
            </div>
          </div>
          {isLoading ? (
            <div className="flex flex-col items-center justify-center mt-52">
              <div>
                <div className="loader"></div>
              </div>
              <div>
                <p>Carregando...</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap justify-evenly gap-8 mt-20">
              {Array.isArray(movie) && movie.length > 0 ? (
                movie.map((i) => (
                  <CardMovie
                    key={i.id}
                    title={i.title}
                    genre={i.genre}
                    year_release={i.year_release}
                    image={i.url_image}
                    alt={i.alt}
                    synopsis={i.synopsis}
                    link_trailer={i.trailer}
                    link_watch={i.streaming}
                  />
                ))
              ) : (
                <div className="flex justify-center items-center mt-20">
                  <p className="text-xl">Nenhum filme encontrado!</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
