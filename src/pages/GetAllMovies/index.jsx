import { useState } from "react";
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
      console.log(movies);
    } catch (error) {
      return console.error(error);
    }
  };

  return (
    <>
      <section>
        <div>
          <Header />
        </div>
        
      </section>
    </>
  );
}
