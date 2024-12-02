import CardGenre from "../CardGenre";
import image_adventure from "../../assets/black_panther_poster.png";
import image_drama from "../../assets/malcon_x_poster.jpg";
import image_action from "../../assets/django_livre_poster.jpg";

export default function ListGenre() {
  return (
    <>
      <section className="mt-20">
        <h1 className="text-2xl text-white ml-20">Gêneros</h1>
      </section>
      <section className="flex justify-around mt-14">
        <CardGenre
          image={image_adventure}
          alt="Imagem do poster do pantera negra"
          genre="Aventura"
          page="/movieByGenre"
        />
        <CardGenre
          image={image_drama}
          alt="Imagem do poster do Malcom X"
          genre="Drama"
          page="/movieByGenre"
        />
        <CardGenre
          image={image_action}
          alt="Imagem do poster do Django Livre"
          genre="Ação"
          page="/movieByGenre"
        />
      </section>
    </>
  );
}
