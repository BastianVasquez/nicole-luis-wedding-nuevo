import SectionWrapper from './SectionWrapper'

export default function Closing() {
  return (
    <SectionWrapper className="py-24 px-6 relative overflow-hidden">
      {/* Background floral decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D8A928]/40 to-transparent" />
        <svg className="absolute -bottom-8 -left-8 w-56 opacity-10" viewBox="0 0 300 300" fill="none">
          <circle cx="80" cy="220" r="60" fill="#C93A8B"/>
          <circle cx="150" cy="260" r="40" fill="#F26A4B"/>
          <circle cx="50" cy="280" r="30" fill="#D8A928"/>
        </svg>
        <svg className="absolute -bottom-8 -right-8 w-56 opacity-10" viewBox="0 0 300 300" fill="none">
          <circle cx="220" cy="220" r="60" fill="#3E5B3A"/>
          <circle cx="160" cy="260" r="40" fill="#C93A8B"/>
          <circle cx="260" cy="270" r="30" fill="#F26A4B"/>
        </svg>
      </div>

      <div className="max-w-xl mx-auto text-center relative z-10">
        {/* Names */}
        <h2 className="font-playfair text-5xl md:text-6xl text-[#2a2a2a] mb-2">Nicole</h2>
        <p className="font-cormorant text-4xl text-[#C93A8B] italic mb-2">&amp;</p>
        <h2 className="font-playfair text-5xl md:text-6xl text-[#2a2a2a] mb-8">Luis</h2>

        <div className="divider-floral mb-8">
          <span className="text-[#D8A928] text-xl">✦</span>
        </div>

        <p className="font-cormorant text-xl text-[#2a2a2a] opacity-70 mb-8">
          Esperamos contar con tu presencia. Muchas gracias.
        </p>

        {/* Verse */}
        <div className="mt-8 p-6 rounded-2xl border border-[#D8A928]/25 bg-white/60">
          <p className="font-cormorant text-xl md:text-2xl italic text-[#2a2a2a] leading-relaxed mb-3">
            "Y sobre todas estas cosas vestíos de amor,<br />que es el vínculo perfecto."
          </p>
          <p className="font-inter text-xs tracking-[0.2em] uppercase text-[#D8A928]">
            Colosenses 3:14
          </p>
        </div>

        {/* Contact placeholder */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* 
            ✏️ CONTACTO: Reemplaza los placeholders con datos reales
          */}
          <a
            href="https://wa.me/56XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3E5B3A] text-white font-inter text-sm tracking-wide hover:bg-[#2d4329] transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
          <a
            href="mailto:correo@ejemplo.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#C93A8B]/40 text-[#C93A8B] font-inter text-sm tracking-wide hover:bg-[#C93A8B]/5 transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
            </svg>
            Email
          </a>
        </div>

        {/* Footer */}
        <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-[#2a2a2a] opacity-25 mt-12">
          Nicole &amp; Luis · 09·11·2026
        </p>
      </div>
    </SectionWrapper>
  )
}
