import InvitationContent from '@/components/InvitationContent'

export default function Home() {
  // Página raíz: invitación genérica, sin invitado identificado por slug.
  // Los invitados reales deben entrar por su enlace personal: /invitacion/tu-slug
  return <InvitationContent guest={null} />
}
