import SectionWrapper from './SectionWrapper'

export default function Message() {
  return (
    <SectionWrapper className="py-16 px-6 bg-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C93A8B]/20 via-[#D8A928]/40 to-[#F26A4B]/20" />

      <div className="max-w-xl mx-auto text-center">
        <div className="divider-floral mb-8">
          <span className="font-cormorant text-2xl text-[#D8A928] italic">✦</span>
        </div>

        <p className="font-cormorant text-xl md:text-2xl leading-relaxed text-[#2a2a2a] font-light italic">
          "Nos complace anunciar nuestro matrimonio y queremos compartir este día tan especial contigo."
        </p>

        <div className="mt-8 flex justify-center">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#C93A8B] to-transparent" />
        </div>
      </div>
    </SectionWrapper>
  )
}
