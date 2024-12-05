import TrendingCard from "../TrendingCard";
import american_fiction from "../../assets/american_fiction_poster.jpg";
import the_kitchen from "../../assets/the_kitchen_poster.jpeg";

export default function Trending() {
  return (
    <>
      <section className="mt-10 pl-10 border p-4 rounded-xl border-black_card">
        <div>
          <h1 className="text-3xl text-dark_orange">Em alta</h1>
        </div>
        <div className="flex justify-evenly gap-10 mt-16">
          <TrendingCard
            image={american_fiction}
            synopsis="Monk é um escritor negro brilhante, mas seus livros não são populares já que ele se recusa a retratar negros de forma estereotipada em seu trabalho. Ele é pressionado por seu editor a criar uma obra comercial e escreve uma história carregada de preconceitos como piada."
            link_trailer="https://youtu.be/_vR1BPaVvLo?si=1umbtBZ5A5KdJu8E"
            link_watch="https://www.primevideo.com/dp/amzn1.dv.gti.58cb3b72-9cb7-41bc-83d4-3837fda6a071?autoplay=0&ref_=atv_cf_strg_wb"
          />
          <TrendingCard
            image={the_kitchen}
            synopsis="Izi está prestes a sair do The Kitchen, um dos últimos conjuntos habitacionais de Londres. Mas precisa tomar decisões difíceis quando o jovem Benji entra em sua vida."
            link_trailer="https://youtu.be/4ryk-PS-0ws?si=g21cgyfejznLvxSp"
            link_watch="https://www.netflix.com/title/81557731"
          />
        </div>
      </section>
    </>
  );
}
