"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Counter from "./Counter";
import { useContactModal } from "./ModalProvider";

const ROLES = ["an Officer", "a Leader", "a Warrior", "Recommended"];

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i % words.length];
    const delay = del ? 45 : text === w ? 1700 : 95;
    const t = setTimeout(() => {
      if (!del && text === w) setDel(true);
      else if (del && text === "") { setDel(false); setI((n) => (n + 1) % words.length); }
      else setText(w.slice(0, text.length + (del ? -1 : 1)));
    }, delay);
    return () => clearTimeout(t);
  }, [text, del, i, words]);
  return text;
}

export default function Hero() {
  const typed = useTypewriter(ROLES);
  const { open } = useContactModal();

  return (
    <section className="relative overflow-hidden">
      {/* Tricolour wash + soft radial light — no dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg,#fff8ec 0%, #faf6ec 55%, #f3ecd9 100%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-x-0 top-0 h-72 opacity-70"
        style={{ background: "linear-gradient(180deg, rgba(255,153,51,0.16), transparent)" }}
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 h-72 opacity-60"
        style={{ background: "linear-gradient(0deg, rgba(19,136,8,0.12), transparent)" }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-[1840px] items-center gap-12 px-4 pb-16 pt-14 sm:px-8 lg:grid-cols-[1fr_1.15fr] lg:pt-20">
        {/* Left — copy (below the images on mobile) */}
        <div className="order-2 lg:order-1">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[rgba(43,36,22,0.14)] bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-ink-soft shadow-[var(--shadow-raised)]">
            <span className="chakra text-[14px]" aria-hidden /> Noida Sector 62 · Mentored by Ex-SSB Officers
          </div>

          <h1 className="section-title text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
            The Uniform Doesn&apos;t
            <br /> Choose Everyone.
            <br />
            <span className="tricolour-text">Become {typed}</span>
            <span className="animate-pulse text-saffron-600">|</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            Five days at the Services Selection Board decide who wears the stars.
            At <strong className="text-ink">SSB WINGS</strong>, ex-SSB assessors rebuild you for
            every one of them — Screening, Psychology, GTO, Interview and Conference —
            until the Board sees what we see: <em>an officer</em>.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button onClick={open} className="btn btn-saffron btn-shine text-base">
              Book Free Counselling
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <Link href="/ssb-process" className="btn btn-outline btn-shine">Decode the 5-Day SSB</Link>
          </div>

          <div className="mt-7 flex items-center gap-2 text-sm text-ink-soft">
            <span className="flex text-gold-500" aria-hidden>★★★★★</span>
            Rated 5.0 on Google by aspirants across India
          </div>
        </div>

        {/* Right — photo collage: pipping ceremony + marching contingent (first on mobile) */}
        <div className="relative order-1 mx-auto w-full max-w-lg pb-10 sm:max-w-none sm:pb-16 lg:order-2 lg:pb-8">
          {/* Main — commissioning "pipping" ceremony */}
          <div className="photo-frame card-lift relative z-10 w-full sm:ml-auto sm:w-[92%] sm:-rotate-2">
            <div>
              <Image
                src="/images/pipping-ceremony.jpg"
                alt="A newly commissioned officer receives his rank stars at the pipping ceremony"
                width={1000}
                height={667}
                priority
                sizes="(min-width: 1024px) 46vw, 92vw"
                className="kenburns h-auto w-full"
              />
            </div>
          </div>
          {/* Secondary — marching contingent, overlapping */}
          <div className="photo-frame card-lift absolute -bottom-6 left-0 z-20 w-[58%] rotate-3 sm:-bottom-10 sm:w-[52%]">
            <div>
              <Image
                src="/images/hero-parade.jpg"
                alt="Indian Army contingent marching on the Kartavya Path during the Republic Day parade"
                width={640}
                height={400}
                sizes="(min-width: 1024px) 26vw, 55vw"
                className="h-auto w-full"
              />
            </div>
          </div>
          {/* Floating tricolour medal */}
          <div className="absolute -right-1 -top-5 z-30 hidden animate-float lg:block">
            <div className="skeu-plate flex h-24 w-24 flex-col items-center justify-center text-center">
              <span className="font-display text-2xl font-black leading-none gold-text">AIR 1</span>
              <span className="text-[9px] font-bold uppercase tracking-wider text-ink-soft">10× Toppers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stat plates */}
      <div className="relative mx-auto -mb-10 grid max-w-[1840px] grid-cols-2 gap-4 px-4 pb-4 sm:px-8 md:grid-cols-4">
        {[
          { value: 677, label: "Recommendations" },
          { value: 3450, label: "Alumni Family" },
          { value: 175, label: "NDA Entries" },
          { value: 10, label: "All India Rank 1" },
        ].map((s) => (
          <div key={s.label} className="skeu-plate card-lift px-5 py-5 text-center">
            <p className="font-display text-4xl font-black leading-none gold-text sm:text-5xl">
              <Counter target={s.value} />
            </p>
            <p className="mt-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-ink-soft">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
