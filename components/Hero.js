'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
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
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-16 md:pt-24 pb-20 overflow-hidden bg-[#F8F4EE]">

      {/* Background floral decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Top-left */}
        <svg className="absolute -top-8 -left-8 w-64 md:w-80 opacity-20" viewBox="0 0 300 300" fill="none">
          <circle cx="80" cy="80" r="40" fill="#C93A8B" opacity="0.4"/>
          <circle cx="130" cy="50" r="28" fill="#F26A4B" opacity="0.35"/>
          <circle cx="50" cy="130" r="24" fill="#D8A928" opacity="0.3"/>
          <ellipse cx="95" cy="160" rx="16" ry="40" fill="#3E5B3A" opacity="0.2" transform="rotate(-20 95 160)"/>
        </svg>

        {/* Bottom-right */}
        <svg className="absolute -bottom-8 -right-8 w-64 md:w-80 opacity-20" viewBox="0 0 300 300" fill="none">
          <circle cx="220" cy="220" r="44" fill="#F26A4B" opacity="0.4"/>
          <circle cx="170" cy="250" r="30" fill="#C93A8B" opacity="0.35"/>
          <circle cx="250" cy="170" r="22" fill="#D8A928" opacity="0.3"/>
          <ellipse cx="160" cy="200" rx="14" ry="38" fill="#3E5B3A" opacity="0.2" transform="rotate(20 160 200)"/>
        </svg>

      </div>

      {/* Gold top line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D8A928] to-transparent opacity-60" />

      {/* Main content */}
      <div
        ref={ref}
        className="section-animate relative z-10 text-center px-6 max-w-2xl mx-auto"
      >

        {/* Intro text */}
        <p className="font-inter text-xs tracking-[0.35em] uppercase text-[#3E5B3A] mb-6">
          Con Dios como guía, comenzamos nuestro camino juntos
        </p>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D8A928]" />

          <svg width="18" height="18" viewBox="0 0 24 24" fill="#D8A928" opacity="0.8">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          </svg>

          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D8A928]" />
        </div>

        {/* Small title */}
        <p className="font-cormorant text-lg md:text-xl text-[#C93A8B] tracking-widest uppercase mb-2">
          Nuestra boda
        </p>

        {/* Names */}
        <h1 className="font-playfair text-6xl md:text-8xl font-bold text-[#2a2a2a] leading-none mb-4">
          Nicole
          <span className="block text-[#C93A8B] font-light italic text-5xl md:text-7xl">
            &amp;
          </span>
          Luis
        </h1>

        {/* Date */}
        <div className="flex items-center justify-center gap-4 mt-6 mb-10">
          <div className="h-px w-12 bg-[#D8A928] opacity-60" />

          <p className="font-cormorant text-2xl md:text-3xl text-[#3E5B3A] font-light tracking-[0.15em]">
            09 · 11 · 2026
          </p>

          <div className="h-px w-12 bg-[#D8A928] opacity-60" />
        </div>

        {/* Foto principal */}
<div className="mt-8 mb-8">
  <div
    className="relative w-full max-w-[420px] mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-[#C93A8B]/15"
    style={{ aspectRatio: '4/5' }}
  >
    {/* Imagen */}
    <img
      src="/images/fotonovios2.JPG"
      alt="Nicole y Luis"
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Overlay gradient */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />

    {/* Texto sobre foto */}
    <div className="absolute bottom-6 left-0 right-0 text-center">
      <p className="font-playfair text-white text-2xl font-semibold drop-shadow-lg">
        Nicole &amp; Luis
      </p>
      <p className="font-cormorant text-white/80 text-lg italic drop-shadow">
        09 · 11 · 2026
      </p>
    </div>
  </div>

  {/* Líneas decorativas */}
  <div className="relative mt-4 flex justify-center gap-2">
    <div className="h-0.5 w-12 bg-[#C93A8B] opacity-40 rounded" />
    <div className="h-0.5 w-4 bg-[#D8A928] opacity-60 rounded" />
    <div className="h-0.5 w-12 bg-[#F26A4B] opacity-40 rounded" />
  </div>
</div>

        {/* BUTTON */}
        <button
          onClick={scrollToContent}
          className="group relative inline-flex items-center gap-3 px-10 py-4 font-inter text-sm tracking-[0.2em] uppercase text-white overflow-hidden rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#C93A8B]/30 hover:-translate-y-0.5"
          style={{
            background: 'linear-gradient(135deg, #C93A8B 0%, #F26A4B 100%)'
          }}
        >

          <span className="relative z-10">
            Abrir invitación
          </span>

          <svg
            className="w-4 h-4 relative z-10 transition-transform group-hover:translate-y-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>

          <div className="absolute inset-0 bg-gradient-to-r from-[#F26A4B] to-[#C93A8B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F8F4EE] to-transparent pointer-events-none" />

    </section>
  )
}