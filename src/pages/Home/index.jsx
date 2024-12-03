import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ListGenre from "../../components/ListGenre";
import Main from "../../components/Main";

export default function Home() {
  return (
    <>
      <section>
        <Header />
      </section>
      <section>
        <Main />
      </section>
      <section>
        <ListGenre />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}
