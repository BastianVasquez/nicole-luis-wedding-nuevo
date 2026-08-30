import SectionWrapper from './SectionWrapper'

const events = [
  {
    hora: '18:00',
    titulo: 'Ceremonia',
    desc: 'Celebración religiosa',
    icon: '💒',
    color: '#273462',
  },
  {
    hora: '19:00',
    titulo: 'Cóctel',
    desc: 'Bienvenida y brindis',
    icon: '🥂',
    color: '#045490',
  },
  {
    hora: '20:45',
    titulo: 'Cena',
    desc: 'Banquete de celebración',
    icon: '🍽️',
    color: '#84B7CE',
  },
  {
    hora: '23:00',
    titulo: 'Fiesta',
    desc: 'Pista de baile y música',
    icon: '🎶',
    color: '#045490',
  },
  {
    hora: '03:00',
    titulo: 'Fin',
    desc: 'Hasta pronto',
    icon: '🌙',
    color: '#273462',
  },
]

export default function Itinerary() {
  return (
    <SectionWrapper className="py-20 px-6">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-12">
          <p className="font-inter text-xs tracking-[0.3em] uppercase text-[#045490] mb-2">Programa</p>
          <h2 className="font-playfair text-3xl md:text-4xl text-[#273462]">Itinerario</h2>
        </div>

        <div className="relative">
          {/* Vertical line — SIEMPRE detrás de los círculos (z-0) */}
          <div className="absolute z-0 left-8 top-4 bottom-4 w-px bg-gradient-to-b from-[#273462] via-[#84B7CE] to-[#045490] opacity-30 md:left-1/2" />

          <div className="relative z-10 space-y-6">
            {events.map((event, i) => (
              <div
                key={event.titulo}
                className={`relative flex items-center gap-4 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot — por encima de la línea */}
                <div
                  className="relative z-20 flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-lg md:mx-auto bg-white"
                  style={{ border: `2px solid ${event.color}40` }}
                >
                  <span>{event.icon}</span>
                </div>

                {/* Card */}
                <div
                  className={`relative z-10 flex-1 md:max-w-[calc(50%-3rem)] bg-white rounded-xl p-4 shadow-sm border border-[#84B7CE]/25 hover:shadow-md hover:border-[#045490]/30 transition-all duration-300 ${i % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-inter text-[10px] tracking-[0.2em] uppercase mb-0.5" style={{ color: event.color }}>
                        {event.hora} hrs
                      </p>
                      <p className="font-playfair text-lg text-[#22283f]">{event.titulo}</p>
                      <p className="font-inter text-xs text-[#22283f] opacity-50 mt-0.5">{event.desc}</p>
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
