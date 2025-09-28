'use client'

import { useEffect, useState } from 'react'
import ClientLayout from './client-layout'

interface ClientWrapperProps {
  children: React.ReactNode
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return <ClientLayout>{children}</ClientLayout>
}