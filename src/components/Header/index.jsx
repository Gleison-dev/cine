import logo from "../../assets/cineafro.png";
import Li from "../Li";

export default function Header() {
  return (
    <>
      <section>
        <div>
            <img src={logo} alt="logo do cineafro" />
        </div>
        <div>
            <ul>
                <Li />
            </ul>
        </div>
      </section>
    </>
  );
}
