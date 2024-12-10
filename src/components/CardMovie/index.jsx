import Button from "../Button/index";

export default function CardMovie({
  image,
  title,
  genre,
  year,
  trailer,
  text,
  streaming,
}) {
  return (
    <>
      <section>
        <div>
          <img src={image} />
        </div>
        <div>
          <div>
            <h1>{title}</h1>
          </div>
          <div>
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
          <div>
            <p>{synopsis}</p>
          </div>
        </div>
        <div>
          <a href={trailer}>
            <Button text={text} />
          </a>
          <a href={streaming}>
            <Button text={text} />
          </a>
        </div>
      </section>
    </>
  );
}
