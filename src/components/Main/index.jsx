import ImageSlider from "../ImageSlider";
import "./style.css";

export default function Main() {
  return (
    <>
      <section className="relative">
        <div className="bg h-screen opacity-50 absolute inset-0"></div>
        <div className="flex h-screen ml-52 items-center relative z-10">
          <ImageSlider
            alt="Imagem do pantera negra"
            title="Pantera Negra"
            genre="Aventura"
            year="2018"
            synopsis="Lorem ipsum dolor sit amet. Aut sunt aliquam et dolores velit est ipsa 
voluptatem ut impedit quisquam! Sit ratione vitae ut galisum accusamus 
At fugit praesentium? Est labore maxime eum consectetur neque ex  voluptas quia
qui dicta illo et similique rerum 33 modi aperiam. Non  quod quisquam ut quos temporibus
est voluptatem quaerat ut vitae  quisquam."
            trailer="#"
            watch="#"
          />
        </div>
      </section>
    </>
  );
}
