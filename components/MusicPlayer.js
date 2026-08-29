'use client'
import { useState, useRef, useEffect } from 'react'

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false)
  const [visible, setVisible] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  const toggle = () => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(() => {})
    }
    setPlaying(!playing)
  }

  return (
    <>
      {/* 
        🎵 MÚSICA: Coloca el archivo MP3 en /public/music/cancion.mp3
        Fonseca - En vivo y En Directo
      */}
      <audio ref={audioRef} loop>
        <source src="/music/cancion.mp3" type="audio/mpeg" />
      </audio>

      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <button
          onClick={toggle}
          className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-xl shadow-[#C93A8B]/30 transition-all duration-300 hover:scale-110 hover:shadow-[#C93A8B]/50"
          style={{ background: 'linear-gradient(135deg, #C93A8B, #F26A4B)' }}
          aria-label={playing ? 'Pausar música' : 'Reproducir música'}
          title="Fonseca - En vivo y En Directo"
        >
          {/* Pulse ring when playing */}
          {playing && (
            <span className="absolute inset-0 rounded-full animate-ping" style={{ background: 'rgba(201,58,139,0.25)' }} />
          )}
          {playing ? (
            <svg className="w-5 h-5 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
              <rect x="6" y="4" width="4" height="16" rx="1"/>
              <rect x="14" y="4" width="4" height="16" rx="1"/>
            </svg>
          ) : (
            <svg className="w-5 h-5 text-white relative z-10 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>
        <p className="text-center text-[10px] font-inter text-[#3E5B3A] mt-1.5 opacity-70 tracking-wide">
          {playing ? '♪ Sonando' : '♪ Música'}
        </p>
      </div>
    </>
  )
}
