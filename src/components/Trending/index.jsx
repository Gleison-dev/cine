import TrendingCard from "../TrendingCard";
import american_fiction from "../../assets/american_fiction_poster.jpg";

export default function Trending() {
  return (
    <>
      <section className="mt-20 pl-10">
        <div>
          <h1 className="text-3xl text-dark_orange">Em alta</h1>
        </div>
        <div className="mt-16">
          <TrendingCard
            image={american_fiction}
            synopsis="Monk é um escritor negro brilhante, mas seus livros não são populares já que ele se recusa a retratar negros de forma estereotipada em seu trabalho. Ele é pressionado por seu editor a criar uma obra comercial e escreve uma história carregada de preconceitos como piada."
            link_trailer="https://youtu.be/_vR1BPaVvLo?si=1umbtBZ5A5KdJu8E"
            link_watch="https://www.primevideo.com/dp/amzn1.dv.gti.58cb3b72-9cb7-41bc-83d4-3837fda6a071?autoplay=0&ref_=atv_cf_strg_wb"
          />
        </div>
      </section>
    </>
  );
}
