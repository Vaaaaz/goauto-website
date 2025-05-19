"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Services />
      <HowItWorks />
      <Hero />
      <Footer />
    </>
  );
}
