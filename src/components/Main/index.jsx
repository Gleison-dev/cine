import { useEffect, useState } from "react";
import ImageSlider from "../ImageSlider";
import black_panther from "../../assets/black_panther_banner.jpg";
import years_a_slave from "../../assets/years_a_slave_banner.jpg";

const images = [
  {
    alt: "Imagem do Pantera Negra",
    title: "Pantera Negra",
    genre: "Aventura",
    year: "2018",
    synopsis:
      "Lorem ipsum dolor sit amet. Aut sunt aliquam et dolores velit est ipsa  voluptatem ut impedit quisquam! Sit ratione vitae ut galisum accusamus  At fugit praesentium? Est labore maxime eum consectetur neque ex  voluptas quia qui dicta illo et similique rerum 33 modi aperiam. Non  quod quisquam ut quos temporibus est voluptatem quaerat ut vitae  quisquam.",
    trailer: "#",
    watch: "#",
    background: black_panther,
  },
  {
    alt: "Imagem de 12 Anos de Escravidão",
    title: "12 Anos de Escravidão",
    genre: "Drama",
    year: "2013",
    synopsis:
      "Lorem ipsum dolor sit amet. Aut sunt aliquam et dolores velit est ipsa  voluptatem ut impedit quisquam! Sit ratione vitae ut galisum accusamus  At fugit praesentium? Est labore maxime eum consectetur neque ex  voluptas quia qui dicta illo et similique rerum 33 modi aperiam. Non  quod quisquam ut quos temporibus est voluptatem quaerat ut vitae  quisquam.",
    trailer: "#",
    watch: "#",
    background: years_a_slave,
  },
];

export default function Main() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative">
        <div
          className="bg h-screen opacity-25 absolute inset-0"
          style={{
            backgroundImage: `url(${images[currentIndex].background})`, // Adicione a URL corretamente
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="flex h-screen ml-52 items-center relative z-10">
          <ImageSlider
            image={images[currentIndex].background}
            alt={images[currentIndex].alt}
            title={images[currentIndex].title}
            genre={images[currentIndex].genre}
            year={images[currentIndex].year}
            synopsis={images[currentIndex].synopsis}
            trailer={images[currentIndex].trailer}
            watch={images[currentIndex].watch}
          />
        </div>
      </section>
    </>
  );
}
