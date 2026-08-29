import SectionWrapper from './SectionWrapper'

export default function PhotoHero() {
  return (
    <SectionWrapper className="py-12 px-6">
      <div className="max-w-2xl mx-auto">
        {/* 
          📸 FOTO: Reemplaza esta sección con tu foto de pareja.
          Coloca la imagen en /public/images/novios.jpg
          y cambia el div por: <Image src="/images/novios.jpg" ... />
        */}
        <div
          className="relative w-full rounded-3xl overflow-hidden shadow-2xl shadow-[#C93A8B]/15"
          style={{ aspectRatio: '4/5' }}
        >
          {/* Placeholder background */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{ background: 'linear-gradient(145deg, #f0e8f5 0%, #fce8e0 50%, #f8f4ee 100%)' }}
          >
            {/* Decorative floral placeholder */}
            <svg className="w-32 h-32 opacity-20 mb-4" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="80" r="50" fill="#C93A8B"/>
              <circle cx="60" cy="120" r="35" fill="#F26A4B"/>
              <circle cx="140" cy="120" r="35" fill="#D8A928"/>
              <ellipse cx="100" cy="160" rx="20" ry="50" fill="#3E5B3A"/>
            </svg>
            <p className="font-cormorant text-xl text-[#C93A8B] italic opacity-60">Nicole &amp; Luis</p>
            <p className="font-inter text-xs text-[#3E5B3A] tracking-widest uppercase mt-2 opacity-80">
              <img
  src="/images/novios.jpg"
  alt="Nicole y Luis"
  className="absolute inset-0 w-full h-full object-cover"
/>
            </p>
          </div>

          {/* Overlay gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />

          {/* Name overlay */}
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <p className="font-playfair text-white text-2xl font-semibold drop-shadow-lg">
              Nicole &amp; Luis
            </p>
            <p className="font-cormorant text-white/80 text-lg italic drop-shadow">09 · 11 · 2026</p>
          </div>
        </div>

        {/* Frame accent lines */}
        <div className="relative mt-4 flex justify-center gap-2">
          <div className="h-0.5 w-12 bg-[#C93A8B] opacity-40 rounded" />
          <div className="h-0.5 w-4 bg-[#D8A928] opacity-60 rounded" />
          <div className="h-0.5 w-12 bg-[#F26A4B] opacity-40 rounded" />
        </div>
      </div>
    </SectionWrapper>
  )
}
