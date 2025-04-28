import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "GVServices - Soluciones Tecnológicas Innovadoras",
  description: "Desarrollo de software, optimización de procesos y soluciones digitales hechas para ti",
  generator: 'gvservices'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
