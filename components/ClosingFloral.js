// Franja floral decorativa (foto real, fondo transparente) que enmarca la
// invitación: arriba de todo (dada vuelta 180°) y antes del cierre.
export default function ClosingFloral({ flip = false }) {
  return (
    <div className="w-full overflow-hidden pointer-events-none select-none">
      <img
        src="/images/floral-final.png"
        alt=""
        aria-hidden="true"
        className={`w-full h-auto ${flip ? 'rotate-180' : ''}`}
      />
    </div>
  )
}
