import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonial";
import Contact from "./components/Contact";
export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}