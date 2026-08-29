'use client'
import { useState } from 'react'
import SectionWrapper from './SectionWrapper'

export default function RSVP() {
  const [form, setForm] = useState({ nombre: '', asistira: '', cantidad: '1', mensaje: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simula envío (sin backend por ahora)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  const inputClass = "w-full px-4 py-3 rounded-xl border border-[#D8A928]/30 bg-white font-inter text-sm text-[#2a2a2a] placeholder-[#2a2a2a]/30 focus:outline-none focus:border-[#C93A8B]/50 focus:ring-2 focus:ring-[#C93A8B]/10 transition-all duration-200"

  return (
    <SectionWrapper className="py-20 px-6 bg-white">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-10">
          <p className="font-inter text-xs tracking-[0.3em] uppercase text-[#3E5B3A] mb-2">Confirmar asistencia</p>
          <h2 className="font-playfair text-3xl md:text-4xl text-[#2a2a2a] mb-2">RSVP</h2>
          <p className="font-cormorant text-lg text-[#2a2a2a] opacity-60 italic">
            Antes del 20 de mayo de 2026
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-12 px-6 rounded-3xl" style={{ background: 'linear-gradient(135deg, #C93A8B08, #F26A4B08)' }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ background: 'linear-gradient(135deg, #C93A8B, #F26A4B)' }}>
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
              </svg>
            </div>
            <h3 className="font-playfair text-2xl text-[#2a2a2a] mb-2">¡Gracias, {form.nombre}!</h3>
            <p className="font-cormorant text-lg text-[#2a2a2a] opacity-70 italic">
              Hemos recibido tu respuesta. ¡Nos vemos pronto!
            </p>
            <div className="flex justify-center gap-2 mt-4">
              <div className="h-1 w-8 rounded-full bg-[#C93A8B] opacity-40" />
              <div className="h-1 w-4 rounded-full bg-[#D8A928] opacity-60" />
              <div className="h-1 w-8 rounded-full bg-[#F26A4B] opacity-40" />
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nombre */}
            <div>
              <label className="font-inter text-xs tracking-[0.15em] uppercase text-[#3E5B3A] mb-1.5 block">
                Nombre completo
              </label>
              <input
                name="nombre"
                required
                value={form.nombre}
                onChange={handleChange}
                placeholder="Tu nombre"
                className={inputClass}
              />
            </div>

            {/* Asistirá */}
            <div>
              <label className="font-inter text-xs tracking-[0.15em] uppercase text-[#3E5B3A] mb-1.5 block">
                ¿Asistirás?
              </label>
              <div className="grid grid-cols-2 gap-3">
                {['Sí, asistiré', 'No podré asistir'].map((opt) => (
                  <label
                    key={opt}
                    className={`relative flex items-center justify-center py-3 px-4 rounded-xl border cursor-pointer transition-all duration-200 font-inter text-sm ${
                      form.asistira === opt
                        ? 'border-[#C93A8B] bg-[#C93A8B]/5 text-[#C93A8B]'
                        : 'border-[#D8A928]/30 text-[#2a2a2a]/60 hover:border-[#C93A8B]/30'
                    }`}
                  >
                    <input
                      type="radio"
                      name="asistira"
                      value={opt}
                      required
                      onChange={handleChange}
                      className="sr-only"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>


            {/* Mensaje */}
            <div>
              <label className="font-inter text-xs tracking-[0.15em] uppercase text-[#3E5B3A] mb-1.5 block">
                Mensaje (opcional)
              </label>
              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                rows={3}
                placeholder="Un mensaje para los novios..."
                className={inputClass + ' resize-none'}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl font-inter text-sm tracking-[0.2em] uppercase text-white transition-all duration-300 disabled:opacity-70 hover:shadow-xl hover:shadow-[#C93A8B]/30 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #C93A8B, #F26A4B)' }}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                  Enviando...
                </span>
              ) : 'Confirmar asistencia'}
            </button>
          </form>
        )}
      </div>
    </SectionWrapper>
  )
}
