import React from "react";
import FirstSection from "../../components/homePage/FirstSection";
import Navbar from "../../components/homePage/navbar";
import About from "../../components/about/about";
import Works from "../../components/works/works";
import Faq from "../../components/faq/faq";
import Contact from "../../components/contact/contact";
import Footer from "../../components/footer/footer";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <FirstSection />
      <About/>
      <Works/>
      <Faq/>
      <Contact/>
      <Footer/>
    </div>
  );
}
