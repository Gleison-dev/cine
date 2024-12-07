import Input from "../../components/Input";
import Label from "../../components/Label";
import { useState } from "react";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import Header from "../../components/Header";
import blob_background from "../../assets/blob_background.jpg";

export default function RegisterMovie() {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [director, setDirector] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [year_release, setYear_release] = useState("");
  const [actors, setActors] = useState("");
  const [watch, setWatch] = useState("");
  const [trailer, setTrailer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do filme
  };

  return (
    <>
      <Header />
      <div className="relative h-screen">
        {/* Contêiner pai com position relative */}
        <div
          className="absolute inset-0 h-full"
          style={{
            backgroundImage: `url(${blob_background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.7,
            zIndex: -1, // Background atrás de outros elementos
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Overlay com opacidade */}
        <div className="flex flex-col justify-center items-center h-full text-white relative z-10">
          <div className="border p-10 shadow-2xl rounded-md">
            <div className="flex justify-center">
              <h1 className="text-3xl">Cadastrar Filme</h1>
            </div>
            <div className="mt-16">
              <form
                onSubmit={handleSubmit}
                className="flex gap-20 items-center"
              >
                <div className="space-y-2">
                  <Label text="Título:" />
                  <Input
                    placeholder="Digite o título do filme"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <Label text="Gênero:" />
                  <Input
                    placeholder="Digite o gênero do filme"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                  />
                  <Label text="Diretor(a):" />
                  <Input
                    placeholder="Digite o nome do diretor(a)"
                    value={director}
                    onChange={(e) => setDirector(e.target.value)}
                  />
                  <Label text="Sinopse:" />
                  <TextArea
                    placeholder="Digite a sinopse do filme"
                    value={synopsis}
                    onChange={(e) => setSynopsis(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label text="Ano de lançamento:" />
                  <Input
                    type="number"
                    placeholder="Insira o ano de lançamento do filme"
                    value={year_release}
                    onChange={(e) => setYear_release(e.target.value)}
                  />
                  <Label text="Atores:" />
                  <Input
                    placeholder="Insira o nome dos atores"
                    value={actors}
                    onChange={(e) => setActors(e.target.value)}
                  />
                  <Label text="Streaming:" />
                  <Input
                    placeholder="Insira o link do streaming"
                    value={watch}
                    onChange={(e) => setWatch(e.target.value)}
                  />
                  <Label text="Trailer:" />
                  <Input
                    placeholder="Insira o link do trailer"
                    value={trailer}
                    onChange={(e) => setTrailer(e.target.value)}
                  />
                </div>
              </form>
              <div className="flex justify-center mt-10">
                <Button text="Cadastrar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
