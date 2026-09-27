import type { CSSProperties } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getToolIcon } from "@/lib/tool-icons";
import {
  caseStudies,
  credentials,
  experience,
  metrics,
  ownership,
  profile,
  services,
  stack,
} from "@/lib/content";

// One accent per numbered section — keeps the editorial rhythm but reads as
// alive rather than a single monochrome gold wash.
const metricAccents = ["var(--gold)", "var(--teal)", "var(--violet)", "var(--coral)"];
const ownershipAccents = ["var(--teal)", "var(--blue)", "var(--violet)", "var(--coral)"];
const studyAccents = ["var(--violet)", "var(--blue)", "var(--coral)", "var(--teal)"];
const jobDots = ["var(--gold)", "var(--teal)"];

function glow(color: string): CSSProperties {
  return { "--glow-color": `${color}33` } as CSSProperties;
}

function ToolChip({ label }: { label: string }) {
  const tool = getToolIcon(label);
  return (
    <span className="chip" style={tool ? { borderColor: `${tool.color}55` } : undefined}>
      {tool ? (
        <tool.Icon aria-hidden style={{ color: tool.color }} className="h-3.5 w-3.5" />
      ) : (
        <span className="dot" style={{ background: "var(--mute)" }} />
      )}
      {label}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="flex-1">
        <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
          <p className="mb-6 font-mono text-[0.7rem] uppercase tracking-[0.32em] text-[var(--gold)]">
            Available for Platform · SRE · DevOps · Consulting
          </p>
          <h1 className="display max-w-4xl text-[2.7rem] font-medium leading-[1.08] tracking-tight text-[var(--bone)] sm:text-6xl md:text-7xl">
            End-to-end ownership
            <span className="grad-text italic"> of the path to production.</span>
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
              href="#services"
              className="rounded-sm border border-[var(--teal)]/40 px-6 py-3 text-[0.72rem] uppercase tracking-[0.22em] text-[var(--teal-2)] transition hover:border-[var(--teal)] hover:bg-[var(--teal)]/10"
            >
              Hire me for a project
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
            {metrics.map((m, i) => {
              const accent = metricAccents[i % metricAccents.length];
              return (
                <article key={m.label} className="panel panel-glow p-6" style={glow(accent)}>
                  <p className="display metric-num text-4xl md:text-5xl" style={{ color: accent }}>
                    {m.value}
                    <span className="ml-1 text-lg italic text-[var(--mute)]">{m.unit}</span>
                  </p>
                  <p className="mt-4 text-sm uppercase tracking-[0.16em] text-[var(--bone)]">
                    {m.label}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--mute)]">{m.detail}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="craft" className="border-y border-[var(--line)] bg-[var(--ink-2)]/60">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-24">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[var(--teal)]">
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
              {ownership.map((item, i) => {
                const accent = ownershipAccents[i % ownershipAccents.length];
                return (
                  <article key={item.step}>
                    <p className="font-mono text-[0.7rem]" style={{ color: accent }}>
                      {item.step}
                    </p>
                    <h3 className="display mt-3 text-2xl text-[var(--bone)]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--mute)]">{item.copy}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-24">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[var(--violet)]">
            03 — Selected work
          </p>
          <h2 className="display mt-3 text-4xl text-[var(--bone)] md:text-5xl">
            Case studies, not a tool dump
          </h2>
          <div className="mt-16 space-y-20">
            {caseStudies.map((study, index) => {
              const accent = studyAccents[index % studyAccents.length];
              return (
                <article key={study.id} id={study.id} className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <p
                      className="font-mono text-[0.68rem] uppercase tracking-[0.24em]"
                      style={{ color: accent }}
                    >
                      {String(index + 1).padStart(2, "0")} · {study.kicker}
                    </p>
                    <h3 className="display mt-4 text-3xl leading-tight text-[var(--bone)] md:text-4xl">
                      {study.title}
                    </h3>
                    <p className="mt-5 text-[var(--bone-dim)] leading-relaxed">{study.lede}</p>
                    <div className="mt-8 grid grid-cols-2 gap-4">
                      {study.impact.map((i) => (
                        <div key={i.note} className="border-l pl-4" style={{ borderColor: `${accent}66` }}>
                          <p className="display text-2xl" style={{ color: accent }}>
                            {i.stat}
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-[var(--mute)]">{i.note}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="panel panel-glow p-7 md:p-9" style={glow(accent)}>
                    <div className="space-y-4 text-sm leading-relaxed text-[var(--bone-dim)]">
                      {study.narrative.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>
                    <div className="mt-8 flex flex-wrap gap-2">
                      {study.stack.map((tag) => (
                        <ToolChip key={tag} label={tag} />
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="stack" className="border-y border-[var(--line)] bg-[var(--ink-2)]/50">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-24">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[var(--blue)]">
              04 — Instruments
            </p>
            <h2 className="display mt-3 text-4xl text-[var(--bone)] md:text-5xl">
              The stack behind the outcomes
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {stack.map((group) => (
                <article key={group.group} className="panel panel-glow p-6">
                  <h3 className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[var(--blue-2)]">
                    {group.group}
                  </h3>
                  <ul className="mt-4 space-y-2.5 text-sm text-[var(--bone-dim)]">
                    {group.items.map((item) => {
                      const tool = getToolIcon(item);
                      return (
                        <li
                          key={`${group.group}-${item}`}
                          className="flex items-center gap-2.5 border-b border-[var(--line)]/60 pb-2.5 last:border-0"
                        >
                          {tool ? (
                            <tool.Icon
                              aria-hidden
                              style={{ color: tool.color }}
                              className="h-4 w-4 flex-shrink-0"
                            />
                          ) : (
                            <span className="dot" style={{ background: "var(--mute)" }} />
                          )}
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-24">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[var(--coral)]">
                05 — For organizations
              </p>
              <h2 className="display mt-3 max-w-2xl text-4xl text-[var(--bone)] md:text-5xl">
                Consulting &amp; fractional platform engineering
              </h2>
            </div>
            <p className="hidden max-w-xs text-right text-sm leading-relaxed text-[var(--mute)] md:block">
              Project-based builds or an ongoing retainer — brought in where the platform needs a
              senior owner, not another meeting.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article key={s.title} className="panel panel-glow flex flex-col p-6" style={glow(s.accent)}>
                <span
                  className="dot mb-4"
                  style={{ background: s.accent, boxShadow: `0 0 14px ${s.accent}` }}
                />
                <h3 className="display text-xl text-[var(--bone)]">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--mute)]">{s.copy}</p>
                <ul className="mt-5 space-y-1.5 border-t border-[var(--line)] pt-4">
                  {s.deliverables.map((d) => (
                    <li
                      key={d}
                      className="text-xs leading-relaxed text-[var(--bone-dim)] before:mr-2 before:text-[var(--mute)] before:content-['—']"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-[var(--line)] pt-8">
            <p className="text-sm text-[var(--bone-dim)]">
              Have a platform problem that needs an owner, not another vendor call?
            </p>
            <a
              href="#contact"
              className="rounded-sm bg-[var(--coral)] px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.2em] text-[var(--ink)] transition hover:bg-[var(--coral-2)]"
            >
              Let&apos;s talk
            </a>
          </div>
        </section>

        <section className="border-t border-[var(--line)] bg-[var(--ink-2)]/40">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-24">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[var(--amber)]">
                  06 — Path
                </p>
                <h2 className="display mt-3 text-4xl text-[var(--bone)]">Experience</h2>
                <ol className="mt-10 space-y-8">
                  {experience.map((job, i) => {
                    const dot = jobDots[i % jobDots.length];
                    return (
                      <li key={job.company} className="grid grid-cols-[auto_1fr] gap-5">
                        <span className="mt-2 h-2 w-2 rounded-full" style={{ background: dot }} />
                        <div>
                          <p className="display text-2xl text-[var(--bone)]">{job.company}</p>
                          <p className="mt-1 text-sm" style={{ color: dot }}>
                            {job.role}
                          </p>
                          <p className="mt-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[var(--mute)]">
                            {job.dates} · {job.place}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
              <div>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[var(--violet)]">
                  07 — Proof
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
          </div>
        </section>

        <section id="contact" className="border-t border-[var(--line)]">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[var(--gold)]">
              08 — Contact
            </p>
            <h2 className="display mt-4 max-w-3xl text-4xl leading-tight text-[var(--bone)] md:text-6xl">
              If the platform is still a{" "}
              <span className="grad-text italic">collection of heroes</span>, let&apos;s make it a
              system.
            </h2>
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-sm">
              <a className="text-[var(--gold)] hover:text-[var(--gold-2)]" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <a className="text-[var(--bone-dim)] hover:text-[var(--teal-2)]" href={`tel:+917000533408`}>
                {profile.phone}
              </a>
              <a
                className="text-[var(--bone-dim)] hover:text-[var(--blue-2)]"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="text-[var(--bone-dim)] hover:text-[var(--violet-2)]"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="text-[var(--bone-dim)] hover:text-[var(--coral-2)]"
                href={profile.resume}
                download
              >
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
