import { useEffect, useState } from "react";
import Header from "../../components/Header";
import axios from "axios";

export default function GetAllMovies() {
  const [movies, setMovies] = useState([]);

  const getAllMovies = async () => {
    try {
      const { data } = await axios.get(
        "https://cine-afro-backend.onrender.com/movies"
      );
      setMovies(data);
    } catch (error) {
      return console.error(error);
    }
  };

  useEffect(() => {
    getAllMovies();
  }, [movies]);

  return (
    <>
      <section>
        <div>
          <Header />
        </div>
        <div>
          <div>
            <h1>Filmes</h1>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
}
