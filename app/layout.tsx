import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import ClientWrapper from "@/components/client-wrapper";
import type { Metadata, Viewport } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GVSlabs - Soluciones Tecnológicas",
  description: "Transformando ideas en soluciones tecnológicas innovadoras",
  keywords:
    "desarrollo web, aplicaciones móviles, software empresarial, servicios digitales",
  authors: [{ name: "GVSlabs" }],
  creator: "GVSlabs",
  publisher: "GVSlabs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://gvslabs.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GVSlabs Landing",
    description: "Servicios digitales de alta calidad para impulsar tu negocio",
    url: "https://gvslabs.com",
    siteName: "GVSlabs",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GVSlabs",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GVSlabs - Soluciones Tecnológicas Innovadoras",
    description:
      "Desarrollo de software, optimización de procesos y soluciones digitales hechas para ti",
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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#007BFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#007BFF" />
        <meta name="msapplication-TileColor" content="#007BFF" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={inter.className}>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
