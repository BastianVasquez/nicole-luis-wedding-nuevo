'use client'
import { useState } from 'react'
import SectionWrapper from './SectionWrapper'

// guest = { slug, invitationName, guests: [...] } | null
export default function RSVP({ guest }) {
  const [selected, setSelected] = useState([])
  const [comentarios, setComentarios] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const toggleGuest = (name) => {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (selected.length === 0) {
      setError('Selecciona al menos una persona, o indica que no podrán asistir.')
      return
    }

    setLoading(true)
    try {
      const endpoint = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL
      if (endpoint) {
        await fetch(endpoint, {
          method: 'POST',
          mode: 'no-cors', // Apps Script Web Apps no siempre exponen CORS; no-cors evita bloqueos.
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify({
            fecha: new Date().toISOString(),
            slug: guest.slug,
            invitacion: guest.invitationName,
            cupos: guest.guests.length,
            asistentes: selected,
            todosLosNombres: guest.guests,
            cantidadAsistentes: selected.length,
            estado: 'Confirmado',
            comentarios,
          }),
        })
      }
      setSubmitted(true)
    } catch (err) {
      setError('Hubo un problema al enviar tu confirmación. Intenta nuevamente o escríbenos por WhatsApp.')
    } finally {
      setLoading(false)
    }
  }

  const handleNoAttend = async () => {
    setLoading(true)
    setError('')
    try {
      const endpoint = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL
      if (endpoint) {
        await fetch(endpoint, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify({
            fecha: new Date().toISOString(),
            slug: guest.slug,
            invitacion: guest.invitationName,
            cupos: guest.guests.length,
            asistentes: [],
            todosLosNombres: guest.guests,
            cantidadAsistentes: 0,
            estado: 'No asistirá',
            comentarios,
          }),
        })
      }
      setSubmitted(true)
    } catch (err) {
      setError('Hubo un problema al enviar tu respuesta. Intenta nuevamente o escríbenos por WhatsApp.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <SectionWrapper className="py-20 px-6 bg-white">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-10">
          <p className="font-inter text-xs tracking-[0.3em] uppercase text-[#045490] mb-2">N&amp;L</p>
          <h2 className="font-playfair text-3xl md:text-4xl text-[#273462] mb-2">Confirmar Asistencia</h2>
          <p className="font-cormorant text-lg text-[#22283f] opacity-60 italic">
            Confirma tu asistencia antes del 01 de diciembre
          </p>
        </div>

        {!guest ? (
          // Sin slug: no podemos identificar cupos ni nombres — pedimos usar el link personal.
          <div className="text-center py-12 px-6 rounded-3xl" style={{ background: '#FBFAF6' }}>
            <p className="font-cormorant text-xl text-[#22283f] italic mb-6">
              Para confirmar tu asistencia, ingresa mediante el enlace personalizado que recibiste.
            </p>
            <a
              href="https://wa.me/56961788810"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-inter text-sm tracking-[0.15em] uppercase shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              style={{ background: '#045490' }}
            >
              Escribir a Nicole
            </a>
          </div>
        ) : submitted ? (
          <div className="text-center py-12 px-6 rounded-3xl" style={{ background: 'linear-gradient(135deg, #27346208, #04549008)' }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ background: 'linear-gradient(135deg, #273462, #045490)' }}>
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
              </svg>
            </div>
            <h3 className="font-playfair text-2xl text-[#22283f] mb-2">¡Gracias por confirmar tu asistencia!</h3>
            <p className="font-cormorant text-lg text-[#22283f] opacity-70 italic">
              Nos hace mucha ilusión compartir este día contigo.
            </p>
            <div className="flex justify-center gap-2 mt-4">
              <div className="h-1 w-8 rounded-full bg-[#273462] opacity-40" />
              <div className="h-1 w-4 rounded-full bg-[#FFF08C] opacity-90" />
              <div className="h-1 w-8 rounded-full bg-[#045490] opacity-40" />
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="text-center mb-2">
              <p className="font-playfair text-xl text-[#273462] mb-1">{guest.invitationName}</p>
              <p className="font-inter text-xs text-[#22283f]/50 tracking-wide">
                {guest.guests.length} {guest.guests.length === 1 ? 'cupo disponible' : 'cupos disponibles'}
              </p>
            </div>

            <div>
              <label className="font-inter text-xs tracking-[0.15em] uppercase text-[#045490] mb-2 block">
                ¿Quiénes asistirán?
              </label>
              <div className="space-y-2">
                {guest.guests.map((name) => (
                  <label
                    key={name}
                    className={`flex items-center gap-3 py-3 px-4 rounded-xl border cursor-pointer transition-all duration-200 font-inter text-sm ${
                      selected.includes(name)
                        ? 'border-[#273462] bg-[#273462]/5 text-[#273462]'
                        : 'border-[#84B7CE]/40 text-[#22283f]/70 hover:border-[#045490]/40'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selected.includes(name)}
                      onChange={() => toggleGuest(name)}
                      className="w-4 h-4 accent-[#273462]"
                    />
                    {name}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="font-inter text-xs tracking-[0.15em] uppercase text-[#045490] mb-1.5 block">
                Comentarios (opcional)
              </label>
              <textarea
                value={comentarios}
                onChange={(e) => setComentarios(e.target.value)}
                rows={3}
                placeholder="Un mensaje para los novios..."
                className="w-full px-4 py-3 rounded-xl border border-[#84B7CE]/40 bg-white font-inter text-sm text-[#22283f] placeholder-[#22283f]/30 focus:outline-none focus:border-[#273462]/60 focus:ring-2 focus:ring-[#273462]/10 transition-all duration-200 resize-none"
              />
            </div>

            {error && (
              <p className="font-inter text-xs text-[#b3261e] text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl font-inter text-sm tracking-[0.2em] uppercase text-white transition-all duration-300 disabled:opacity-70 hover:shadow-xl hover:shadow-[#273462]/30 hover:-translate-y-0.5"
              style={{ background: '#273462' }}
            >
              {loading ? 'Enviando...' : 'Confirmar asistencia'}
            </button>

            <button
              type="button"
              onClick={handleNoAttend}
              disabled={loading}
              className="w-full py-3 rounded-xl font-inter text-xs tracking-[0.15em] uppercase text-[#22283f]/60 border border-[#84B7CE]/40 hover:bg-[#FBFAF6] transition-all duration-200 disabled:opacity-70"
            >
              No podremos asistir
            </button>
          </form>
        )}
      </div>
    </SectionWrapper>
  )
}
