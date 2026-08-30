import InvitationContent from '@/components/InvitationContent'
import InvalidSlug from '@/components/InvalidSlug'
import { getGuestBySlug, getAllSlugs } from '@/data/guests'

// Genera las páginas de cada invitado en el build (rutas estáticas conocidas).
export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

// Evita que Next.js intente renderizar slugs desconocidos como página 404 genérica:
// los manejamos nosotros mismos mostrando un mensaje elegante.
export const dynamicParams = true

export async function generateMetadata({ params }) {
  const guest = getGuestBySlug(params.slug)
  const name = guest?.invitationName || 'Invitación'
  return {
    title: `${name} — Nicole & Luis`,
    description: 'Te invitamos a celebrar junto a nosotros nuestro matrimonio.',
    robots: { index: false, follow: false },
  }
}

export default function InvitacionPage({ params }) {
  const guest = getGuestBySlug(params.slug)

  if (!guest) {
    return <InvalidSlug />
  }

  return <InvitationContent guest={{ slug: params.slug, ...guest }} />
}
