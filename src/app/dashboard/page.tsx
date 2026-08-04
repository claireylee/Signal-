import { UserButton } from "@clerk/nextjs";

const projects = [
  {
    name: "Signal Landing Page",
    status: "Reviewed",
    score: 87,
  },
  {
    name: "Travel Planner",
    status: "Draft",
    score: null,
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <p className="text-2xl font-bold tracking-tight text-[#D4AF37]">
            SIGNAL
          </p>

          <UserButton />
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#D4AF37]">
              Workspace
            </p>

            <h1 className="mt-3 text-4xl font-bold md:text-5xl">
              Your projects
            </h1>

            <p className="mt-3 text-gray-400">
              Create a project, upload an interface, and receive a Signal review.
            </p>
          </div>

          <button
            type="button"
            className="rounded-xl bg-[#D4AF37] px-5 py-3 font-semibold text-black transition hover:bg-[#E6C55A]"
          >
            New Project
          </button>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#D4AF37]/30"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h2 className="text-xl font-semibold">{project.name}</h2>

                  <p className="mt-2 text-sm text-gray-500">
                    {project.status}
                  </p>
                </div>

                {project.score !== null && (
                  <div className="text-right">
                    <span className="text-3xl font-bold text-[#D4AF37]">
                      {project.score}
                    </span>
                    <span className="text-gray-600">/100</span>
                  </div>
                )}
              </div>

              <button
                type="button"
                className="mt-8 text-sm font-medium text-[#D4AF37] transition hover:text-[#E6C55A]"
              >
                Open project →
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}