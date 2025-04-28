"use client"

import { motion } from "framer-motion"
import { Calendar, Car, ShoppingBag, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const products = [
  {
    icon: <Calendar className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
    title: "Plataforma de Agendas Online",
    description:
      "Sistema de gestión de citas y reservas para optimizar la atención al cliente y administrar horarios de forma eficiente.",
    link: "#",
  },
  {
    icon: <Car className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />,
    title: "Gestores de Talleres Automotrices",
    description:
      "Software especializado para la gestión integral de talleres mecánicos, control de inventario y seguimiento de reparaciones.",
    link: "#",
  },
  {
    icon: <ShoppingBag className="h-10 w-10 text-amber-600 dark:text-amber-400" />,
    title: "Marketplaces Personalizados",
    description:
      "Plataformas de comercio electrónico a medida que conectan vendedores y compradores con funcionalidades específicas para tu nicho de mercado.",
    link: "#",
  },
  {
    icon: <Users className="h-10 w-10 text-rose-600 dark:text-rose-400" />,
    title: "CRM Básicos para Pequeñas Empresas",
    description:
      "Sistemas de gestión de relaciones con clientes adaptados a las necesidades y presupuestos de pequeñas y medianas empresas.",
    link: "#",
  },
]

export default function Products() {
  return (
    <section id="products" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-blue-600/10 dark:bg-blue-400/10 px-3 py-1 text-sm text-blue-600 dark:text-blue-400">
            Nuestros Productos
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900 dark:text-white">
            Soluciones listas para implementar
          </h2>
          <p className="max-w-[700px] text-slate-700 dark:text-slate-300 md:text-lg">
            Descubre nuestros productos desarrollados para resolver necesidades específicas de diferentes industrias.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="mb-2">{product.icon}</div>
                  <CardTitle className="text-xl text-slate-900 dark:text-white">{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 dark:text-slate-400 text-base">
                    {product.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Más información
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
