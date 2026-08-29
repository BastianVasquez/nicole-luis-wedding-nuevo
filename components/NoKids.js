'use client'

import { useEffect, useState } from 'react'
import SectionWrapper from './SectionWrapper'

// Agrega aquí el listado real de invitados.
// No se han inventado nombres porque el repositorio original no contiene un listado de invitados.
const invitados = []

export default function NoKids() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <SectionWrapper className="py-16 px-6">
        <div className="max-w-xl mx-auto">
          <div className="relative overflow-hidden p-8 md:p-10 rounded-[2rem] border border-[#D4A017]/30 bg-white/90 text-center shadow-sm">
            <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-[#FF4F91]/10 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-28 h-28 rounded-full bg-[#FF7043]/10 blur-2xl" />

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#E91E63]/10 mb-5">
                <svg className="w-7 h-7 text-[#E91E63]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7-3a3 3 0 1 1 0 6m4 7v-2a4 4 0 0 0-3-3.87" />
                </svg>
              </div>

              <p className="font-inter text-[10px] tracking-[0.25em] uppercase text-[#4F7D3A] mb-3">
                Invitación personalizada
              </p>

              <h3 className="font-playfair text-2xl md:text-3xl text-[#2a2a2a] mb-4">
                Con mucho cariño
              </h3>

              <p className="font-cormorant text-lg md:text-xl text-[#2a2a2a] leading-relaxed italic opacity-80">
                Esta invitación está destinada solo a las personas indicadas en esta lista.
              </p>

              <button
                type="button"
                onClick={() => setOpen(true)}
                className="mt-7 inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-inter text-sm tracking-[0.15em] uppercase text-white shadow-lg shadow-[#E91E63]/20 hover:-translate-y-0.5 transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #E91E63 0%, #FF7043 100%)' }}
              >
                Ver invitados
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {open && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-[#2a2a2a]/55 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="guest-list-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false)
          }}
        >
          <div className="relative w-full max-w-md max-h-[82vh] rounded-[2rem] bg-[#FFFDF8] border border-[#D4A017]/35 shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF4F91] via-[#FFB300] to-[#4F7D3A]" />

            <div className="p-6 md:p-8 pb-4 text-center">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar lista de invitados"
                className="absolute top-4 right-4 w-9 h-9 rounded-full border border-[#D4A017]/25 text-[#4F7D3A] hover:bg-[#E91E63]/5 transition-colors"
              >
                ×
              </button>

              <p className="font-inter text-[10px] tracking-[0.25em] uppercase text-[#4F7D3A] mb-2">
                Nicole &amp; Luis
              </p>
              <h3 id="guest-list-title" className="font-playfair text-2xl md:text-3xl text-[#2a2a2a]">
                Lista de invitados
              </h3>
              <div className="mx-auto mt-4 h-px w-20 bg-[#D4A017]/70" />
            </div>

            <div className="px-6 md:px-8 pb-5">
              <div className="max-h-[50vh] overflow-y-auto pr-2 overscroll-contain rounded-2xl border border-[#D4A017]/15 bg-white/70">
                {invitados.length > 0 ? (
                  <ul className="divide-y divide-[#D4A017]/10">
                    {invitados.map((invitado, index) => (
                      <li key={`${invitado}-${index}`} className="px-5 py-3.5 font-cormorant text-lg text-[#2a2a2a]">
                        {invitado}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="px-6 py-10 text-center">
                    <p className="font-cormorant text-lg text-[#2a2a2a] italic opacity-70">
                      Aquí aparecerá el listado de invitados.
                    </p>
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mt-5 w-full py-3 rounded-full border border-[#E91E63]/30 text-[#E91E63] font-inter text-xs tracking-[0.18em] uppercase hover:bg-[#E91E63]/5 transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
