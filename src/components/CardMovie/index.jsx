import Button from "../Button";

export default function TrendingCard({
  title,
  image,
  alt,
  synopsis,
  link_trailer,
  link_watch,
}) {
  return (
    <>
      <section className="section-card flex justify-center items-center gap-10 shadow-xl p-4 rounded-md bg-black_card">
        <div>
          <img className="w-52" src={image} alt={alt} />
        </div>
        <div className="flex flex-col w-80 space-y-8 items">
          <h1 className="text-white text-3xl">{title}</h1>
          <p className="text-white">{synopsis}</p>
          <div className="space-x-8">
            <a href={link_trailer} target="_blank">
              <Button text="TRAILER" />
            </a>
            <a href={link_watch} target="_blank">
              <Button text="ASSISTIR" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
