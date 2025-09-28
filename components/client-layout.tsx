'use client'

import { useEffect, useState } from 'react'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'
import WhatsAppFloat from '@/components/whatsapp-float'

interface ClientLayoutProps {
  children: React.ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen pt-16 md:pt-26">
        {children}
      </div>
    )
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Header />
      <main className="min-h-screen pt-16 md:pt-26">
        {children}
      </main>
      <WhatsAppFloat />
    </ThemeProvider>
  )
}