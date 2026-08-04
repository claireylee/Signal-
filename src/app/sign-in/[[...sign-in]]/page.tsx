import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18),transparent_65%)]" />

      <div className="relative">
        <SignIn
          appearance={{
            elements: {
              card: "bg-[#080808] border border-white/10 shadow-2xl",
              headerTitle: "text-white",
              headerSubtitle: "text-gray-400",
              socialButtonsBlockButton:
                "border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.06]",
              formFieldLabel: "text-gray-300",
              formFieldInput:
                "bg-black border-white/10 text-white focus:border-[#D4AF37]",
              formButtonPrimary:
                "bg-[#D4AF37] text-black hover:bg-[#E6C55A]",
              footerActionLink: "text-[#D4AF37]",
            },
          }}
        />
      </div>
    </main>
  );
}