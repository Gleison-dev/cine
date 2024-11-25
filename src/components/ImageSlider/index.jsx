export default function ImageSlider({
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
            <p>{genre}</p>
            <p>{year}</p>
          </div>
          <div className="w-96">
            <p className="text-xl">{synopsis}</p>
          </div>
          <div className="flex gap-10">
            <a href={trailer}>
              <button className="w-36 h-14 rounded-md text-black bg-dark_orange hover:bg-light_orange">
                TRAILER
              </button>
            </a>
            <a href={watch}>
              <button
                className="w-36 h-14 rounded-md text-black bg-dark_orange hover:bg-light_orange"
                hover:text-black
              >
                ASSISTIR
              </button>
            </a>
          </div>
        </div>
        <div className="flex justify-center mt-10 mr-16 gap-24">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="#000000"
            viewBox="0 0 256 256"
            className="fill-current hover:text-dark_orange hover:cursor-pointer"
          >
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H107.31l18.35,18.34a8,8,0,0,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,11.32L107.31,120H168A8,8,0,0,1,176,128Z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="#000000"
            viewBox="0 0 256 256"
            className="fill-current hover:text-dark_orange hover:cursor-pointer"
          >
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32Z"></path>
          </svg>
        </div>
      </section>
    </>
  );
}
