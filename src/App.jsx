import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Schedule from "./components/Schedule";
import Doctor from "./components/Doctor";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ToothPattern from "./components/ToothPattern";
import ChatWidget from "./components/ChatWidget";
import Svg from "./Svg";

function App() {
  return (
    <div className="min-h-screen  relative">
      <Svg
        backgroundColor="black"
        maskUrl="/images/tooth.svg"
        maskSize="200px"
        opacity={0.1}
        customClasses="absolute inset-0 w-full h-full"
      />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <Services />
        <Gallery />
        <Contact />
        <Schedule />
        <Doctor />
        <About />
        <ContactForm />
        <br />
        <br />
        <br />
      </main>
      <Footer />
      <ChatWidget/>
    </div>
  );
}

export default App;
