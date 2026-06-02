
import React from "react";
import fotoPerfil from "../imagenes/perfil/fotoPerfil.jpeg";

export default function Presentacion() {
  return (
    <div className="flex-1 max-w-xl space-y-4 animate-fade-in">
      <p className="text-lg text-gray-300 leading-relaxed">
        Bienvenido a mi Portafolio Profesional. Soy 
        <span className="font-semibold text-cyan-300">Rolando Raul Rojas Quispe</span>,
        estudiante de Ingeniería de Sistemas (IX semestre). Interesado en desarrollo de aplicaciones web, diseño de interfaces y optimización de procesos.
      </p>
          <p className="text-lg text-gray-300 leading-relaxed">
          Docentes del curso:{" "}
           <span className="font-semibold text-cyan-300">JAIME SUASNABAR TERREL</span> y{" "}
           <span className="font-semibold text-cyan-300">MIGUEL ELIAS AGUILAR CORONACION</span>.
          </p>

      <div className="flex items-center gap-6 pt-2">
         <img
          src={fotoPerfil}
          alt="Foto de perfil"
          className="w-28 h-28 rounded-full border-4 border-cyan-400 shadow-lg object-cover"
          />
        
      <ul className="text-gray-300 text-sm space-y-1 pt-2">
        <li><span className="text-cyan-300 font-semibold">Estudios:</span> Ingeniería de Sistemas — IX Semestre</li>
        <li><span className="text-cyan-300 font-semibold">Experiencia:</span> Proyectos académicos en React, Tailwind y UX</li>
        <li><span className="text-cyan-300 font-semibold">Contacto:</span> rojasquisperolandoraul@gmail.com</li>
      </ul>
      </div>
    </div>
  );
}
