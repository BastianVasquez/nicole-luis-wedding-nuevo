import SectionWrapper from './SectionWrapper'

export default function DressCode() {
  return (
    <SectionWrapper className="py-20 px-6 bg-white relative overflow-hidden">
      <div className="max-w-xl mx-auto text-center relative z-10">
        <p className="font-inter text-xs tracking-[0.3em] uppercase text-[#045490] mb-2">Indumentaria</p>
        <h2 className="font-playfair text-3xl md:text-4xl text-[#273462] mb-10">Dress Code</h2>

        <div className="relative p-10 md:p-12 rounded-[2rem] border border-[#84B7CE]/40 overflow-hidden bg-[#FBFAF6] shadow-sm">
          <div className="absolute inset-0 pointer-events-none opacity-70">
            <div className="absolute -top-16 -right-12 w-36 h-36 rounded-full bg-[#84B7CE]/20 blur-3xl" />
            <div className="absolute -bottom-16 -left-12 w-36 h-36 rounded-full bg-[#FFF08C]/30 blur-3xl" />
          </div>

          <img
            src="/images/dresscode-flowers.png"
            alt="Vestido de novia y traje de novio entre flores"
            className="relative mx-auto mb-6 w-full max-w-[220px] h-auto"
          />

          <p className="font-playfair text-3xl md:text-4xl text-[#22283f] mb-4">Formal</p>
          <div className="h-px w-16 bg-[#FFF08C] mx-auto mb-4 opacity-90" />
          <p className="font-cormorant text-lg text-[#22283f] opacity-70 italic">
            El blanco queda reservado para la novia.
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
