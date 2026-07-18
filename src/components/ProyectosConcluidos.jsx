import React from "react";
import canvas from "../imagenes/proyectos/canvas.png";
import hooks from "../imagenes/proyectos/hooks.png";
import proyecto01 from "../imagenes/proyectos/proyecto01.png";

const proyectos = [
  {
    titulo: "Sitio Web - Chupaca Tours",
    descripcion:
      "Desarrollo de un sitio web informativo para la promoción turística de la Municipalidad Provincial de Chupaca, destacando atractivos naturales, culturales y servicios locales.",
    imagen: proyecto01,
    enlace: "https://turismochupaca.com/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    titulo: "Canvas en JavaScript",
    descripcion:
      "El Canvas es un elemento de HTML5 que, junto con JavaScript, permite dibujar gráficos directamente en el navegador. Se utiliza para crear gráficos 2D, animaciones, videojuegos y aplicaciones interactivas.",
    imagen: canvas,
    enlace: "https://developer.mozilla.org/es/docs/Web/API/Canvas_API",
    tags: ["HTML5", "Canvas", "JavaScript"],
  },
  {
    titulo: "Desarrollo con React Hooks",
    descripcion:
      "Los Hooks son funciones especiales de React que permiten utilizar el estado, el ciclo de vida, el contexto y otras funcionalidades dentro de componentes funcionales, sin necesidad de crear componentes de clase.",
    imagen: hooks,
    enlace: "https://react.dev/reference/react",
    tags: ["React", "Hooks", "JavaScript"],
  },
];

export default function ProyectosConcluidos() {
  return (
    <section className="py-20" id="proyectos">
      <div className="container mx-auto px-6">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 glass rounded-full text-cyan-300 text-xs font-semibold tracking-widest uppercase mb-3">
            Portafolio
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Proyectos <span className="text-gradient">Concluidos</span>
          </h2>
        </div>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((p, i) => (
            <article
              key={i}
              className="glass glow-border group rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-all duration-300"
            >
              {/* Imagen */}
              <div className="w-full h-52 overflow-hidden">
                <img
                  src={p.imagen}
                  alt={p.titulo}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Contenido */}
              <div className="p-6 flex flex-col h-[280px]">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {p.titulo}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                  {p.descripcion}
                </p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 my-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-400/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Botón */}
                <a
                  href={p.enlace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center mt-auto px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-colors"
                >
                  Ver proyecto →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}