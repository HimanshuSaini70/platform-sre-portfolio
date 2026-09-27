import { profile } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[var(--line)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-[var(--mute)] md:flex-row md:items-center md:justify-between md:px-8">
        <p className="display text-lg italic text-[var(--bone-dim)]">
          Quiet production is the product.
        </p>
        <div className="flex items-center gap-4 font-mono text-[0.7rem] tracking-wider">
          <a href={`mailto:${profile.email}`} className="transition hover:text-[var(--gold-2)]">
            {profile.email}
          </a>
          <span className="text-[var(--line)]">·</span>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-[var(--blue-2)]"
          >
            LinkedIn
          </a>
          <span className="text-[var(--line)]">·</span>
          <span>© 2026 {profile.name}</span>
        </div>
      </div>
    </footer>
  );
}
