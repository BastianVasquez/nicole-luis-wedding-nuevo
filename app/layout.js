import './globals.css'

export const metadata = {
  title: 'Nicole & Luis — 27 de febrero de 2027',
  description: 'Te invitamos a celebrar junto a nosotros nuestro matrimonio.',
  openGraph: {
    title: 'Nicole & Luis — 27 de febrero de 2027',
    description: 'Te invitamos a celebrar junto a nosotros nuestro matrimonio.',
    type: 'website',
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="grain">{children}</body>
    </html>
  )
}
