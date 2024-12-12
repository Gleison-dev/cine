import { Link } from "react-router-dom";
import Li from "../Li";

export default function ListGenre() {
  return (
    <>
      <section className="bg-body_white h-80">
        <section className="flex justify-center">
          <h1 className="text-3xl mt-10 underline">Gêneros</h1>
        </section>
        <div className="space-y-4 mt-20">
          <ul className="flex justify-center">
            <Link to="/actionGenre">
              <Li text="Ação" />
            </Link>
            <Link to="/adventureGenre">
              <Li text="Aventura" />
            </Link>
            <Link to="/comedyGenre">
              <Li text="Comédia" />
            </Link>
            <Link to="/dramaGenre">
              <Li text="Drama" />
            </Link>
          </ul>
          <ul className="flex justify-center">
            <Link to="/documentaryGenre">
              <Li text="Documentário" />
            </Link>
            <Link to="/suspenseGenre">
              <Li text="Suspense" />
            </Link>
            <Link to="/romanceGenre">
              <Li text="Romance" />
            </Link>
            <Link to="/animationGenre">
              <Li text="Animação" />
            </Link>
          </ul>
        </div>
      </section>
    </>
  );
}
