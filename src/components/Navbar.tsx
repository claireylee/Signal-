export default function Navbar() {
  return (
    <nav className="border-b border-white/10 bg-black">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-8">
        <a
          href="/"
          className="text-3xl font-bold tracking-tight text-[#D4AF37]"
        >
          SIGNAL
        </a>

        <div className="hidden items-center gap-10 md:flex">
          <a
            href="#features"
            className="text-gray-300 transition hover:text-[#D4AF37]"
          >
            Features
          </a>

          <a
            href="#preview"
            className="text-gray-300 transition hover:text-[#D4AF37]"
          >
            Demo
          </a>

          <a
            href="#"
            className="text-gray-300 transition hover:text-[#D4AF37]"
          >
            GitHub
          </a>
        </div>

        <button className="rounded-lg bg-[#D4AF37] px-5 py-2.5 font-semibold text-black transition duration-200 hover:scale-105 hover:bg-[#E6C55A]">
          Get Started
        </button>
      </div>
    </nav>
  );
}