"use client";

export function prefersReducedMotion(): boolean {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Desplaza suavemente a una sección (respeta `scroll-padding-top`). */
export function scrollToId(id: string) {
  const behavior: ScrollBehavior = prefersReducedMotion() ? "auto" : "smooth";
  const el = document.getElementById(id);
  if (!el) {
    window.scrollTo({ top: 0, behavior });
    return;
  }
  el.scrollIntoView({ behavior, block: "start" });
}

/**
 * Revela con animación los bloques `[data-reveal]` y `[data-stagger]` que
 * todavía no están en pantalla. Lo que ya es visible al cargar no se oculta.
 */
export function setupReveal(root: ParentNode = document): () => void {
  if (prefersReducedMotion() || !("IntersectionObserver" in window)) return () => {};

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        (e.target as HTMLElement).dataset.state = "shown";
        io.unobserve(e.target);
      }
    },
    // Umbral por margen (no por ratio) para que los bloques muy altos en móvil también se revelen.
    { threshold: 0, rootMargin: "0px 0px -12% 0px" },
  );

  root.querySelectorAll<HTMLElement>("[data-reveal], [data-stagger]").forEach((el) => {
    if (el.dataset.state) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;
    el.dataset.state = "pending";
    io.observe(el);
  });

  return () => io.disconnect();
}
