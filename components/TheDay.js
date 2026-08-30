import SectionWrapper from './SectionWrapper'

export default function TheDay() {
  return (
    <SectionWrapper className="py-20 px-6 bg-white relative overflow-hidden">
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 400" className="w-full h-full">
          <circle cx="150" cy="80" r="80" fill="#273462"/>
          <circle cx="100" cy="200" r="60" fill="#045490"/>
          <circle cx="160" cy="320" r="70" fill="#84B7CE"/>
        </svg>
      </div>

      <div className="max-w-xl mx-auto text-center relative z-10">
        <p className="font-inter text-xs tracking-[0.3em] uppercase text-[#045490] mb-2">Celebración</p>
        <h2 className="font-playfair text-3xl md:text-4xl text-[#273462] mb-10">El gran día</h2>

        {/* Date card */}
        <div className="inline-flex flex-col items-center gap-1 mb-8 px-10 py-6 rounded-2xl text-white shadow-xl shadow-[#273462]/25" style={{ background: 'linear-gradient(135deg, #273462 0%, #045490 100%)' }}>
          <p className="font-cormorant text-5xl font-light leading-none">27</p>
          <p className="font-inter text-xs tracking-[0.3em] uppercase opacity-80">Febrero</p>
          <p className="font-playfair text-3xl font-bold">2027</p>
        </div>

        {/* Details */}
        <div className="space-y-4 mb-10">
          <div className="flex items-center justify-center gap-3">
            <svg className="w-5 h-5 text-[#045490]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <p className="font-cormorant text-xl text-[#22283f]">18:00 hrs</p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <svg className="w-5 h-5 text-[#045490]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
            </svg>
            <p className="font-cormorant text-xl text-[#22283f]">Camino Carampangue 01001, Talagante</p>
          </div>
        </div>

        {/* Map button */}
        <a
          href="https://maps.app.goo.gl/H9GHCqUzm9vsXSCW6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-[#273462] text-[#273462] font-inter text-sm tracking-[0.15em] uppercase hover:bg-[#273462] hover:text-white transition-all duration-300"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"/>
          </svg>
          Ver ubicación
        </a>
      </div>
    </SectionWrapper>
  )
}
