import React from "react";
import Reveal from "./Reveal";

export default function ReflexionFinal() {
  return (
    <section className="py-20" id="reflexion_final">
      <div className="container mx-auto px-6">
        <Reveal direction="up" className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 glass rounded-full text-purple-300 text-xs font-semibold tracking-widest uppercase mb-3">
            Cierre
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Reflexión <span className="text-gradient">Final</span>
          </h2>
        </Reveal>

        <Reveal direction="scale" delay={100} className="max-w-3xl mx-auto glass glow-border rounded-2xl p-8 relative">
          <span className="absolute top-4 left-6 text-6xl text-cyan-400/20 font-serif select-none">“</span>
          <p className="text-gray-300 leading-relaxed relative z-10">
            El desarrollo de la página web Front-End utilizando JavaScript y TypeScript permitió
            fortalecer conocimientos fundamentales en programación web moderna, comprendiendo cómo
            crear interfaces dinámicas e interactivas que mejoran la experiencia del usuario. A través
            de la implementación de eventos, manipulación del DOM, validación de datos y uso de
            tipado estático, se adquirieron habilidades para construir aplicaciones más organizadas,
            seguras y fáciles de mantener.
            <br /><br />
            El desarrollo de aplicaciones web Backend utilizando Python y el framework Django permitió
            consolidar conocimientos fundamentales sobre la arquitectura de aplicaciones web, la
            programación orientada a objetos y la construcción de sistemas dinámicos y escalables.
            A lo largo del consolidado se aplicaron conceptos como el manejo de formularios,
            autenticación, administración de datos con Django Admin, diseño de modelos, desarrollo de
            APIs RESTful y arquitectura basada en microservicios, fortaleciendo la capacidad para crear
            soluciones web modernas y seguras.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
