import { profile } from "@/lib/content";

const links = [
  { href: "#impact", label: "Impact" },
  { href: "#work", label: "Work" },
  { href: "#craft", label: "Craft" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[#0a0908]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <a href="#top" className="flex items-baseline gap-3">
          <span className="display text-xl font-semibold tracking-tight text-[var(--gold)]">
            HS
          </span>
          <span className="hidden text-[0.7rem] uppercase tracking-[0.28em] text-[var(--mute)] sm:inline">
            Platform · SRE
          </span>
        </a>
        <nav className="flex items-center gap-5 md:gap-8">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link hidden sm:inline">
              {link.label}
            </a>
          ))}
          <a
            href={profile.resume}
            download
            className="rounded-sm border border-[var(--gold)]/40 px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.2em] text-[var(--gold)] transition hover:bg-[var(--gold)] hover:text-[var(--ink)]"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
