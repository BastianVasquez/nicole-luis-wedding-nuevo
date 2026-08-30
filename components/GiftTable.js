import SectionWrapper from './SectionWrapper'

export default function GiftTable() {
  return (
    <SectionWrapper className="py-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        <p className="font-inter text-xs tracking-[0.3em] uppercase text-[#045490] mb-2">Detalles</p>
        <h2 className="font-playfair text-3xl md:text-4xl text-[#273462] mb-10">Mesa de regalos</h2>

        <div className="p-10 rounded-3xl border-2 border-dashed border-[#84B7CE]/50 text-center bg-white">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FFF08C]/40 mb-5">
            <svg className="w-7 h-7 text-[#273462]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1012 8.25a2.625 2.625 0 000-3.375zM12 8.25v13.5M12 8.25H3.375M12 8.25h8.25M3.375 8.25a1.5 1.5 0 00-1.5 1.5v1.5a1.5 1.5 0 001.5 1.5H12M20.625 8.25a1.5 1.5 0 011.5 1.5v1.5a1.5 1.5 0 01-1.5 1.5H12"/>
            </svg>
          </div>

          <p className="font-cormorant text-xl leading-relaxed text-[#22283f] italic mb-6">
            El mejor regalo es tu presencia, pero si deseas tener un detalle para nosotros, puedes hacerlo aquí
          </p>

          <a
            href="https://club.noviosparis.cl/home/couple-catalog/6971199"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-inter text-sm tracking-[0.15em] uppercase text-white shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            style={{ background: '#273462' }}
          >
            Ver mesa de regalos
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
            </svg>
          </a>
        </div>
      </div>
    </SectionWrapper>
  )
}
