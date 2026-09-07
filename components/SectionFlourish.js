'use client'
import { useEffect, useRef, useState } from 'react'

// Guirnalda real (foto) que funciona como DIVISOR entre secciones — aparece
// con un fundido suave al entrar en pantalla al hacer scroll.
export default function SectionFlourish() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.4 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="flex justify-center py-2 select-none overflow-hidden">
      <img
        src="/images/floral-garland.png"
        alt=""
        aria-hidden="true"
        className={`w-[85%] max-w-md md:max-w-xl h-auto transition-all duration-700 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      />
    </div>
  )
}
