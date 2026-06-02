import React, { useEffect, useMemo, useState } from 'react'
import Presentacion from './components/Presentacion'
import ProyectosConcluidos from './components/ProyectosConcluidos'
import ReflexionFinal from './components/ReflexionFinal'
import Bibliografia from './components/Bibliografia'
import { weeksData } from './data/weeks'

const NAV_ITEMS = [
  { id: 'portada', label: 'Portada' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'semanas', label: 'Cuaderno' },
  { id: 'reflexion_final', label: 'Reflexión Final' },
  { id: 'bibliografia', label: 'Bibliografía' },
]

export default function App() {
  const [selectedWeek, setSelectedWeek] = useState("1")
  const [active, setActive] = useState('portada')
  const wkeys = useMemo(() => Object.keys(weeksData), [])
  const w = weeksData[selectedWeek]

  useEffect(() => {
    const sections = NAV_ITEMS.map(n => document.getElementById(n.id)).filter(Boolean)
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActive(entry.target.id)
        }
      })
    }, { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] })
    sections.forEach(sec => obs.observe(sec))
    return () => obs.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* NAV SUPERIOR FIJA */}
      <nav className="fixed top-0 left-0 w-full bg-slate-950/70 backdrop-blur-md border-b border-cyan-500/30 z-50">
        <div className="container mx-auto px-6 py-3 flex items-center justify-center gap-6 text-sm font-semibold">
          {NAV_ITEMS.map(item => (
            <a key={item.id} href={`#${item.id}`}
               className={`px-2 py-1 transition-colors ${active === item.id ? 'text-cyan-300' : 'text-gray-300 hover:text-cyan-300'}`}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* PORTADA */}
      <header id="portada" className="relative overflow-hidden mt-20">
        <div className="container mx-auto px-6 py-16 relative animate-fade-in">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-400/50 rounded-full text-cyan-300 text-sm font-semibold animate-fade-in">
                Portafolio Académico 2026-I
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold animate-fade-in">
                Soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Rolando</span> Rojas
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed animate-fade-in">
                Portafolio profesional con proyectos, semanas, reflexiones y bibliografía. Todo el contenido es fijo y se edita solo desde el código fuente.
              </p>
            </div>
            <Presentacion />
          </div>
        </div>
      </header>

      {/* PROYECTOS */}
      <ProyectosConcluidos />

      {/* CUADERNO (SEMANAS) - barra NO fija */}
      <section id="semanas" className="container mx-auto px-6 py-10">
        <div className="mb-6">
          <span className="font-bold text-cyan-400 whitespace-nowrap mr-2">SEMANAS:</span>
          <div className="mt-3 flex items-center gap-2 overflow-x-auto">
            {wkeys.map(week => (
              <button key={week} onClick={() => setSelectedWeek(String(week))} className={
                `px-4 py-2 rounded-lg font-semibold whitespace-nowrap ${
                  String(selectedWeek)===String(week)
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                    : 'bg-slate-800 text-gray-400 hover:bg-slate-700 hover:text-white'
                }`
              }>{String(week).padStart(2,'0')}</button>
            ))}
          </div>
        </div>

        {/* Contenido de la semana seleccionada */}
        {w && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-6 rounded-xl border border-cyan-500/30 shadow-xl flex items-center justify-between">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">{w.title}</h2>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/30">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Resumen</h3>
              <p className="text-gray-300 leading-relaxed">{w.summary}</p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-cyan-500/30">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Retroalimentación</h3>
              <p className="text-gray-300 leading-relaxed">{w.feedback}</p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-cyan-500/30">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">GitHub</h3>
              {w.github && <a href={w.github} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 px-4 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-semibold hover:scale-105 transition-transform">Ver Repositorio</a>}
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/30">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Galería</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[0,1].map(idx => (
                  <div key={idx} className="space-y-3">
                    <div className="aspect-video bg-slate-700/50 rounded-lg border-2 border-dashed border-gray-600 flex items-center justify-center overflow-hidden">
                      {w.images && w.images[idx] && w.images[idx].url
                        ? <img src={w.images[idx].url} alt={`Imagen ${idx+1}`} className="w-full h-full object-cover"/>
                        : <p className="text-gray-400">Imagen {idx+1}</p>
                      }
                    </div>
                    {w.images && w.images[idx] && w.images[idx].desc && (
                      <p className="text-gray-300 text-sm">{w.images[idx].desc}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* REFLEXION */}
      <ReflexionFinal />

      {/* BIBLIOGRAFIA */}
      <Bibliografia />

      <footer className="bg-slate-900 border-t border-cyan-500/30 py-8 mt-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">© 2025 Rojas Quispe Rolando Raul</p>
          <p className="text-cyan-400 mt-2">Ingeniería de Sistemas • IX Semestre</p>
        </div>
      </footer>
    </div>
  )
}
