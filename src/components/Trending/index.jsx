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
        <div className="flex justify-evenly gap-10 mt-16">
          <TrendingCard
            image="https://upload.wikimedia.org/wikipedia/pt/1/1b/%C3%93_Pa%C3%AD%2C_%C3%93_2.png"
            synopsis="
Dona Joana vive o luto pela perda de Cosme e Damião e segue enfrentando os problemas de convivência com os inquilinos do cortiço no bairro do Pelourinho. O local se prepara para a festa de Iemanjá, enquanto lida com as polêmicas dos vizinhos."
            link_trailer="https://youtu.be/2j8UPVfGy-E?si=3GdZzGez_XyFrZsF"
            link_watch="https://globoplay.globo.com/o-pai-o-2/t/q5CfFTw1Zz/"
          />
          <TrendingCard
            image="https://www.sonypictures.com.br/sites/brazil/files/2023-08/SN_HomemAranha_1400x2100%20%281%29.jpg"
            synopsis="Depois de se reunir com Gwen Stacy, Homem-Aranha é jogado no multiverso. Lá, o super-herói aracnídeo encontra uma numerosa equipe encarregada de proteger sua própria existência."
            link_trailer="https://youtu.be/ME0QiRVsmVI?si=eeZ05jOlO4fw_Tqh"
            link_watch="https://www.max.com/br/pt/movies/homem-aranha-atraves-do-aranhaverso/08f3260f-1512-4c90-a3df-fc2e407ba708?utm_source=universal_search"
          />
        </div>
      </section>
    </>
  );
}
