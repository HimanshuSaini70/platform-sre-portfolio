import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  caseStudies,
  credentials,
  experience,
  metrics,
  ownership,
  profile,
  stack,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="flex-1">
        <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
          <p className="mb-6 font-mono text-[0.7rem] uppercase tracking-[0.32em] text-[var(--gold)]">
            Available for Platform · SRE · DevOps
          </p>
          <h1 className="display max-w-4xl text-[2.7rem] font-medium leading-[1.08] tracking-tight text-[var(--bone)] sm:text-6xl md:text-7xl">
            End-to-end ownership
            <span className="italic text-[var(--gold)]"> of the path to production.</span>
          </h1>
          <div className="gold-rule mt-8" />
          <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_0.8fr] md:items-end">
            <p className="max-w-xl text-lg font-light leading-relaxed text-[var(--bone-dim)] md:text-xl">
              {profile.name}. {profile.role}. {profile.summary}
            </p>
            <div className="flex flex-col gap-2 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-[var(--mute)] md:text-right">
              <span>3+ years · AWS · GCP · Kubernetes</span>
              <span>Axis Bank · WizCommerce</span>
              <span>SOC2 · GitOps · 99.9% uptime</span>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-sm bg-[var(--gold)] px-6 py-3 text-[0.72rem] uppercase tracking-[0.22em] text-[var(--ink)] transition hover:bg-[var(--gold-2)]"
            >
              Start a conversation
            </a>
            <a
              href="#work"
              className="rounded-sm border border-[var(--line)] px-6 py-3 text-[0.72rem] uppercase tracking-[0.22em] text-[var(--bone-dim)] transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
            >
              See the work
            </a>
          </div>
        </section>

        <div className="hairline" />

        <section id="impact" className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-24">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[var(--gold)]">
                01 — Impact
              </p>
              <h2 className="display mt-3 text-4xl text-[var(--bone)] md:text-5xl">
                Numbers that survived production
              </h2>
            </div>
            <p className="hidden max-w-xs text-right text-sm leading-relaxed text-[var(--mute)] md:block">
              Not lab scores. Bank-grade and SaaS-grade systems, owned through the incident.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m) => (
              <article key={m.label} className="panel p-6">
                <p className="display metric-num text-4xl text-[var(--gold)] md:text-5xl">
                  {m.value}
                  <span className="ml-1 text-lg italic text-[var(--mute)]">{m.unit}</span>
                </p>
                <p className="mt-4 text-sm uppercase tracking-[0.16em] text-[var(--bone)]">
                  {m.label}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--mute)]">{m.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="craft" className="border-y border-[var(--line)] bg-[var(--ink-2)]/60">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-24">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[var(--gold)]">
              02 — Operating model
            </p>
            <h2 className="display mt-3 max-w-2xl text-4xl text-[var(--bone)] md:text-5xl">
              I do not throw work over a wall.
            </h2>
            <p className="mt-5 max-w-2xl text-[var(--bone-dim)]">
              Platform engineering as a single thread: design, automate, secure, observe. The same
              person who writes the Helm chart answers the page.
            </p>
            <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {ownership.map((item) => (
                <article key={item.step}>
                  <p className="font-mono text-[0.7rem] text-[var(--gold)]">{item.step}</p>
                  <h3 className="display mt-3 text-2xl text-[var(--bone)]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--mute)]">{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-24">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[var(--gold)]">
            03 — Selected work
          </p>
          <h2 className="display mt-3 text-4xl text-[var(--bone)] md:text-5xl">
            Case studies, not a tool dump
          </h2>
          <div className="mt-16 space-y-20">
            {caseStudies.map((study, index) => (
              <article key={study.id} id={study.id} className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-[var(--gold)]">
                    {String(index + 1).padStart(2, "0")} · {study.kicker}
                  </p>
                  <h3 className="display mt-4 text-3xl leading-tight text-[var(--bone)] md:text-4xl">
                    {study.title}
                  </h3>
                  <p className="mt-5 text-[var(--bone-dim)] leading-relaxed">{study.lede}</p>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    {study.impact.map((i) => (
                      <div key={i.note} className="border-l border-[var(--gold)]/40 pl-4">
                        <p className="display text-2xl text-[var(--gold)]">{i.stat}</p>
                        <p className="mt-1 text-xs leading-relaxed text-[var(--mute)]">{i.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="panel p-7 md:p-9">
                  <div className="space-y-4 text-sm leading-relaxed text-[var(--bone-dim)]">
                    {study.narrative.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {study.stack.map((tag) => (
                      <span
                        key={tag}
                        className="border border-[var(--line)] px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[var(--mute)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="stack" className="border-y border-[var(--line)] bg-[var(--ink-2)]/50">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-24">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[var(--gold)]">
              04 — Instruments
            </p>
            <h2 className="display mt-3 text-4xl text-[var(--bone)] md:text-5xl">
              The stack behind the outcomes
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {stack.map((group) => (
                <article key={group.group} className="panel p-6">
                  <h3 className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[var(--gold)]">
                    {group.group}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-[var(--bone-dim)]">
                    {group.items.map((item) => (
                      <li
                        key={`${group.group}-${item}`}
                        className="border-b border-[var(--line)]/60 pb-2 last:border-0"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-24">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[var(--gold)]">
                05 — Path
              </p>
              <h2 className="display mt-3 text-4xl text-[var(--bone)]">Experience</h2>
              <ol className="mt-10 space-y-8">
                {experience.map((job) => (
                  <li key={job.company} className="grid grid-cols-[auto_1fr] gap-5">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--gold)]" />
                    <div>
                      <p className="display text-2xl text-[var(--bone)]">{job.company}</p>
                      <p className="mt-1 text-sm text-[var(--gold)]">{job.role}</p>
                      <p className="mt-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[var(--mute)]">
                        {job.dates} · {job.place}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[var(--gold)]">
                06 — Proof
              </p>
              <h2 className="display mt-3 text-4xl text-[var(--bone)]">Credentials</h2>
              <ul className="mt-10 space-y-5">
                {credentials.map((c) => (
                  <li
                    key={c}
                    className="border-t border-[var(--line)] pt-5 text-[var(--bone-dim)] first:border-0 first:pt-0"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-[var(--line)]">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[var(--gold)]">
              07 — Contact
            </p>
            <h2 className="display mt-4 max-w-3xl text-4xl leading-tight text-[var(--bone)] md:text-6xl">
              If the platform is still a collection of heroes, let’s make it a system.
            </h2>
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-sm">
              <a className="text-[var(--gold)] hover:text-[var(--gold-2)]" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <a className="text-[var(--bone-dim)] hover:text-[var(--gold)]" href={`tel:+917000533408`}>
                {profile.phone}
              </a>
              <a
                className="text-[var(--bone-dim)] hover:text-[var(--gold)]"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="text-[var(--bone-dim)] hover:text-[var(--gold)]"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a className="text-[var(--bone-dim)] hover:text-[var(--gold)]" href={profile.resume} download>
                Download résumé
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
