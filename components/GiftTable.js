import SectionWrapper from './SectionWrapper'

export default function GiftTable() {
  return (
    <SectionWrapper className="py-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        <p className="font-inter text-xs tracking-[0.3em] uppercase text-[#3E5B3A] mb-2">Detalles</p>
        <h2 className="font-playfair text-3xl md:text-4xl text-[#2a2a2a] mb-10">Mesa de regalos</h2>

        <div className="p-10 rounded-3xl border-2 border-dashed border-[#D8A928]/40 text-center">
          {/* Gift icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D8A928]/10 mb-5">
            <svg className="w-7 h-7 text-[#D8A928]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1012 8.25a2.625 2.625 0 000-3.375zM12 8.25v13.5M12 8.25H3.375M12 8.25h8.25M3.375 8.25a1.5 1.5 0 00-1.5 1.5v1.5a1.5 1.5 0 001.5 1.5H12M20.625 8.25a1.5 1.5 0 011.5 1.5v1.5a1.5 1.5 0 01-1.5 1.5H12"/>
            </svg>
          </div>

          <p className="font-cormorant text-xl leading-relaxed text-[#2a2a2a] italic mb-6">
            "El mejor regalo es tu presencia, pero si deseas tener un detalle con nosotros, pronto agregaremos nuestra mesa de regalos."
          </p>

          {/* Placeholder button */}
          <button
            disabled
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-inter text-sm tracking-[0.15em] uppercase opacity-50 cursor-not-allowed"
            style={{ background: '#D8A92820', color: '#D8A928', border: '1px solid #D8A92840' }}
          >
            Próximamente
          </button>

          {/* 
            ✏️ PLACEHOLDER: Cuando estés listo, reemplaza el botón disabled con:
            <a href="[LINK_MESA_REGALOS]" target="_blank" className="...">
              Ver mesa de regalos
            </a>
          */}
        </div>
      </div>
    </SectionWrapper>
  )
}
