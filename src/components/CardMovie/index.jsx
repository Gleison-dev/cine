export default function CardMovie({ image, alt }) {
  return (
    <>
      <section>
        <div>
            <img src={image} alt={alt} />
        </div>
      </section>
    </>
  );
}
