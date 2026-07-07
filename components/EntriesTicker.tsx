import { ENTRIES } from "@/lib/data";

export default function EntriesTicker() {
  const row = [...ENTRIES, ...ENTRIES];
  return (
    <section aria-label="Entries we prepare you for" className="marquee relative overflow-hidden border-y-2 border-[rgba(43,36,22,0.15)]">
      <div className="tricolour-bar absolute inset-0 opacity-[0.14]" aria-hidden />
      <div className="relative bg-[linear-gradient(180deg,#fffdf7cc,#f3ecd9cc)] py-3.5">
        <div className="marquee-track">
          {row.map((entry, i) => (
            <span key={i} className="flex shrink-0 items-center gap-3 px-5 font-display text-lg font-bold uppercase tracking-widest text-ink">
              {entry}
              <span aria-hidden className="text-saffron-500">★</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
