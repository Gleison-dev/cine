import TrendingCard from "../TrendingCard";
import american_fiction from "../../assets/american_fiction_poster.jpg";

export default function Trending() {
  return (
    <>
      <section>
        <div>
          <h1>Em alta</h1>
        </div>
        <div>
          <TrendingCard
            image={american_fiction}
            synopsis="Lorem ipsum dolor sit amet. Aut sunt aliquam et dolores velit est ipsa  voluptatem ut impedit quisquam! Sit ratione vitae ut galisum accusamus  At fugit praesentium? Est labore maxime eum consectetur neque ex  voluptas quia qui dicta illo et similique rerum 33 modi aperiam. Non  quod quisquam ut quos temporibus est voluptatem quaerat ut vitae  quisquam."
            link_trailer="https://youtu.be/_vR1BPaVvLo?si=1umbtBZ5A5KdJu8E"
            link_watch="https://www.primevideo.com/dp/amzn1.dv.gti.58cb3b72-9cb7-41bc-83d4-3837fda6a071?autoplay=0&ref_=atv_cf_strg_wb"
          />
        </div>
      </section>
    </>
  );
}
