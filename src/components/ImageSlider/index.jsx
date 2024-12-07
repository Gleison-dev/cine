export default function ImageSlider({
  image,
  title,
  genre,
  year,
  synopsis,
  trailer,
  watch,
}) {
  return (
    <>
      <section className="text-white">
        <div className="space-y-8">
          <div>
            <h1 className="text-6xl font-bold">{title}</h1>
          </div>
          <div className="flex gap-5 text-lg">
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#000000"
                viewBox="0 0 256 256"
                className="fill-current text-dark_orange"
              >
                <path d="M232,102a6,6,0,0,0,6-6V64a14,14,0,0,0-14-14H32A14,14,0,0,0,18,64V96a6,6,0,0,0,6,6,26,26,0,0,1,0,52,6,6,0,0,0-6,6v32a14,14,0,0,0,14,14H224a14,14,0,0,0,14-14V160a6,6,0,0,0-6-6,26,26,0,0,1,0-52ZM30,192V165.53a38,38,0,0,0,0-75.06V64a2,2,0,0,1,2-2H90V194H32A2,2,0,0,1,30,192Zm196-26.47V192a2,2,0,0,1-2,2H102V62H224a2,2,0,0,1,2,2V90.47a38,38,0,0,0,0,75.06Z"></path>
              </svg>
              <p>{genre}</p>
            </div>
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#000000"
                viewBox="0 0 256 256"
                className="fill-current text-dark_orange"
              >
                <path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm62-90a6,6,0,0,1-6,6H128a6,6,0,0,1-6-6V72a6,6,0,0,1,12,0v50h50A6,6,0,0,1,190,128Z"></path>
              </svg>
              <p>{year}</p>
            </div>
          </div>
          <div className="w-96">
            <p className="text-xl">{synopsis}</p>
          </div>
          <div className="flex gap-10">
            <a href={trailer} target="_blank">
              <button className="w-36 h-14 rounded-md text-black bg-dark_orange hover:bg-light_orange">
                TRAILER
              </button>
            </a>
            <a href={watch} target="_blank">
              <button
                className="w-36 h-14 rounded-md text-black bg-dark_orange hover:bg-light_orange"
                hover:text-black
              >
                ASSISTIR
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
