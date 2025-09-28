"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Moon,
  Sun,
  Globe,
  ArrowRight,
  Server,
  Code2,
  Database,
  Zap,
  Shield,
  Wrench,
  Mail,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Productos", href: "/#services", hasMegaMenu: true },
  { name: "Soluciones por Industria", href: "/#use-cases" },
  { name: "Casos de Éxito", href: "/portfolio" },
  { name: "Precios", href: "/pricing" },
];

const megaMenuItems = [
  {
    title: "Infraestructura & Hosting",
    description: "Hosting de sitios/apps, APIs, Odoo. Migración incluida.",
    href: "/proyecto",
    icon: <Server className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
  },
  {
    title: "Desarrollo Web & Apps",
    description: "Landing pages, dashboards, apps SaaS.",
    href: "/proyecto",
    icon: <Code2 className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
  },
  {
    title: "Sistemas Empresariales (Odoo)",
    description: "Instalación Odoo Community, módulos personalizados.",
    href: "/proyecto",
    icon: <Database className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
  },
  {
    title: "Automatización & APIs",
    description: "Integración pagos, bots, dashboards BI.",
    href: "/proyecto",
    icon: <Zap className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
  },
  {
    title: "Consultoría DevOps",
    description: "Configuración entornos, CI/CD, monitoreo.",
    href: "/proyecto",
    icon: <Shield className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
  },
  {
    title: "Soporte & Mantenimiento",
    description: "Mantenimiento apps, backups, actualizaciones.",
    href: "/proyecto",
    icon: <Wrench className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
  },
];

const Logo = () => (
  <Link href="/" className="-m-1.5 p-1.5 group">
    <span className="sr-only">GVSlabs</span>
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
        <span className="text-white font-bold text-sm">GV</span>
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-500 dark:from-blue-400 dark:to-emerald-300 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-emerald-600 transition-all duration-200">
        GVSlabs
      </span>
    </div>
  </Link>
);

const NavigationLinks = ({
  onMegaMenuEnter,
  onMegaMenuLeave,
}: {
  onMegaMenuEnter: () => void;
  onMegaMenuLeave: () => void;
}) => (
  <div className="hidden lg:flex lg:gap-x-8 relative">
    {navigation.map((item) => (
      <div
        key={item.name}
        className="relative"
        onMouseEnter={item.hasMegaMenu ? onMegaMenuEnter : undefined}
      >
        <Link
          href={item.href}
          className="text-sm font-semibold leading-6 text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          {item.name}
        </Link>
      </div>
    ))}
  </div>
);

const MegaMenu = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute top-full left-0 right-0 bg-white dark:bg-slate-900 shadow-2xl border-t-2 border-blue-500 z-[65]"
        onMouseEnter={() => {}} // Keep menu open
        onMouseLeave={onClose}
      >
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {megaMenuItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="group block p-6 rounded-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 dark:hover:from-slate-800 dark:hover:to-slate-700 transition-all duration-300 shadow-sm hover:shadow-lg border border-transparent hover:border-blue-200 dark:hover:border-slate-600"
              >
                <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
};

const LanguageToggle = () => {
  const [language, setLanguage] = useState("en");

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "es" : "en")}
      aria-label="Toggle language"
      className="rounded-full px-3 hover:bg-slate-100 dark:hover:bg-slate-800"
    >
      <span className="text-sm font-medium">
        {language === "es" ? "🇪🇸 ES" : "🇺🇸 EN"}
      </span>
    </Button>
  );
};

const MobileMenu = ({
  isOpen,
  onClose,
  onComingSoon,
}: {
  isOpen: boolean;
  onClose: () => void;
  onComingSoon: () => void;
}) => {
  const { theme, setTheme } = useTheme();
  const [language, setLanguage] = useState("en");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm">
      <div className="fixed top-16 bottom-0 right-0 z-[60] w-full overflow-y-auto bg-white dark:bg-slate-900 px-6 py-6 sm:max-w-sm shadow-2xl">
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
              {/* Enlaces del topbar */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
                  Servicios
                </h3>
                <div className="space-y-2">
                  <a
                    href="https://dokploy.gvslabs.cloud/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    onClick={onClose}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Área de cliente</span>
                  </a>
                  <a
                    href="https://zimbra1.mail.ovh.net/"
                    className="flex items-center space-x-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                    onClick={onClose}
                  >
                    <Mail className="w-4 h-4" />
                    <span>Webmail</span>
                  </a>
                  <a
                    href="/#contact"
                    className="flex items-center space-x-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                    onClick={onClose}
                  >
                    <Phone className="w-4 h-4" />
                    <span>Contacto</span>
                  </a>
                </div>
              </div>

              <div className="border-t border-slate-200 dark:border-slate-700 pt-4 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Theme
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
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
                <Link href="/proyecto" passHref>
                  <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white w-full">
                    Solicitar una Consulta
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Header() {
  const { toast } = useToast();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  const showComingSoon = () => {
    toast({
      title: "Próximamente",
      description: "Esta funcionalidad estará disponible muy pronto.",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const sections = navigation.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-[55] transition-all duration-300",
        isScrolled
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      )}
    >
      {/* Top Bar - Hidden on mobile */}
      <div className="hidden md:block bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 border-b border-slate-200 dark:border-slate-700 text-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            <div></div>
            <div className="flex items-center space-x-6">
              <a
                href="https://dokploy.gvslabs.cloud/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Área de cliente</span>
              </a>
              <a
                href="https://zimbra1.mail.ovh.net/"
                className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
              >
                Webmail
              </a>
              <a
                href="/#contact"
                className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
              >
                Contacto
              </a>
              <ThemeToggle />
              <Button
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white text-xs px-3 py-1"
                asChild
              >
                <Link href="/proyecto">Solicitar Consulta</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700"
        aria-label="Global"
      >
        <div className="flex items-center">
          <Logo />
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <NavigationLinks
          onMegaMenuEnter={() => setIsMegaMenuOpen(true)}
          onMegaMenuLeave={() => setIsMegaMenuOpen(false)}
        />
        <MegaMenu
          isOpen={isMegaMenuOpen}
          onClose={() => setIsMegaMenuOpen(false)}
        />
        <div className="hidden md:flex md:items-center md:gap-x-4"></div>
      </nav>
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onComingSoon={showComingSoon}
      />
    </header>
  );
}
