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
            <h1>{title}</h1>
          </div>
          <div className="flex gap-5">
            <p>{genre}</p>
            <p>{year}</p>
          </div>
          <div className="w-96">
            <p>{synopsis}</p>
          </div>
          <div className="flex gap-10">
            <a href={trailer}>
              <button>TRAILER</button>
            </a>
            <a href={watch}>
              <button>ASSISTIR</button>
            </a>
          </div>
        </div>
        <div className="flex justify-center gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H107.31l18.35,18.34a8,8,0,0,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,11.32L107.31,120H168A8,8,0,0,1,176,128Z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32Z"></path>
          </svg>
        </div>
      </section>
    </>
  );
}
