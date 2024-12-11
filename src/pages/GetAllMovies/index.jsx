import { useEffect, useState } from "react";
import Header from "../../components/Header";
import axios from "axios";
import CardMovie from "../../components/CardMovie";

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
          <div>
            <CardMovie
              title="Pantera Negra"
              image="https://upload.wikimedia.org/wikipedia/pt/thumb/2/28/Black_Panther_2018.jpg/250px-Black_Panther_2018.jpg"
              genre="Ação"
              year="2018"
              synopsis="Conheça a história de T'Challa, príncipe do reino de Wakanda, que perde o seu pai e viaja para os Estados Unidos, onde tem contato com os Vingadores. Entre as suas habilidades estão a velocidade, inteligência e os sentidos apurados."
            />
          </div>
        </div>
      </section>
    </>
  );
}
