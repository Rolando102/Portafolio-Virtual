import React, { useEffect, useMemo, useState } from 'react'
import Presentacion from './components/Presentacion'
import ProyectosConcluidos from './components/ProyectosConcluidos'
import ReflexionFinal from './components/ReflexionFinal'
import Bibliografia from './components/Bibliografia'
import FondoAnimado from './components/FondoAnimado'
import Reveal from './components/Reveal'
import { weeksData } from './data/weeks'

const NAV_ITEMS = [
  { id: 'portada', label: 'Inicio' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'semanas', label: 'Cuaderno' },
  { id: 'reflexion_final', label: 'Reflexión' },
  { id: 'bibliografia', label: 'Bibliografía' },
]

const ICONS = {
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.94 3.2 9.13 7.65 10.6.56.1.76-.24.76-.54 0-.27-.01-1.16-.02-2.1-3.11.68-3.77-1.32-3.77-1.32-.51-1.3-1.24-1.64-1.24-1.64-1.02-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.71 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.48-.28-5.1-1.24-5.1-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .93-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.63 5.24-5.13 5.52.4.35.76 1.03.76 2.08 0 1.5-.01 2.71-.01 3.08 0 .3.2.65.77.54A11.03 11.03 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
      <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5v-11Z" />
      <path d="m4 6.5 8 6.5 8-6.5" />
    </svg>
  ),
  down: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
      <path d="M12 5v14M6 13l6 6 6-6" />
    </svg>
  ),
}

export default function App() {
  const [selectedWeek, setSelectedWeek] = useState("1")
  const [active, setActive] = useState('portada')
  const [scrolled, setScrolled] = useState(false)
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

    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => { obs.disconnect(); window.removeEventListener('scroll', onScroll) }
  }, [])

  return (
    <div className="relative min-h-screen text-white selection:bg-cyan-500/30">
      <FondoAnimado />

      {/* NAV SUPERIOR FLOTANTE */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-3xl">
        <div className={`glass rounded-full px-3 py-2 flex items-center justify-between gap-1 shadow-2xl transition-all duration-300 ${scrolled ? 'shadow-cyan-500/10' : ''}`}>
          <a href="#portada" className="hidden sm:flex items-center gap-2 pl-3 pr-2 font-bold text-gradient text-sm tracking-wide">
            RR<span className="text-white/40">.</span>
          </a>
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar mx-auto">
            {NAV_ITEMS.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors duration-300 ${
                  active === item.id ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {active === item.id && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/80 to-purple-500/80 -z-10 shadow-lg shadow-cyan-500/30" />
                )}
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* PORTADA */}
      <header id="portada" className="relative overflow-hidden pt-36 pb-20">
        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-14">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-cyan-300 text-xs sm:text-sm font-semibold animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Portafolio Académico 2026-I
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Hola, soy <span className="text-gradient">Rolando</span> Rojas
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Estudiante de Ingeniería de Sistemas construyendo experiencias web modernas: portafolio con proyectos, bitácora semanal, reflexiones y bibliografía.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <a href="#proyectos" className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 font-semibold text-sm shadow-lg shadow-purple-500/30 hover:scale-105 hover:shadow-cyan-500/40 transition-all">
                  Ver proyectos
                </a>
                <a href="mailto:rojasquisperolandoraul@gmail.com" className="flex items-center gap-2 px-6 py-3 rounded-full glass font-semibold text-sm hover:border-cyan-400/50 hover:text-cyan-300 transition-all">
                  {ICONS.mail} Contáctame
                </a>
                <a href="https://github.com/Rolando102" target="_blank" rel="noreferrer" className="flex items-center justify-center w-11 h-11 rounded-full glass hover:text-cyan-300 hover:border-cyan-400/50 transition-all">
                  {ICONS.github}
                </a>
              </div>
            </div>
            <Presentacion />
          </div>
        </div>
        <a href="#proyectos" className="hidden sm:flex flex-col items-center gap-1 mx-auto mt-16 w-fit text-gray-500 hover:text-cyan-300 transition-colors animate-float">
          <span className="text-xs tracking-widest uppercase">Explorar</span>
          {ICONS.down}
        </a>
      </header>

      {/* PROYECTOS */}
      <ProyectosConcluidos />

      {/* CUADERNO (SEMANAS) */}
      <section id="semanas" className="container mx-auto px-6 py-20">
        <Reveal direction="up" className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 glass rounded-full text-purple-300 text-xs font-semibold tracking-widest uppercase mb-3">
            Bitácora
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Cuaderno de <span className="text-gradient">Semanas</span>
          </h2>
        </Reveal>

        <Reveal direction="up" delay={100} className="max-w-md mx-auto mb-8">
          <div className="flex justify-between text-xs text-gray-400 mb-1.5">
            <span>Progreso del curso</span>
            <span className="text-cyan-300 font-semibold">Semana {String(selectedWeek).padStart(2, '0')} de {wkeys.length}</span>
          </div>
          <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-500"
              style={{ width: `${(Number(selectedWeek) / wkeys.length) * 100}%` }}
            />
          </div>
        </Reveal>

        <Reveal direction="up" delay={180} className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {wkeys.map(week => (
            <button key={week} onClick={() => setSelectedWeek(String(week))} className={
              `px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                String(selectedWeek) === String(week)
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-purple-500/30 scale-105'
                  : 'glass text-gray-400 hover:text-cyan-300 hover:border-cyan-400/40'
              }`
            }>{String(week).padStart(2, '0')}</button>
          ))}
        </Reveal>

        {w && (
          <div key={selectedWeek} className="space-y-6 max-w-4xl mx-auto animate-fade-in">
            <div className="glass glow-border rounded-2xl p-6 shadow-xl space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-gradient">{w.title}</h3>
              {w.tech && w.tech.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {w.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-400/20">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {!w.summary && (!w.highlights || w.highlights.length === 0) ? (
              <div className="glass rounded-2xl p-10 text-center">
                <p className="text-gray-500">Aún no hay contenido registrado para esta semana.</p>
              </div>
            ) : (
              <>
                {w.summary && (
                  <div className="glass rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-purple-300 mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" /> Resumen
                    </h4>
                    <p className="text-gray-300 leading-relaxed">{w.summary}</p>
                  </div>
                )}

                {w.highlights && w.highlights.length > 0 && (
                  <div className="glass rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> Aprendizajes clave
                    </h4>
                    <ul className="space-y-2.5 stagger">
                      {w.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-gray-300 leading-relaxed">
                          <span className="mt-1 text-cyan-400 shrink-0">✓</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {(w.github?.trim() || w['github-practica']?.trim()) && (
                  <div className="glass rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-cyan-300 mb-3 flex items-center gap-2">
                      {ICONS.github} Repositorio
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {w.github?.trim() && (
                        <a href={w.github.trim()} target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-600 to-purple-600 font-semibold text-sm hover:scale-105 shadow-lg shadow-purple-500/20 transition-transform">
                          Ver Repositorio →
                        </a>
                      )}
                      {w['github-practica']?.trim() && (
                        <a href={w['github-practica'].trim()} target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-2.5 rounded-full glass font-semibold text-sm hover:border-cyan-400/50 hover:text-cyan-300 transition-all">
                          Ver Práctica →
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {w.images && w.images.length > 0 && (
                  <div className="glass rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" /> Galería
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {w.images.map((img, idx) => (
                        <Reveal key={idx} direction="up" delay={idx * 100} className="space-y-2 group">
                          <div className="aspect-video rounded-xl border border-white/10 flex items-center justify-center overflow-hidden bg-black/20">
                            <img src={img.url} alt={`Imagen ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          </div>
                          {img.desc && <p className="text-gray-400 text-sm">{img.desc}</p>}
                        </Reveal>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </section>

      {/* REFLEXION */}
      <ReflexionFinal />

      {/* BIBLIOGRAFIA */}
      <Bibliografia />

      <footer className="relative border-t border-white/10 py-10 mt-10">
        <div className="container mx-auto px-6 flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-3">
            <a href="https://github.com/Rolando102" target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full glass hover:text-cyan-300 hover:border-cyan-400/50 transition-all">
              {ICONS.github}
            </a>
            <a href="mailto:rojasquisperolandoraul@gmail.com" className="flex items-center justify-center w-10 h-10 rounded-full glass hover:text-cyan-300 hover:border-cyan-400/50 transition-all">
              {ICONS.mail}
            </a>
          </div>
          <p className="text-gray-400 text-sm">© 2026 Rojas Quispe Rolando Raul</p>
          <p className="text-cyan-400 text-sm">Ingeniería de Sistemas • IX Semestre</p>
        </div>
      </footer>
    </div>
  )
}
