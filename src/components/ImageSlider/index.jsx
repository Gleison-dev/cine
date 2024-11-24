export default function ImageSlider({
  bg_img,
  alt,
  title,
  genre,
  year,
  synopsis,
  trailer,
  watch,
  text_trailer,
  text_watch,
}) {
  return (
    <>
      <section>
        <div>
          <img src={bg_img} alt={alt} />
        </div>
        <div>
          <div>
            <h1>{title}</h1>
          </div>
          <div>
            <p>{genre}</p>
            <p>{year}</p>
          </div>
          <div>
            <p>{synopsis}</p>
          </div>
          <div>
            <a href={trailer}>
              <button>{text_trailer}</button>
            </a>
            <a href={watch}>
              <button>{text_watch}</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
