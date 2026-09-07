// Franja floral decorativa (foto real) antes del cierre de la invitación.
// mix-blend-mode "multiply" disuelve el fondo claro de la foto contra el
// fondo crema de la web, para que no se note el recorte del archivo.
export default function ClosingFloral() {
  return (
    <div className="w-full overflow-hidden pointer-events-none select-none bg-[#FBFAF6]">
      <img
        src="/images/floral-final.png"
        alt=""
        aria-hidden="true"
        className="w-full h-auto"
        style={{ mixBlendMode: 'multiply' }}
      />
    </div>
  )
}
