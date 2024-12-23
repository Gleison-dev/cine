import axios from "axios";
import Header from "../Header/index";
import { useState, useEffect } from "react";
import "./style.css";
import CardMovie from "../CardMovie/index";

export default function MovieByGenre({ url_genre, text_genre }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleFunction = async () => {
    try {
      const { data } = await axios.get(
        `https://cine-afro-backend.onrender.com/movieByGenre?genre=${url_genre}`
      );
      setMovies(data.movieByGenre);
      setIsLoading(false);
      console.log(movies);
    } catch (error) {
      return console.error("Não foi possível buscar os livros: ", error);
    }
  };

  useEffect(() => {
    handleFunction();
  }, []);
  return (
    <>
      <section className="text-body_white">
        <div>
          <Header />
        </div>
        <div>
          <h1>{text_genre}</h1>
        </div>
        {isLoading ? (
          <div>
            <div>
              <div className="loader"></div>
              <p>Carregando...</p>
            </div>
          </div>
        ) : (
          <div>
            {Array.isArray(movies) &&
              movies.map((i) => (
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
              ))}
          </div>
        )}
      </section>
    </>
  );
}
