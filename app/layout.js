import './globals.css'

export const metadata = {
  title: 'Nicole & Luis — 09·11·2026',
  description: 'Con Dios como guía, comenzamos nuestro camino juntos.',
  openGraph: {
    title: 'Nicole & Luis — Nuestra Boda',
    description: 'Con Dios como guía, comenzamos nuestro camino juntos.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="grain">{children}</body>
    </html>
  )
}
