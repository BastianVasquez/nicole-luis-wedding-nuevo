// ============================================================================
// LISTA DE INVITADOS — ÚNICO ARCHIVO QUE NECESITAS EDITAR
// ============================================================================
// Para agregar una invitación nueva, copia un bloque, cámbiale el "slug"
// (sin espacios ni tildes, se usa en la URL) y completa el nombre de la
// invitación y los nombres de las personas invitadas.
//
// La cantidad de cupos SIEMPRE es la cantidad de nombres en "guests" — no
// hay que declararla aparte, así nunca queda desincronizada.
//
// La URL de cada invitado queda: https://tudominio.com/invitacion/EL-SLUG
//
// Ejemplos (bórralos o edítalos cuando tengas la lista real):
// ============================================================================

const guests = {
  'maria-gonzalez': {
    invitationName: 'María González',
    guests: ['María González'],
  },
  'juan-perez': {
    invitationName: 'Familia Pérez',
    guests: ['Juan Pérez', 'Ana Pérez', 'Pedro Pérez'],
  },
  'familia-rojas': {
    invitationName: 'Familia Rojas',
    guests: ['Iván Rojas', 'Sandra Pérez'],
  },
}

export default guests

export function getGuestBySlug(slug) {
  if (!slug) return null
  return guests[slug] || null
}

export function getAllSlugs() {
  return Object.keys(guests)
}
