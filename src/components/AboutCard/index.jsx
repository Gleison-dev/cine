import "./style.css";

export default function AboutCard({ title, text }) {
  return (
    <>
      <section className="section-main space-y-10 bg-light_orange p-6 rounded-md">
        <div>
          <h1 className="text-3xl text-black_card">
            <strong>{title}</strong>
          </h1>
        </div>
        <p className="text-xl">{text}</p>
      </section>
    </>
  );
}
