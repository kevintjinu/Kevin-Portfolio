import './globals.css'
import type { Metadata } from 'next'
import Background from '@/components/Background'

export const metadata: Metadata = {
  title: "Kevin’s RPG Portfolio",
  description: "Story-mode portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    
      <body className="relative min-h-screen overflow-x-hidden bg-black text-white">

        {/* animated background */}
        <Background />

        {/* site content */}
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  )
}
