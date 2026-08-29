import SectionWrapper from './SectionWrapper'

const events = [
  {
    hora: '17:00',
    titulo: 'Ceremonia',
    desc: 'Celebración religiosa',
    icon: '💒',
    color: '#C93A8B',
  },
  {
    hora: '18:30',
    titulo: 'Cóctel',
    desc: 'Bienvenida y brindis',
    icon: '🥂',
    color: '#F26A4B',
  },
  {
    hora: '20:00',
    titulo: 'Cena',
    desc: 'Banquete de celebración',
    icon: '🍽️',
    color: '#D8A928',
  },
  {
    hora: '22:00',
    titulo: 'Fiesta',
    desc: 'Pista de baile y música',
    icon: '🎶',
    color: '#3E5B3A',
  },
  {
    hora: '03:00',
    titulo: 'Fin',
    desc: 'Hasta pronto',
    icon: '🌙',
    color: '#2a2a2a',
  },
]

export default function Itinerary() {
  return (
    <SectionWrapper className="py-20 px-6">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-12">
          <p className="font-inter text-xs tracking-[0.3em] uppercase text-[#3E5B3A] mb-2">Programa</p>
          <h2 className="font-playfair text-3xl md:text-4xl text-[#2a2a2a]">Itinerario</h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-4 bottom-4 w-px bg-gradient-to-b from-[#C93A8B] via-[#D8A928] to-[#3E5B3A] opacity-25 md:left-1/2" />

          <div className="space-y-6">
            {events.map((event, i) => (
              <div
                key={event.titulo}
                className={`relative flex items-center gap-4 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div
                  className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-lg md:mx-auto"
                  style={{ background: `${event.color}15`, border: `2px solid ${event.color}30` }}
                >
                  <span>{event.icon}</span>
                </div>

                {/* Card */}
                <div
                  className={`flex-1 md:max-w-[calc(50%-3rem)] bg-white rounded-xl p-4 shadow-sm border border-[#D8A928]/15 hover:shadow-md hover:border-[#D8A928]/30 transition-all duration-300 ${i % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-inter text-[10px] tracking-[0.2em] uppercase mb-0.5" style={{ color: event.color }}>
                        {event.hora} hrs
                      </p>
                      <p className="font-playfair text-lg text-[#2a2a2a]">{event.titulo}</p>
                      <p className="font-inter text-xs text-[#2a2a2a] opacity-50 mt-0.5">{event.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
