import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import PaperFilterInfo from "../components/PaperFilterInfo";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-coffee-secondary/10">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="features">
        <Features />
      </div>
      <PaperFilterInfo />
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;