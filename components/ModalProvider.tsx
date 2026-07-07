"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import Image from "next/image";
import ContactForm from "./ContactForm";

const ModalContext = createContext<{ open: () => void; close: () => void }>({
  open: () => {},
  close: () => {},
});

export const useContactModal = () => useContext(ModalContext);

export default function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  // Auto-open once per session, a few seconds after load
  useEffect(() => {
    if (sessionStorage.getItem("ssbw_popup_seen")) return;
    const t = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem("ssbw_popup_seen", "1");
    }, 4500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  return (
    <ModalContext.Provider value={{ open, close }}>
      {children}

      {isOpen && (
        <div
          className="modal-backdrop flex items-center justify-center p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Book a free counselling session"
        >
          <div
            className="modal-card skeu-panel relative w-full max-w-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="tricolour-bar h-1.5 w-full" aria-hidden />
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-paper-2 text-ink shadow-[var(--shadow-raised)] transition hover:text-saffron-600"
            >
              ✕
            </button>

            <div className="max-h-[86vh] overflow-y-auto p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <Image src="/logo.webp" alt="" width={44} height={44} className="h-11 w-11 object-contain" />
                <div>
                  <p className="font-display text-2xl font-extrabold uppercase leading-none tracking-wide gold-text">
                    Book Free Counselling
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-ink-soft">
                    Talk to a mentor, not a salesperson
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                Two new batches open every month and seats are limited. Share your
                details — we&apos;ll map your entry, timeline and battle plan, free of cost.
              </p>

              <div className="mt-5">
                <ContactForm compact />
              </div>
            </div>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
}
