
import React from "react";

const referencias = [
  "Tailwind Labs. (2024). Documentación de Tailwind CSS (traducción español). https://tailwindcss.es/docs",
" HTML. (2024). Documentación oficial de HTML. MDN Web Docs - HTML",
" CSS. (2024). Documentación oficial de CSS. MDN Web Docs - CSS",
" JavaScript. (2024). Documentación oficial de JavaScript. MDN Web Docs - JavaScript",
" TypeScript. (2024). Documentación oficial de TypeScript. TypeScript Documentation",
" React. (2024). Documentación oficial de React. React Docs",

];

export default function Bibliografia() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white animate-fade-in" id="bibliografia">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-cyan-400">Bibliografía</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {referencias.map((ref, i) => (
            <div key={i} className="bg-slate-800/60 border border-cyan-500/30 rounded-xl p-4 shadow-md hover:shadow-cyan-500/20 transition-all">
              <p className="text-gray-300 leading-relaxed italic">• {ref}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
