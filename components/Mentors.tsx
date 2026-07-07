import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { MENTORS } from "@/lib/data";

export default function Mentors({ heading = true }: { heading?: boolean }) {
  return (
    <section id="mentors" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-[92rem] px-4 sm:px-8">
        {heading && (
          <SectionHeading
            center
            kicker="Your Commanding Officers"
            title={<>Trained by Those Who <span className="tricolour-text">Selected</span></>}
            subtitle="Every wing of the SSB — Psychology, GTO and Interview — is led by a mentor who has lived it from the assessor's chair."
          />
        )}

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {MENTORS.map((m, i) => (
            <Reveal key={m.name} delay={i * 110}>
              <article className="card-lift group skeu-panel h-full overflow-hidden p-0">
                <div className="relative h-52 overflow-hidden bg-navy-950">
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    sizes="(min-width:1024px) 22vw, 90vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1.5 tricolour-bar" aria-hidden />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-extrabold uppercase text-ink">{m.name}</h3>
                  <p className="font-display text-sm font-bold uppercase tracking-[0.16em] text-saffron-700">{m.role}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-ink-soft/70">{m.specialty}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{m.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-10 text-center text-sm text-ink-soft">
            …backed by a full bench of retired defence officers, DIPR-trained assessors and subject-matter experts.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
