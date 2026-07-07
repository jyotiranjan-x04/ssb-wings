"use client";

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

type Direction = "up" | "left" | "right" | "zoom";

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span";
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const dirClass =
    direction === "left"
      ? "reveal-left"
      : direction === "right"
        ? "reveal-right"
        : direction === "zoom"
          ? "reveal-zoom"
          : "";

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={`reveal ${dirClass} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
