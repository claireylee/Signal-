import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductPreview from "../components/ProductPreview";
import Features from "../components/Features";
import WhatSignalFinds from "../components/WhatSignalFinds";
import Footer from "../components/Footer";
import FinalCTA from "../components/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <ProductPreview />
      <Features />
      <WhatSignalFinds />
      <FinalCTA />
      <Footer />
    </main>
  );
}