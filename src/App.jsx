import Nav from "./Mainpage/Nav";
import Hero from "./Mainpage/Hero";
import "./App.css";
import Footer from "./Mainpage/Footer";
export default function App() {
  return (
    <section className="h-full">
      <section>
        <Nav />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <Footer />
      </section>
    </section>
  );
}
