'use client'
import { useState, useEffect } from 'react'
import SectionWrapper from './SectionWrapper'

export default function Countdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    // Boda: 27-02-2027 18:00 hora Chile (UTC-3)
    const target = new Date('2027-02-27T18:00:00-03:00')

    const update = () => {
      const now = new Date()
      const diff = target - now
      if (diff <= 0) {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }
      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { value: time.days, label: 'días' },
    { value: time.hours, label: 'horas' },
    { value: time.minutes, label: 'minutos' },
    { value: time.seconds, label: 'segundos' },
  ]

  return (
    <SectionWrapper id="countdown" className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-inter text-xs tracking-[0.3em] uppercase text-[#045490] mb-3">Cada vez queda menos</p>
        <h2 className="font-playfair text-3xl md:text-4xl text-[#273462] mb-10">para el gran día</h2>

        <div className="grid grid-cols-4 gap-3 md:gap-6">
          {units.map(({ value, label }) => (
            <div key={label} className="relative">
              <div className="bg-white rounded-2xl shadow-sm border border-[#84B7CE]/30 py-5 px-2 md:py-7 md:px-4">
                <span className="font-playfair text-4xl md:text-6xl font-bold text-[#273462] tabular-nums leading-none">
                  {String(value).padStart(2, '0')}
                </span>
              </div>
              <p className="font-inter text-[10px] md:text-xs tracking-[0.15em] uppercase text-[#045490] mt-2 opacity-80">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="divider-floral mt-10">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFF08C" opacity="0.9" stroke="#045490" strokeWidth="0.5">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>
      </div>
    </SectionWrapper>
  )
}
