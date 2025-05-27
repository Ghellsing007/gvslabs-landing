"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Menu, X, Moon, Sun, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Products", href: "#products" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
]

const Logo = () => (
  <Link href="#" className="-m-1.5 p-1.5">
    <span className="sr-only">GVServices</span>
    <div className="flex items-center">
      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-500 dark:from-blue-400 dark:to-emerald-300 bg-clip-text text-transparent">
        GVServices
      </span>
    </div>
  </Link>
)

const NavigationLinks = () => (
  <div className="hidden md:flex md:items-center md:gap-x-6">
    {navigation.map((item) => (
      <Link
        key={item.name}
        href={item.href}
        className="text-sm font-semibold leading-6 text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        {item.name}
      </Link>
    ))}
  </div>
)

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full"
    >
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  )
}

const LanguageToggle = () => {
  const [language, setLanguage] = useState("en")

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-5 w-5 text-slate-700 dark:text-slate-300" />
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage(language === "en" ? "es" : "en")}
        aria-label="Toggle language"
        className="rounded-full px-3"
      >
        <span className="text-sm font-medium">{language.toUpperCase()}</span>
      </Button>
    </div>
  )
}

const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { theme, setTheme } = useTheme()
  const [language, setLanguage] = useState("en")

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm">
      <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-slate-900 px-6 py-6 sm:max-w-sm">
        <div className="flex items-center justify-between">
          <Logo />
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-slate-700 dark:text-slate-200"
            onClick={onClose}
          >
            <span className="sr-only">Close menu</span>
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-200 dark:divide-gray-700">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800"
                  onClick={onClose}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="py-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Language</span>
                <Button variant="ghost" size="sm" onClick={() => setLanguage(language === "en" ? "es" : "en")} className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <span>{language === "en" ? "English" : "Español"}</span>
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Theme</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex items-center gap-2"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun className="h-4 w-4" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="h-4 w-4" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </Button>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white">
                Request a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
      const sections = navigation.map(item => item.href.replace("#", ""))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-sm" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex items-center">
          <Logo />
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <NavigationLinks />
        <div className="hidden md:flex md:items-center md:gap-x-6">
          <LanguageToggle />
          <ThemeToggle />
          <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white">
            Request a Consultation
          </Button>
        </div>
      </nav>
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  )
}
