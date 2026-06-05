import React from "react";
import { useScroll, useTransform } from "motion/react";
import "../styles/fonts.css";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Approach } from "./components/Approach";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen bg-[#FAF8F5] relative overflow-hidden"
      style={{ fontFamily: "var(--font-body)" }}
    >
      <Navigation />
      <Hero
        opacity={opacity}
        scale={scale}
        onContactClick={() => scrollToSection("contato")}
      />
      <Services />
      <Approach />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
