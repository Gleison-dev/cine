import axios from "axios";
import Header from "../Header/index";
import { useState } from "react";
import "./style.css";
import CardMovie from "../CardMovie/index";

export default function MovieByGenre({ url_genre, text_genre }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleFunction = async () => {
    const { data } = await axios.get(
      `https://cine-afro-backend.onrender.com/${url_genre}`
    );
    setMovies(data.MovieByGenre);
    setIsLoading(false);
  };
  return (
    <>
      <section>
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
            <CardMovie
              key={key}
              title={title}
              genre={genre}
              year_release={year_release}
              image={image}
              alt={alt}
              synopsis={synopsis}
              link_trailer={link_trailer}
              link_watch={link_trailer}
            />
          </div>
        )}
      </section>
    </>
  );
}
