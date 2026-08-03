import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center max-w-3xl px-6">
        <h1 className="text-6xl font-bold tracking-tight">
          Signal
        </h1>

        <h2 className="text-5xl font-bold mt-8 leading-tight">
          AI Product Reviews
          <br />
          Before You Ship
        </h2>

        <p className="mt-8 text-xl text-gray-600">
          Improve your product's UX, security, and accessibility
          with AI-powered feedback.
        </p>

        <button className="mt-10 rounded-xl bg-black px-8 py-4 text-white hover:scale-105 transition">
          Get Started
        </button>
      </div>
    </main>
  );
}