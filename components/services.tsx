"use client"

import { motion } from "framer-motion"
import { Code, Globe, ShoppingCart, Layers, Lightbulb, BarChart, Wrench, Palette, Brain, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Desarrollo de Software a Medida",
    description: "Creamos aplicaciones web, móviles y de escritorio adaptadas a tus necesidades específicas.",
  },
  {
    icon: <Globe className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
    title: "Páginas Web Corporativas",
    description: "Diseñamos y desarrollamos sitios web profesionales que representan la identidad de tu empresa.",
  },
  {
    icon: <ShoppingCart className="h-6 w-6 text-amber-600 dark:text-amber-400" />,
    title: "Tiendas Online (E-commerce)",
    description: "Implementamos plataformas de comercio electrónico seguras y fáciles de gestionar.",
  },
  {
    icon: <Layers className="h-6 w-6 text-rose-600 dark:text-rose-400" />,
    title: "Integraciones de APIs",
    description: "Conectamos tus sistemas con servicios externos para automatizar procesos y mejorar la eficiencia.",
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
    title: "Consultoría Tecnológica",
    description: "Asesoramos en la implementación de soluciones tecnológicas para optimizar tu negocio.",
  },
  {
    icon: <BarChart className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />,
    title: "Optimización de Procesos",
    description: "Analizamos y mejoramos tus procesos empresariales mediante la implementación de tecnología.",
  },
  {
    icon: <Wrench className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
    title: "Soporte Técnico y Mantenimiento",
    description:
      "Ofrecemos servicios de soporte y mantenimiento para garantizar el funcionamiento óptimo de tus sistemas.",
  },
  {
    icon: <Palette className="h-6 w-6 text-orange-600 dark:text-orange-400" />,
    title: "Diseño UI/UX",
    description: "Creamos interfaces intuitivas y atractivas centradas en la experiencia del usuario.",
  },
  {
    icon: <Brain className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
    title: "Soluciones de IA para Negocios",
    description: "Implementamos soluciones de inteligencia artificial para optimizar procesos y análisis de datos.",
  },
  {
    icon: <Shield className="h-6 w-6 text-red-600 dark:text-red-400" />,
    title: "Seguridad Cibernética",
    description: "Protegemos tu información y sistemas con soluciones de seguridad adaptadas a PYMEs.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-blue-600/10 dark:bg-blue-400/10 px-3 py-1 text-sm text-blue-600 dark:text-blue-400">
            Nuestros Servicios
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900 dark:text-white">
            Soluciones tecnológicas completas
          </h2>
          <p className="max-w-[700px] text-slate-700 dark:text-slate-300 md:text-lg">
            Ofrecemos una amplia gama de servicios tecnológicos para ayudar a tu empresa a crecer y optimizar sus
            procesos.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="mb-2">{service.icon}</div>
                  <CardTitle className="text-slate-900 dark:text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
