"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { COURSES } from "@/lib/data";
import { useContactModal } from "./ModalProvider";

export default function Courses({ heading = true }: { heading?: boolean }) {
  const { open } = useContactModal();
  return (
    <section id="courses" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-[92rem] px-4 sm:px-8">
        {heading && (
          <SectionHeading
            center
            kicker="Choose Your Battle Plan"
            title={<>Courses Built by <span className="tricolour-text">Assessors</span>, Not Teachers</>}
          />
        )}

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {COURSES.map((c, i) => (
            <Reveal key={c.title} delay={i * 130} className="h-full">
              <article className={`card-lift relative flex h-full flex-col overflow-hidden p-8 ${c.highlight ? "skeu-plate" : "skeu-panel"}`}>
                {c.highlight && <div className="tricolour-bar absolute inset-x-0 top-0 h-1.5" aria-hidden />}
                <span className={`inline-flex w-fit items-center gap-1.5 rounded-full px-4 py-1.5 font-display text-xs font-bold uppercase tracking-widest text-white shadow-[var(--shadow-raised)] ${c.highlight ? "" : ""}`}
                  style={{ background: c.highlight ? "linear-gradient(180deg,#ff9f43,#ef7a12)" : "linear-gradient(180deg,#2f3a4a,#101820)" }}>
                  ★ {c.tag}
                </span>

                <h3 className="mt-5 section-title text-3xl">{c.title}</h3>
                <p className="mt-1 font-display text-sm font-semibold uppercase tracking-[0.18em] text-saffron-700">{c.where}</p>
                <p className="mt-4 leading-relaxed text-ink-soft">{c.desc}</p>

                {c.image && (
                  <div className="photo-frame mt-5">
                    <div>
                      <Image src={c.image.src} alt={c.image.alt} width={646} height={377} sizes="(min-width: 1024px) 30vw, 90vw" className="h-auto w-full transition-transform duration-500 hover:scale-105" />
                    </div>
                  </div>
                )}

                <ul className="mt-6 flex-1 space-y-3">
                  {c.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                      <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-5 w-5 shrink-0 text-tri-green-600" aria-hidden>
                        <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <button onClick={open} className={`btn btn-shine mt-8 w-full ${c.highlight ? "btn-saffron" : "btn-ink"}`}>{c.cta}</button>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-10">
          <p className="skeu-inset px-6 py-4 text-center text-sm text-ink">
            🏠 <strong>Outstation aspirant?</strong> Our campus hostel offers AC rooms with three fresh meals a day.
            Alumni get <strong>free monthly practice sessions, for life.</strong>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
