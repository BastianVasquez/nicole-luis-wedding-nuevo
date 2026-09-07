import SectionWrapper from './SectionWrapper'

export default function Closing() {
  return (
    <SectionWrapper className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFF08C]/70 to-transparent" />
      </div>

      <div className="max-w-xl mx-auto text-center relative z-10">
        <h2 className="font-playfair text-5xl md:text-6xl text-[#273462] mb-2">Nicole</h2>
        <p className="font-cormorant text-4xl text-[#045490] italic mb-2">&amp;</p>
        <h2 className="font-playfair text-5xl md:text-6xl text-[#273462] mb-8">Luis</h2>

        <div className="divider-floral mb-8">
          <span className="text-[#FFF08C] text-xl">✦</span>
        </div>

        <p className="font-cormorant text-xl text-[#22283f] opacity-70 mb-8">
          Esperamos contar con tu presencia. Muchas gracias.
        </p>

        <div className="mt-8 p-6 rounded-2xl border border-[#84B7CE]/40 bg-white/70">
          <p className="font-cormorant text-xl md:text-2xl italic text-[#22283f] leading-relaxed mb-3">
            "Y sobre todas estas cosas vestíos de amor,<br />que es el vínculo perfecto."
          </p>
          <p className="font-inter text-xs tracking-[0.2em] uppercase text-[#045490]">
            Colosenses 3:14
          </p>
        </div>

        {/* Contacto WhatsApp */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          
            href="https://wa.me/56961788810"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#045490] text-white font-inter text-sm tracking-wide hover:bg-[#273462] transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Hablar con Nicole
          </a>
        </div>

        <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-[#22283f] opacity-25 mt-12">
          Nicole &amp; Luis · 27·02·2027
        </p>
      </div>
    </SectionWrapper>
  )
}
