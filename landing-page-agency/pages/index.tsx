import Header from "components/Header";
import Hero from "components/Hero";
import AboutUs from "components/AboutUs";
import Client from "components/Client";
import Services from "components/Services";
import Process from "components/Process";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Client />
      <Services />
      <Process />
    </>
  );
}
