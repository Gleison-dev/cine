import { useEffect, useState } from "react";
import Header from "../../components/Header";
import axios from "axios";
import CardMovie from "../../components/CardMovie";
import "./style.css";

export default function GetAllMovies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllMovies = async () => {
    try {
      const { data } = await axios.get(
        "https://cine-afro-backend.onrender.com/movies"
      );
      setMovies(data.movies);
      setIsLoading(false);
    } catch (error) {
      return console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <>
      <section>
        <div>
          <Header />
        </div>
        <div className="mt-20 border p-10 rounded-md border-black_card">
          <div className="flex justify-start ml-32">
            <h1 className="text-dark_orange text-3xl underline">Filmes</h1>
          </div>
          {isLoading ? (
            <div className="flex flex-col items-center justify-center mt-52">
              <div className="loader"></div>
              <p className="text-white">Carregando...</p>
            </div>
          ) : (
            <div className="flex flex-wrap justify-evenly gap-8 mt-20">
              {Array.isArray(movies) &&
                movies.map((i) => (
                  <CardMovie
                    key={i.id}
                    title={i.title}
                    genre={i.genre}
                    year_release={i.year_release}
                    image={i.url_image}
                    synopsis={i.synopsis}
                    link_trailer={i.trailer}
                    link_watch={i.streaming}
                  />
                ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
