import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GVServices - Soluciones Tecnológicas",
  description: "Transformando ideas en soluciones tecnológicas innovadoras",
  keywords: "desarrollo web, aplicaciones móviles, software empresarial, servicios digitales",
  authors: [{ name: "GVServices" }],
  creator: "GVServices",
  publisher: "GVServices",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://gvservices.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GVServices Landing",
    description: "Servicios digitales de alta calidad para impulsar tu negocio",
    url: "https://gvservices.com",
    siteName: "GVServices",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GVServices",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GVServices - Soluciones Tecnológicas Innovadoras",
    description: "Desarrollo de software, optimización de procesos y soluciones digitales hechas para ti",
    images: ["/twitter-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#007BFF",
      },
    ],
  },
  manifest: "/site.webmanifest",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#007BFF" />
        <meta name="msapplication-TileColor" content="#007BFF" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
