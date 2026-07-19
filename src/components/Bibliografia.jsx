import React from "react";
import Reveal from "./Reveal";

const referencias = [
  "Tailwind Labs. (2024). Documentación de Tailwind CSS (traducción español). https://tailwindcss.es/docs",
  "HTML. (2024). Documentación oficial de HTML. MDN Web Docs - HTML",
  "CSS. (2024). Documentación oficial de CSS. MDN Web Docs - CSS",
  "JavaScript. (2024). Documentación oficial de JavaScript. MDN Web Docs - JavaScript",
  "TypeScript. (2024). Documentación oficial de TypeScript. TypeScript Documentation",
  "React. (2024). Documentación oficial de React. React Docs",
  "Python Software Foundation. (2024). Documentación oficial de Python. Python Documentation",
  "Django Software Foundation. (2024). Documentación oficial de Django. Django Documentation",
  "Django REST Framework. (2024). Documentación oficial de Django REST Framework. DRF Documentation",
  "PostgreSQL Global Development Group. (2024). Documentación oficial de PostgreSQL. PostgreSQL Documentation",
  "Docker Inc. (2024). Documentación oficial de Docker. Docker Documentation",
  "The Kubernetes Authors. (2024). Documentación oficial de Kubernetes. Kubernetes Documentation",
  "Apache Software Foundation. (2024). Documentación oficial de Apache HTTP Server. Apache HTTP Server Documentation",
];

export default function Bibliografia() {
  return (
    <section className="py-20" id="bibliografia">
      <div className="container mx-auto px-6">
        <Reveal direction="up" className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 glass rounded-full text-cyan-300 text-xs font-semibold tracking-widest uppercase mb-3">
            Referencias
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Bibliograf<span className="text-gradient">ía</span>
          </h2>
        </Reveal>
        <div className="space-y-3 max-w-3xl mx-auto">
          {referencias.map((ref, i) => (
            <Reveal key={i} direction="left" delay={i * 80}>
              <div className="glass rounded-xl p-4 hover:border-cyan-400/40 hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-3">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 shrink-0" />
                <p className="text-gray-300 leading-relaxed text-sm italic">{ref}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
