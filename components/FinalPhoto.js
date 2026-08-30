'use client'
import { useState } from 'react'
import SectionWrapper from './SectionWrapper'

export default function FinalPhoto() {
  const [loaded, setLoaded] = useState(false)
  const [errored, setErrored] = useState(false)

  return (
    <SectionWrapper className="py-16 px-6 bg-white">
      <div className="max-w-md mx-auto">
        {/*
          📸 FOTO FINAL: reemplaza /public/images/foto-final.jpg por la
          imagen definitiva (mismo nombre de archivo) para que se actualice
          automáticamente aquí.
        */}
        <div
          className="relative w-full rounded-3xl overflow-hidden shadow-xl shadow-[#273462]/15 bg-[#FBFAF6]"
          style={{ aspectRatio: '4/5' }}
        >
          {!errored && (
            <img
              src="/images/foto-final.jpg"
              alt="Nicole y Luis"
              className="absolute inset-0 w-full h-full object-cover"
              onLoad={() => setLoaded(true)}
              onError={() => setErrored(true)}
            />
          )}

          {/* Placeholder visible solo si la imagen /images/foto-final.jpg todavía no existe */}
          {!loaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <svg className="w-14 h-14 opacity-25 mb-3" viewBox="0 0 24 24" fill="none" stroke="#273462" strokeWidth="1.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"/>
              </svg>
              <p className="font-cormorant text-sm text-[#273462] opacity-40 italic px-4 text-center">
                Reemplazar en /public/images/foto-final.jpg
              </p>
            </div>
          )}
        </div>
      </div>
    </SectionWrapper>
  )
}
