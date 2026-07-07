"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    const d = dot.current!;
    const r = ring.current!;
    let rx = window.innerWidth / 2;
    let ry = window.innerHeight / 2;
    let tx = rx;
    let ty = ry;
    let raf = 0;

    const move = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      d.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`;
    };
    const loop = () => {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      r.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role='button'], input, select, textarea, label"))
        r.classList.add("is-hovering");
      else r.classList.remove("is-hovering");
    };
    const down = () => r.classList.add("is-down");
    const up = () => r.classList.remove("is-down");

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot" aria-hidden />
      <div ref={ring} className="cursor-ring" aria-hidden />
    </>
  );
}
