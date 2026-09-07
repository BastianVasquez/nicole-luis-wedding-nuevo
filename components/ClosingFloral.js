// Franja floral decorativa (foto real, fondo transparente) que enmarca la
// invitación: arriba de todo (dada vuelta 180°) y antes del cierre.
//
// La versión de arriba ("flip") se recorta visualmente con CSS para
// eliminar el espacio vacío que queda debajo de las flores al girar la
// imagen, así no se aleja tanto del saludo.
export default function ClosingFloral({ flip = false }) {
  if (flip) {
    return (
      <div className="w-full overflow-hidden pointer-events-none select-none" style={{ maxHeight: 150 }}>
        <img
          src="/images/floral-final.png"
          alt=""
          aria-hidden="true"
          className="w-full h-auto rotate-180 object-cover"
          style={{ objectPosition: 'top' }}
        />
      </div>
    )
  }

  return (
    <div className="w-full overflow-hidden pointer-events-none select-none">
      <img
        src="/images/floral-final.png"
        alt=""
        aria-hidden="true"
        className="w-full h-auto"
      />
    </div>
  )
}
