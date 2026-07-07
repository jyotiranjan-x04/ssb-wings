"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { SITE } from "@/lib/data";
import { useContactModal } from "./ModalProvider";

export default function CtaBanner() {
  const { open } = useContactModal();
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="tricolour-bar absolute inset-x-0 top-0 z-10 h-2" aria-hidden />
      <div className="absolute inset-0" aria-hidden>
        <Image src="/images/ota-sunrise.jpg" alt="" fill sizes="100vw" className="kenburns object-cover object-[center_58%]" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(255,248,236,0.86), rgba(243,236,217,0.92))" }} />
      </div>

      <Reveal className="relative mx-auto max-w-4xl px-4 text-center sm:px-8">
        <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-saffron-700">
          ⏳ New batches open every month · Seats are limited
        </p>
        <h2 className="section-title mt-4 text-4xl leading-tight sm:text-6xl">
          Your Chest Number
          <br />
          <span className="tricolour-text">Is Waiting to Be Called</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-ink-soft">
          Every day you delay is a day your competition trains. Book a free counselling call —
          a mentor will map your entry, your timeline and your battle plan.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button onClick={open} className="btn btn-saffron btn-shine text-base">Book Free Counselling</button>
          <a href={SITE.phone1Href} className="btn btn-outline btn-shine">📞 Call {SITE.phone1}</a>
        </div>
      </Reveal>
      <div className="tricolour-bar absolute inset-x-0 bottom-0 z-10 h-2" aria-hidden />
    </section>
  );
}
