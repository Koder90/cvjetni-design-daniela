import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Usluge from "./components/Usluge/Usluge";
import Galerija from "./components/Galerija/Galerija";
import Kontakt from "./components/Kontakt/Kontakt";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Usluge />
      <Galerija />
      <Kontakt />
    </>
  );
}
