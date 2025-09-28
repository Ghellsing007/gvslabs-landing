'use client'

import dynamic from 'next/dynamic'

const ClientLayout = dynamic(() => import('./client-layout'), { ssr: false })

interface ClientWrapperProps {
  children: React.ReactNode
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  if (typeof window === 'undefined') {
    return <div>{children}</div> // Renderizar solo children durante prerendering
  }

  return <ClientLayout>{children}</ClientLayout>
}