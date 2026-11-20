import { useState } from "react";
import About from "./components/About";
import Categories from "./components/Categories";
import Contact from "./components/Contact";
import CustomFurniture from "./components/CustomFurniture";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import WhatsAppButton from "./components/WhatsAppButton";
import WhyChooseUs from "./components/WhyChooseUs";
import { scrollToId } from "./utils/scroll";

export default function App() {
  const [filter, setFilter] = useState("All");

  function browse(nextFilter) {
    if (nextFilter === "custom") {
      scrollToId("custom");
      return;
    }
    setFilter(nextFilter);
    scrollToId("products");
  }

  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <div id="collections" data-section>
          <Categories onBrowse={browse} />
          <Products filter={filter} onFilter={setFilter} />
        </div>
        <About />
        <WhyChooseUs />
        <CustomFurniture />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer onBrowse={browse} />
      <WhatsAppButton />
    </>
  );
}
