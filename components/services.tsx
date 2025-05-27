"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Code, Database, Globe, LineChart, Lock, Smartphone } from "lucide-react"
import { ReactNode } from "react"

interface Service {
  icon: ReactNode
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: <Code className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
    title: "Desarrollo de Software",
    description: "Creamos soluciones de software personalizadas que se adaptan a las necesidades específicas de tu negocio.",
  },
  {
    icon: <Database className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
    title: "Gestión de Datos",
    description: "Implementamos sistemas eficientes para la gestión y análisis de datos empresariales.",
  },
  {
    icon: <Globe className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
    title: "Desarrollo Web",
    description: "Diseñamos y desarrollamos sitios web modernos y responsivos que destacan tu presencia online.",
  },
  {
    icon: <Smartphone className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
    title: "Aplicaciones Móviles",
    description: "Creamos aplicaciones móviles nativas y multiplataforma para iOS y Android.",
  },
  {
    icon: <LineChart className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
    title: "Análisis de Datos",
    description: "Proporcionamos herramientas y análisis para tomar decisiones basadas en datos.",
  },
  {
    icon: <Lock className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
    title: "Ciberseguridad",
    description: "Implementamos medidas de seguridad robustas para proteger tus sistemas y datos.",
  },
]

const ServiceCard = ({ service, index }: { service: Service; index: number }) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    <Card className="h-full border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 rounded-2xl">
      <CardHeader>
        <div className="mb-2 transition-transform duration-300 ease-in-out group-hover:scale-110">{service.icon}</div>
        <CardTitle className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">{service.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          {service.description}
        </CardDescription>
      </CardContent>
    </Card>
  </motion.div>
)

const ServicesHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="flex flex-col items-center justify-center space-y-4 text-center px-4 sm:px-6"
  >
    <div className="inline-block rounded-2xl bg-indigo-600/10 dark:bg-indigo-400/10 px-3 sm:px-4 py-1 sm:py-2 text-sm text-indigo-600 dark:text-indigo-400 transition-all duration-300 hover:bg-indigo-600/20 dark:hover:bg-indigo-400/20">
      Nuestros Servicios
    </div>
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white">
      Soluciones tecnológicas completas
    </h2>
    <p className="max-w-[700px] text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300">
      Ofrecemos una amplia gama de servicios tecnológicos para ayudar a tu empresa a crecer y optimizar sus
      procesos.
    </p>
  </motion.div>
)

export default function Services() {
  return (
    <section id="services" className="min-h-screen py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container px-4 md:px-6 mx-auto">
        <ServicesHeader />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
