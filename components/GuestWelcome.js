import SectionWrapper from './SectionWrapper'

// guest = { slug, invitationName, guests: [...] } | null
export default function GuestWelcome({ guest }) {
  return (
    <SectionWrapper className="py-16 px-6">
      <div className="max-w-xl mx-auto">
        <div className="relative overflow-hidden p-8 md:p-10 rounded-[2rem] border border-[#FFF08C]/70 bg-white/90 text-center shadow-sm">
          <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-[#84B7CE]/20 blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-28 h-28 rounded-full bg-[#FFF08C]/30 blur-2xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#273462]/10 mb-5">
              <svg className="w-7 h-7 text-[#273462]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7-3a3 3 0 1 1 0 6m4 7v-2a4 4 0 0 0-3-3.87" />
              </svg>
            </div>

            <p className="font-inter text-[10px] tracking-[0.25em] uppercase text-[#045490] mb-3">
              Invitación personalizada
            </p>

            {guest ? (
              <>
                <h3 className="font-playfair text-2xl md:text-3xl text-[#22283f] mb-4">
                  {guest.invitationName}
                </h3>
                <p className="font-cormorant text-lg md:text-xl text-[#22283f] leading-relaxed italic opacity-80 mb-5">
                  Esta invitación incluye a:
                </p>
                <ul className="inline-flex flex-col gap-1">
                  {guest.guests.map((name) => (
                    <li key={name} className="font-cormorant text-lg text-[#273462]">
                      {name}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <h3 className="font-playfair text-2xl md:text-3xl text-[#22283f] mb-4">
                  Con mucho cariño
                </h3>
                <p className="font-cormorant text-lg md:text-xl text-[#22283f] leading-relaxed italic opacity-80">
                  Esta invitación es personal e intransferible. Ingresa mediante el enlace que recibiste para ver tu invitación y confirmar tu asistencia.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
