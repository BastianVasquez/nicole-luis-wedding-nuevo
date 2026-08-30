import SectionWrapper from './SectionWrapper'

export default function Parents() {
  return (
    <SectionWrapper className="py-20 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-[#273462] via-[#FFF08C] to-[#045490] rounded-full opacity-60" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="font-inter text-xs tracking-[0.3em] uppercase text-[#045490] mb-2">
          Con la bendición de
        </p>

        <h2 className="font-playfair text-3xl md:text-4xl text-[#273462] mb-12">
          Nuestras familias
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative p-8 md:p-10 rounded-[2rem] border border-[#273462]/15 bg-[#FBFAF6] shadow-sm hover:shadow-lg hover:shadow-[#273462]/10 transition-all duration-300">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-10 h-10 rounded-full bg-[#FBFAF6] border border-[#FFF08C] flex items-center justify-center">
                <span className="text-[#273462] text-lg">♀</span>
              </div>
            </div>

            <p className="font-cormorant text-sm tracking-[0.2em] uppercase text-[#273462] mb-7 mt-2">
              Padres de la novia
            </p>

            <div className="space-y-3">
              <p className="font-playfair text-xl text-[#22283f]">Iván Rojas</p>
              <p className="font-playfair text-xl text-[#22283f]">Sandra Pérez</p>
            </div>
          </div>

          <div className="relative p-8 md:p-10 rounded-[2rem] border border-[#045490]/20 bg-[#FBFAF6] shadow-sm hover:shadow-lg hover:shadow-[#045490]/10 transition-all duration-300">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-10 h-10 rounded-full bg-[#FBFAF6] border border-[#FFF08C] flex items-center justify-center">
                <span className="text-[#045490] text-lg">♂</span>
              </div>
            </div>

            <p className="font-cormorant text-sm tracking-[0.2em] uppercase text-[#045490] mb-7 mt-2">
              Padres del novio
            </p>

            <div className="space-y-3">
              <p className="font-playfair text-xl text-[#22283f]">Luis Ureta</p>
              <p className="font-playfair text-xl text-[#22283f]">Paola Macías</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
