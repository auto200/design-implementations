import Header from "components/sections/Header";
import Hero from "components/sections/Hero";
import AboutUs from "components/sections/AboutUs";
import Client from "components/sections/Client";
import Services from "components/sections/Services";
import Process from "components/sections/Process";
import ProductPortfolio from "components/sections/ProductPortfolio";
import Testimonials from "components/sections/Testimonials";
import Footer from "components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Client />
      <Services />
      <Process />
      <ProductPortfolio />
      <Testimonials />
      <Footer />
    </>
  );
}
