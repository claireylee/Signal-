"use client";

type CreateProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CreateProjectModal({
  isOpen,
  onClose,
}: CreateProjectModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6">
      <div className="w-full max-w-lg rounded-3xl border border-[#D4AF37]/30 bg-[#F7E8A8] p-8 shadow-2xl">
        <h2 className="text-2xl font-bold text-black">Create Project</h2>

        <p className="mt-2 text-sm text-gray-700">
          Add a project before uploading your first screenshot.
        </p>

        <form className="mt-8 space-y-6">
          <div>
            <label
              htmlFor="projectName"
              className="text-sm font-medium text-gray-800"
            >
              Project name
            </label>

            <input
              id="projectName"
              type="text"
              placeholder="Signal landing page"
              className="mt-2 w-full rounded-xl border border-[#D4AF37]/30 bg-white/80 px-4 py-3 text-black outline-none transition placeholder:text-gray-500 focus:border-[#D4AF37]"
            />
          </div>

          <div>
            <label
              htmlFor="projectDescription"
              className="text-sm font-medium text-gray-800"
            >
              Description
            </label>

            <textarea
              id="projectDescription"
              rows={4}
              placeholder="Describe what this product does."
              className="mt-2 w-full resize-none rounded-xl border border-[#D4AF37]/30 bg-white/80 px-4 py-3 text-black outline-none transition placeholder:text-gray-500 focus:border-[#D4AF37]"
            />
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-[#D4AF37]/30 px-5 py-3 font-medium text-gray-700 transition hover:border-[#D4AF37]/50 hover:text-black"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-[#D4AF37] px-5 py-3 font-semibold text-black transition hover:bg-[#E6C55A]"
            >
              Create Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}