import SectionWrapper from './SectionWrapper'

export default function PhotoHero() {
  return (
    <SectionWrapper className="py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <div
          className="relative w-full rounded-3xl overflow-hidden shadow-2xl shadow-[#273462]/15"
          style={{ aspectRatio: '4/5' }}
        >
          <img
            src="/images/novios.jpg"
            alt="Nicole y Luis"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/25 to-transparent" />

          <div className="absolute bottom-6 left-0 right-0 text-center">
            <p className="font-playfair text-white text-2xl font-semibold drop-shadow-lg">
              Nicole &amp; Luis
            </p>
            <p className="font-cormorant text-white/80 text-lg italic drop-shadow">27 · 02 · 2027</p>
          </div>
        </div>

        <div className="relative mt-4 flex justify-center gap-2">
          <div className="h-0.5 w-12 bg-[#045490] opacity-40 rounded" />
          <div className="h-0.5 w-4 bg-[#FFF08C] opacity-90 rounded" />
          <div className="h-0.5 w-12 bg-[#84B7CE] opacity-60 rounded" />
        </div>
      </div>
    </SectionWrapper>
  )
}
