export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xl font-bold tracking-tight text-[#D4AF37]">
            SIGNAL
          </p>

          <p className="mt-2 text-sm text-gray-500">
            AI-powered product reviews before you ship.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-gray-400">
          <a
            href="#features"
            className="transition hover:text-[#D4AF37]"
          >
            Features
          </a>

          <a
            href="#preview"
            className="transition hover:text-[#D4AF37]"
          >
            Demo
          </a>

          <a
            href="#"
            className="transition hover:text-[#D4AF37]"
          >
            GitHub
          </a>
        </div>

        <p className="text-sm text-gray-600">
          Built by Claire Lee
        </p>
      </div>
    </footer>
  );
}