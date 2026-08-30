export default function FloralDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0" aria-hidden="true">
      <svg className="absolute -left-24 top-[10%] w-72 md:w-96 opacity-80" viewBox="0 0 320 420" fill="none">
        <g opacity=".9">
          <path d="M128 410C145 320 128 225 74 125" stroke="#4F7D3A" strokeWidth="4" strokeLinecap="round"/>
          <path d="M125 315C78 285 48 249 30 208" stroke="#6FAE45" strokeWidth="3" strokeLinecap="round"/>
          <path d="M136 267C178 235 201 202 213 159" stroke="#4F7D3A" strokeWidth="3" strokeLinecap="round"/>
          <ellipse cx="67" cy="264" rx="15" ry="34" transform="rotate(-52 67 264)" fill="#8BC34A"/>
          <ellipse cx="154" cy="251" rx="14" ry="32" transform="rotate(51 154 251)" fill="#5D8F3A"/>
          <ellipse cx="88" cy="331" rx="13" ry="31" transform="rotate(-62 88 331)" fill="#6FAE45"/>
          <ellipse cx="128" cy="211" rx="12" ry="29" transform="rotate(48 128 211)" fill="#8BC34A"/>
        </g>
        <g transform="translate(26 56)">
          <ellipse cx="58" cy="25" rx="23" ry="39" fill="#045490"/>
          <ellipse cx="31" cy="48" rx="39" ry="23" transform="rotate(-12 31 48)" fill="#84B7CE"/>
          <ellipse cx="73" cy="62" rx="38" ry="23" transform="rotate(12 73 62)" fill="#273462"/>
          <ellipse cx="50" cy="82" rx="24" ry="39" fill="#FFFFFF"/>
          <circle cx="52" cy="53" r="14" fill="#FFF08C"/>
          <circle cx="52" cy="53" r="5" fill="#F4D64A"/>
        </g>
        <g transform="translate(128 132) scale(.7)">
          <ellipse cx="58" cy="25" rx="23" ry="39" fill="#273462"/>
          <ellipse cx="31" cy="48" rx="39" ry="23" transform="rotate(-12 31 48)" fill="#84B7CE"/>
          <ellipse cx="73" cy="62" rx="38" ry="23" transform="rotate(12 73 62)" fill="#045490"/>
          <ellipse cx="50" cy="82" rx="24" ry="39" fill="#FFFFFF"/>
          <circle cx="52" cy="53" r="14" fill="#FFF08C"/>
        </g>
      </svg>

      <svg className="absolute -right-28 bottom-[8%] w-80 md:w-[28rem] opacity-80" viewBox="0 0 360 420" fill="none">
        <path d="M239 420C223 323 246 234 304 136" stroke="#4F7D3A" strokeWidth="4" strokeLinecap="round"/>
        <path d="M242 326C286 293 315 257 331 217" stroke="#6FAE45" strokeWidth="3" strokeLinecap="round"/>
        <path d="M227 271C186 235 167 198 159 155" stroke="#4F7D3A" strokeWidth="3" strokeLinecap="round"/>
        <ellipse cx="286" cy="286" rx="15" ry="35" transform="rotate(53 286 286)" fill="#8BC34A"/>
        <ellipse cx="211" cy="253" rx="14" ry="32" transform="rotate(-48 211 253)" fill="#5D8F3A"/>
        <ellipse cx="272" cy="345" rx="13" ry="31" transform="rotate(62 272 345)" fill="#6FAE45"/>

        <g transform="translate(248 44)">
          <ellipse cx="58" cy="25" rx="23" ry="39" fill="#84B7CE"/>
          <ellipse cx="31" cy="48" rx="39" ry="23" transform="rotate(-12 31 48)" fill="#045490"/>
          <ellipse cx="73" cy="62" rx="38" ry="23" transform="rotate(12 73 62)" fill="#273462"/>
          <ellipse cx="50" cy="82" rx="24" ry="39" fill="#FFFFFF"/>
          <circle cx="52" cy="53" r="14" fill="#FFF08C"/>
        </g>
        <g transform="translate(150 102) scale(.75)">
          <ellipse cx="58" cy="25" rx="23" ry="39" fill="#045490"/>
          <ellipse cx="31" cy="48" rx="39" ry="23" transform="rotate(-12 31 48)" fill="#84B7CE"/>
          <ellipse cx="73" cy="62" rx="38" ry="23" transform="rotate(12 73 62)" fill="#273462"/>
          <ellipse cx="50" cy="82" rx="24" ry="39" fill="#FFFFFF"/>
          <circle cx="52" cy="53" r="14" fill="#FFF08C"/>
        </g>
      </svg>

      <div className="absolute top-[30%] right-[8%] w-2 h-2 rounded-full bg-[#FFF08C] shadow-[0_0_0_5px_rgba(255,240,140,.25)]" />
      <div className="absolute top-[55%] left-[9%] w-1.5 h-1.5 rounded-full bg-[#84B7CE]" />
      <div className="absolute top-[72%] right-[13%] w-2 h-2 rounded-full bg-[#045490]" />
    </div>
  )
}
