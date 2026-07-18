import React, { useEffect, useRef, useState } from "react";

/**
 * Reveal
 * Envuelve cualquier contenido y lo anima (fade + desplazamiento) cuando
 * entra en el viewport al hacer scroll, usando IntersectionObserver.
 *
 * Props:
 * - direction: "up" | "down" | "left" | "right" | "scale" | "none"
 * - delay: retraso en ms antes de iniciar la animación
 * - duration: duración en ms de la animación
 * - once: si es true (por defecto) la animación ocurre una sola vez
 * - threshold: porcentaje visible del elemento para disparar la animación
 * - as: tag HTML a renderizar (por defecto "div")
 */
const OFFSET = {
  up: "translate-y-10",
  down: "-translate-y-10",
  left: "translate-x-10",
  right: "-translate-x-10",
  scale: "scale-90",
  none: "",
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 700,
  once = true,
  threshold = 0.15,
  as: Tag = "div",
  className = "",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respeta la preferencia del usuario de reducir movimiento
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) obs.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [once, threshold]);

  return (
    <Tag
      ref={ref}
      className={`transition-all ease-out will-change-transform ${className} ${
        visible
          ? "opacity-100 translate-x-0 translate-y-0 scale-100"
          : `opacity-0 ${OFFSET[direction]}`
      }`}
      style={{ transitionDuration: `${duration}ms`, transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
