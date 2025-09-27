"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Rocket, Package, ShoppingCart, Building, Bot } from "lucide-react"
import { ReactNode } from "react"

interface UseCase {
  icon: ReactNode
  title: string
  description: string
}

const useCases: UseCase[] = [
  {
    icon: <Rocket className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
    title: "SaaS y Startups",
    description: "Plataformas escalables, MVPs rápidos y soluciones cloud-native para startups innovadoras.",
  },
  {
    icon: <Package className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
    title: "PYMEs que necesitan Odoo",
    description: "Implementación completa de Odoo para gestión de inventario, ventas y finanzas en pequeñas y medianas empresas.",
  },
  {
    icon: <ShoppingCart className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
    title: "Ecommerce",
    description: "Tiendas online personalizadas, integración con pasarelas de pago y optimización para conversiones.",
  },
  {
    icon: <Building className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
    title: "Sistemas internos",
    description: "Software a medida para clínicas médicas, talleres automotrices y otros negocios con procesos específicos.",
  },
  {
    icon: <Bot className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
    title: "Automatización y bots",
    description: "Bots para chat, automatización de workflows y integración con APIs para optimizar operaciones.",
  },
]

const UseCaseCard = ({ useCase, index }: { useCase: UseCase; index: number }) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    <Card className="h-full border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 rounded-2xl">
      <CardHeader>
        <div className="mb-2 transition-transform duration-300 ease-in-out group-hover:scale-110">{useCase.icon}</div>
        <CardTitle className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">{useCase.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          {useCase.description}
        </CardDescription>
      </CardContent>
    </Card>
  </motion.div>
)

const UseCasesHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="flex flex-col items-center justify-center space-y-4 text-center px-4 sm:px-6"
  >
    <div className="inline-block rounded-2xl bg-indigo-600/10 dark:bg-indigo-400/10 px-3 sm:px-4 py-1 sm:py-2 text-sm text-indigo-600 dark:text-indigo-400 transition-all duration-300 hover:bg-indigo-600/20 dark:hover:bg-indigo-400/20">
      Soluciones por Industria
    </div>
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white">
      Soluciones para diferentes industrias
    </h2>
    <p className="max-w-[700px] text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300">
      Descubre cómo nuestras soluciones se adaptan a las necesidades específicas de tu sector.
    </p>
  </motion.div>
)

export default function UseCases() {
  return (
    <section id="use-cases" className="py-12 md:py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
      <div className="container px-4 md:px-6 mx-auto">
        <UseCasesHeader />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12"
        >
          {useCases.map((useCase, index) => (
            <UseCaseCard key={index} useCase={useCase} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}