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
