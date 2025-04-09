import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BACO',
  description: 'Presentacio 2025 Griona',
  generator: 'V 1.3',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
