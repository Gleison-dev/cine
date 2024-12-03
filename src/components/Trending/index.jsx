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
          />
        </div>
      </section>
    </>
  );
}
