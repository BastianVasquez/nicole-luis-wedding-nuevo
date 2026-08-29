import SectionWrapper from './SectionWrapper'

export default function Parents() {
  return (
    <SectionWrapper className="py-20 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-[#FF4F91] via-[#FFB300] to-[#4F7D3A] rounded-full opacity-50" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="font-inter text-xs tracking-[0.3em] uppercase text-[#4F7D3A] mb-2">
          Con la bendición de
        </p>

        <h2 className="font-playfair text-3xl md:text-4xl text-[#2a2a2a] mb-12">
          Nuestras familias
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative p-8 md:p-10 rounded-[2rem] border border-[#E91E63]/20 bg-[#FFFDF8] shadow-sm hover:shadow-lg hover:shadow-[#E91E63]/10 transition-all duration-300">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-10 h-10 rounded-full bg-[#FFFDF8] border border-[#D4A017]/40 flex items-center justify-center">
                <span className="text-[#E91E63] text-lg">♀</span>
              </div>
            </div>

            <p className="font-cormorant text-sm tracking-[0.2em] uppercase text-[#E91E63] mb-7 mt-2">
              Padres de la novia
            </p>

            <div className="space-y-3">
              <p className="font-playfair text-xl text-[#2a2a2a]">Iván Rojas</p>
              <p className="font-playfair text-xl text-[#2a2a2a]">Sandra Pérez</p>
            </div>
          </div>

          <div className="relative p-8 md:p-10 rounded-[2rem] border border-[#4F7D3A]/20 bg-[#FFFDF8] shadow-sm hover:shadow-lg hover:shadow-[#4F7D3A]/10 transition-all duration-300">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-10 h-10 rounded-full bg-[#FFFDF8] border border-[#D4A017]/40 flex items-center justify-center">
                <span className="text-[#4F7D3A] text-lg">♂</span>
              </div>
            </div>

            <p className="font-cormorant text-sm tracking-[0.2em] uppercase text-[#4F7D3A] mb-7 mt-2">
              Padres del novio
            </p>

            <div className="space-y-3">
              <p className="font-playfair text-xl text-[#2a2a2a]">Luis Ureta</p>
              <p className="font-playfair text-xl text-[#2a2a2a]">Paola Macías</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
