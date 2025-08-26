import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Packages from "@/components/sections/packages";
import WhyChooseUs from "@/components/sections/why-choose-us";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="packages">
        <Packages />
      </section>
      <section id="about">
        <WhyChooseUs />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
