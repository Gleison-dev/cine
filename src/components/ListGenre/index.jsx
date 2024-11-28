import CardGenre from "../CardGenre";
import image_adventure from "../../assets/black_panther_poster.png";

export default function ListGenre() {
  return (
    <>
      <section className="mt-20">
        <h1 className="text-2xl text-white ml-20">Gêneros</h1>
      </section>
      <section className="flex justify-center mt-14">
        <CardGenre
          image={image_adventure}
          alt="Imagem do poster do pantera negra"
          genre="Aventura"
        />
      </section>
    </>
  );
}
