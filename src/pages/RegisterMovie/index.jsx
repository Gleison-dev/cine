import Input from "../../components/Input";
import Label from "../../components/Label";
import { useEffect, useState } from "react";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import Header from "../../components/Header";
import blob_background from "../../assets/blob_background.jpg";
import axios from "axios";

export default function RegisterMovie() {
  const [message, setMessage] = useState("");
  const [movie, setMovie] = useState({});
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [year_release, setYear_release] = useState(0);
  const [streaming, setStreaming] = useState("");
  const [trailer, setTrailer] = useState("");
  const [urlImage, setUrlImage] = useState("");

  const handleRegister = async () => {
    try {
      const { data } = await axios.post(
        "https://cine-afro-backend.onrender.com/createMovie",
        {
          title: title,
          genre: genre,
          year_release: year_release,
          synopsis: synopsis,
          trailer: trailer,
          streaming: streaming,
          url_image: urlImage,
        }
      );
      setMovie(data);
      setMessage(data.newMovie);
    } catch (error) {
      console.error("Não foi possível cadastrar o filme:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister();
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
                    placeholder="Insira o ano de lançamento do filme"
                    value={year_release}
                    onChange={(e) => setYear_release(e.target.value)}
                  />
                  <Label text="Streaming:" />
                  <Input
                    placeholder="Insira o link do streaming"
                    value={streaming}
                    onChange={(e) => setStreaming(e.target.value)}
                  />
                  <Label text="Trailer:" />
                  <Input
                    placeholder="Insira o link do trailer"
                    value={trailer}
                    onChange={(e) => setTrailer(e.target.value)}
                  />
                  <Label text="Imagem:" />
                  <Input
                    placeholder="Insira o link da imagem"
                    value={urlImage}
                    onChange={(e) => setUrlImage(e.target.value)}
                  />
                </div>
              </form>
              <div className="flex justify-center mt-10">
                <Button text="Cadastrar" onClick={handleRegister} />
              </div>
              <div className="flex justify-center mt-10">
                <p className="text-xl text-dark_orange">{message}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
