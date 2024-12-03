import Button from "../Button";

export default function TrendingCard({ image, alt, synopsis }) {
  return (
    <>
      <section className="flex justify-center items-center gap-10 border">
        <div>
          <img className="w-52" src={image} alt={alt} />
        </div>
        <div className="flex flex-col w-80 space-y-8 items">
          <p>{synopsis}</p>
          <div className="space-x-8">
            <Button text="TRAILER" />
            <Button text="ASSISTIR" />
          </div>
        </div>
      </section>
    </>
  );
}
