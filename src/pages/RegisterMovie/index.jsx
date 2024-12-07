import Input from "../../components/Input";
import Label from "../../components/Label";
import { useState, useEffect } from "react";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import Header from "../../components/Header";

export default function RegisterMovie() {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [director, setDirector] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [year_release, setYear_release] = useState("");
  const [actors, setActors] = useState([]);
  const [watch, setWatch] = useState("");
  const [trailer, setTrailer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <section className="flex flex-col justify-center items-center h-screen text-white">
        <div>
          <h1>Cadastrar Filme</h1>
        </div>
        <div>
          <form>
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
              placeholder="Digite o título do filme"
              value={director}
              onChange={(e) => setDirector(e.target.value)}
            />
            <Label text="Sinopse:" />
            <TextArea
              placeholder="Digite a sinopse do filme"
              value={synopsis}
              onChange={(e) => setSynopsis(e.target.value)}
            />
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
            <Button text="Cadastrar" />
          </form>
        </div>
      </section>
    </>
  );
}
