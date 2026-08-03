import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductPreview from "../components/ProductPreview";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <ProductPreview />
    </main>
  );
}