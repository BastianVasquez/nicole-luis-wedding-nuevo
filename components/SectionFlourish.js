'use client'
import { useEffect, useRef, useState } from 'react'

// Ramillete decorativo real (foto, no ilustración) que aparece con un fundido
// suave justo cuando entra en pantalla al hacer scroll — va ENTRE secciones.
// Tamaño chico a propósito para no sobrecargar la página.
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
    <div ref={ref} className="flex justify-center py-1 select-none overflow-hidden">
      <img
        src="/images/floral-garland.png"
        alt=""
        aria-hidden="true"
        className={`w-40 md:w-48 h-auto transition-all duration-700 ease-out ${
          visible ? 'opacity-90 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      />
    </div>
  )
}
