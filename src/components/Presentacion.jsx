import React from "react";
import fotoPerfil from "../imagenes/perfil/fotoPerfil.jpeg";

export default function Presentacion() {
  return (
    <div className="flex-1 max-w-xl w-full space-y-6 animate-fade-in" style={{ animationDelay: '0.15s' }}>
      <div className="flex justify-center lg:justify-start">
        <div className="relative w-40 h-40 sm:w-48 sm:h-48">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-fuchsia-500 blur-lg opacity-60 animate-pulse" />
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/40 animate-spin-slow" />
          <img
            src={fotoPerfil}
            alt="Foto de perfil de Rolando Rojas"
            className="relative w-full h-full rounded-full border-4 border-slate-950 shadow-2xl object-cover"
          />
        </div>
      </div>

      <div className="glass rounded-2xl p-5 space-y-3">
        <p className="text-base text-gray-300 leading-relaxed">
          Bienvenido a mi Portafolio Profesional. Soy{" "}
          <span className="font-semibold text-cyan-300">Rolando Raul Rojas Quispe</span>,
          estudiante de Ingeniería de Sistemas (IX semestre). Interesado en desarrollo de
          aplicaciones web, diseño de interfaces y optimización de procesos.
        </p>
        <p className="text-sm text-gray-400 leading-relaxed">
          Docentes del curso:{" "}
          <span className="font-semibold text-cyan-300">Jaime Suasnabar Terrel</span> y{" "}
          <span className="font-semibold text-cyan-300">Miguel Elias Aguilar Coronacion</span>.
        </p>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 stagger">
        <li className="glass rounded-xl p-3 text-center">
          <p className="text-cyan-300 font-bold text-sm">Estudios</p>
          <p className="text-gray-400 text-xs mt-1">Ing. de Sistemas — IX Sem.</p>
        </li>
        <li className="glass rounded-xl p-3 text-center">
          <p className="text-cyan-300 font-bold text-sm">Stack</p>
          <p className="text-gray-400 text-xs mt-1">React · Tailwind · UX</p>
        </li>
        <li className="glass rounded-xl p-3 text-center">
          <p className="text-cyan-300 font-bold text-sm">Contacto</p>
          <p className="text-gray-400 text-xs mt-1 break-all">rojasquisperolandoraul@gmail.com</p>
        </li>
      </ul>
    </div>
  );
}
