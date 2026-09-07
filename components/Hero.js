'use client'
import { useEffect, useRef } from 'react'

export default function Hero({ guest }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    setTimeout(() => el.classList.add('visible'), 100)
  }, [])

  const scrollToContent = () => {
    document.getElementById('countdown')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-2 md:pt-4 pb-20 overflow-hidden bg-[#FBFAF6]">

      {/* Main content */}
      <div
        ref={ref}
        className="section-animate relative z-10 text-center px-6 max-w-2xl mx-auto"
      >

        {/* Guest greeting (only when entering via personal link) */}
        {guest?.invitationName && (
          <p className="font-cormorant text-lg md:text-xl text-[#045490] italic mb-3">
            Querida {guest.invitationName}, esta invitación es para ti
          </p>
        )}

        {/* Intro text */}
        <p className="font-inter text-xs tracking-[0.35em] uppercase text-[#045490] mb-6">
          Con Dios como guía, comenzamos nuestro camino juntos
        </p>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#FFF08C]" />

          <svg width="18" height="18" viewBox="0 0 24 24" fill="#84B7CE" opacity="0.9">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          </svg>

          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#FFF08C]" />
        </div>

        {/* Small title */}
        <p className="font-cormorant text-lg md:text-xl text-[#045490] tracking-widest uppercase mb-2">
          Nuestra boda
        </p>

        {/* Names */}
        <h1 className="font-playfair text-6xl md:text-8xl font-bold text-[#273462] leading-none mb-4">
          Nicole
          <span className="block text-[#045490] font-light italic text-5xl md:text-7xl">
            &amp;
          </span>
          Luis
        </h1>

        {/* Date */}
        <div className="flex items-center justify-center gap-4 mt-6 mb-10">
          <div className="h-px w-12 bg-[#FFF08C] opacity-90" />

          <p className="font-cormorant text-2xl md:text-3xl text-[#045490] font-light tracking-[0.15em]">
            27 · 02 · 2027
          </p>

          <div className="h-px w-12 bg-[#FFF08C] opacity-90" />
        </div>

        {/* Foto principal */}
        <div className="mt-8 mb-8">
          <div
            className="relative w-full max-w-[420px] mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-[#273462]/20"
            style={{ aspectRatio: '4/5' }}
          >
            <img
              src="/images/fotonovios2.JPG"
              alt="Nicole y Luis"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/25 to-transparent" />

            <div className="absolute bottom-6 left-0 right-0 text-center">
              <p className="font-playfair text-white text-2xl font-semibold drop-shadow-lg">
                Nicole &amp; Luis
              </p>
              <p className="font-cormorant text-white/80 text-lg italic drop-shadow">
                27 · 02 · 2027
              </p>
            </div>
          </div>

          {/* Líneas decorativas */}
          <div className="relative mt-4 flex justify-center gap-2">
            <div className="h-0.5 w-12 bg-[#045490] opacity-40 rounded" />
            <div className="h-0.5 w-4 bg-[#FFF08C] opacity-90 rounded" />
            <div className="h-0.5 w-12 bg-[#84B7CE] opacity-60 rounded" />
          </div>
        </div>

        {/* BUTTON — reemplazado por la imagen de los anillos */}
        <button
          onClick={scrollToContent}
          aria-label="Abrir invitación"
          className="group inline-flex flex-col items-center gap-2 transition-transform duration-300 hover:-translate-y-0.5"
        >
          <img
            src="/images/anillos.png"
            alt="Abrir invitación"
            className="w-40 md:w-48 h-auto"
          />
          <svg
            className="w-4 h-4 text-[#273462] transition-transform group-hover:translate-y-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FBFAF6] to-transparent pointer-events-none" />

    </section>
  )
}
