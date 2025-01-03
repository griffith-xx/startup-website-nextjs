import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Feature from "./sections/Feature";
import Partners from "./sections/Partners";
import Talents from "./sections/Talents";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <div>
      <div className="bg pt-9 pb-10">
        <Navbar />
        <Hero />
      </div>
      <Partners />
      <Feature />
      <Talents />
      <Footer />
    </div>
  );
}
