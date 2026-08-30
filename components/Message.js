import SectionWrapper from './SectionWrapper'

export default function Message() {
  return (
    <SectionWrapper className="py-16 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#273462]/20 via-[#FFF08C]/60 to-[#045490]/20" />

      <div className="max-w-xl mx-auto text-center">
        <div className="divider-floral mb-8">
          <span className="font-cormorant text-2xl text-[#045490] italic">✦</span>
        </div>

        <p className="font-cormorant text-xl md:text-2xl leading-relaxed text-[#22283f] font-light italic">
          "Nos complace anunciar nuestro matrimonio y queremos compartir este día tan especial contigo."
        </p>

        <div className="mt-8 flex justify-center">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#273462] to-transparent" />
        </div>
      </div>
    </SectionWrapper>
  )
}
