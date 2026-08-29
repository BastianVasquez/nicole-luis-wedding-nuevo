import SectionWrapper from './SectionWrapper'

export default function DressCode() {
  return (
    <SectionWrapper className="py-20 px-6 bg-white relative overflow-hidden">
      <div className="max-w-xl mx-auto text-center relative z-10">
        <p className="font-inter text-xs tracking-[0.3em] uppercase text-[#4F7D3A] mb-2">Indumentaria</p>
        <h2 className="font-playfair text-3xl md:text-4xl text-[#2a2a2a] mb-10">Código de vestimenta</h2>

        <div className="relative p-8 md:p-10 rounded-[2rem] border border-[#D4A017]/30 overflow-hidden bg-[#FFFDF8] shadow-sm">
          <div className="absolute inset-0 pointer-events-none opacity-70">
            <div className="absolute -top-16 -right-12 w-36 h-36 rounded-full bg-[#FF4F91]/10 blur-3xl" />
            <div className="absolute -bottom-16 -left-12 w-36 h-36 rounded-full bg-[#FF7043]/10 blur-3xl" />
          </div>

          {/* Ilustración vectorial de pareja semi-formal */}
          <div className="relative mx-auto mb-7 w-full max-w-[310px] h-[230px]">
            <svg viewBox="0 0 320 240" className="w-full h-full" fill="none" aria-label="Ilustración de una pareja vestida de manera semi-formal">
              {/* Fondo floral */}
              <path d="M24 216C51 188 67 154 70 120" stroke="#4F7D3A" strokeWidth="3" strokeLinecap="round"/>
              <ellipse cx="45" cy="180" rx="9" ry="23" transform="rotate(-48 45 180)" fill="#8BC34A"/>
              <ellipse cx="65" cy="154" rx="8" ry="20" transform="rotate(48 65 154)" fill="#6FAE45"/>
              <circle cx="71" cy="113" r="16" fill="#E91E63"/>
              <circle cx="55" cy="124" r="12" fill="#FF7043"/>
              <circle cx="84" cy="126" r="11" fill="#FFB300"/>
              <circle cx="70" cy="123" r="6" fill="#FFD54F"/>

              {/* Mujer */}
              <circle cx="205" cy="55" r="23" fill="#F2C7AE"/>
              <path d="M183 55C184 30 225 26 229 57C222 47 214 45 205 45C197 45 190 49 183 55Z" fill="#4B332B"/>
              <path d="M177 105C183 88 191 82 205 82C219 82 228 88 234 105L253 202H158L177 105Z" fill="#E91E63"/>
              <path d="M187 94L205 122L223 94" stroke="#FFB300" strokeWidth="3"/>
              <path d="M178 105L160 205M233 105L251 205" stroke="#E91E63" strokeWidth="4" strokeLinecap="round"/>
              <path d="M193 122L181 201M217 122L229 201" stroke="#F23B78" strokeWidth="3" strokeLinecap="round"/>
              <path d="M183 205L170 220M235 205L248 220" stroke="#4B332B" strokeWidth="5" strokeLinecap="round"/>
              <path d="M177 108L161 137M232 108L247 136" stroke="#F2C7AE" strokeWidth="7" strokeLinecap="round"/>

              {/* Hombre */}
              <circle cx="117" cy="61" r="23" fill="#C88F6D"/>
              <path d="M94 60C95 35 134 30 140 61C131 48 105 47 94 60Z" fill="#2F2927"/>
              <path d="M94 101L83 190H151L140 101C133 91 125 86 117 86C108 86 101 91 94 101Z" fill="#F7F3EA"/>
              <path d="M99 96L117 115L135 96" stroke="#E91E63" strokeWidth="5"/>
              <path d="M117 115V184" stroke="#D4A017" strokeWidth="3"/>
              <path d="M91 105L74 185M143 105L159 185" stroke="#F7F3EA" strokeWidth="11" strokeLinecap="round"/>
              <path d="M76 184L71 219M157 184L162 219" stroke="#2F2927" strokeWidth="7" strokeLinecap="round"/>
              <path d="M78 219H64M160 219H174" stroke="#2F2927" strokeWidth="5" strokeLinecap="round"/>
              <path d="M92 105L83 132L73 142" stroke="#C88F6D" strokeWidth="7" strokeLinecap="round"/>
              <path d="M142 105L151 132L160 142" stroke="#C88F6D" strokeWidth="7" strokeLinecap="round"/>

              {/* Flor pequeña */}
              <g transform="translate(264 166)">
                <path d="M0 54C9 35 14 19 15 0" stroke="#4F7D3A" strokeWidth="3" strokeLinecap="round"/>
                <ellipse cx="6" cy="30" rx="6" ry="15" transform="rotate(-48 6 30)" fill="#8BC34A"/>
                <ellipse cx="17" cy="20" rx="6" ry="14" transform="rotate(50 17 20)" fill="#6FAE45"/>
                <circle cx="15" cy="0" r="9" fill="#FF4F91"/>
                <circle cx="5" cy="5" r="7" fill="#FF7043"/>
                <circle cx="24" cy="7" r="7" fill="#FFB300"/>
                <circle cx="15" cy="5" r="4" fill="#FFD54F"/>
              </g>
            </svg>
          </div>

          <p className="font-playfair text-2xl md:text-3xl text-[#2a2a2a] mb-4">Semi formal</p>
          <div className="h-px w-16 bg-[#D4A017] mx-auto mb-4 opacity-70" />
          <p className="font-cormorant text-lg text-[#2a2a2a] opacity-70 italic">
            El blanco queda reservado para la novia.
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
