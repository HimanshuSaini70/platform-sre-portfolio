import { profile } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[var(--line)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-[var(--mute)] md:flex-row md:items-center md:justify-between md:px-8">
        <p className="display text-lg italic text-[var(--bone-dim)]">
          Quiet production is the product.
        </p>
        <p className="font-mono text-[0.7rem] tracking-wider">
          © 2026 {profile.name}
        </p>
      </div>
    </footer>
  );
}
