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
            <Li text="Ação" />
            <Li text="Aventura" />
            <Li text="Comédia" />
            <Li text="Drama" />
          </ul>
          <ul className="flex justify-center">
            <Li text="Documentário" />
            <Li text="Suspense" />
            <Li text="Romance" />
            <Li text="Animação" />
          </ul>
        </div>
      </section>
    </>
  );
}
