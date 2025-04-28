"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const categories = [
  { id: "all", label: "Todos" },
  { id: "web", label: "Desarrollo Web" },
  { id: "mobile", label: "Apps Móviles" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "automation", label: "Automatización" },
]

const projects = [
  {
    id: 1,
    title: "Portal Corporativo Moderno",
    description: "Diseño y desarrollo de un portal web corporativo con panel de administración personalizado.",
    image: "/placeholder.svg?height=600&width=800",
    category: "web",
  },
  {
    id: 2,
    title: "App de Gestión de Inventario",
    description: "Aplicación móvil para la gestión de inventario con sincronización en tiempo real.",
    image: "/placeholder.svg?height=600&width=800",
    category: "mobile",
  },
  {
    id: 3,
    title: "Tienda Online de Productos Artesanales",
    description: "Plataforma e-commerce con pasarela de pagos y gestión de envíos integrada.",
    image: "/placeholder.svg?height=600&width=800",
    category: "ecommerce",
  },
  {
    id: 4,
    title: "Sistema de Automatización de Marketing",
    description: "Herramienta para automatizar campañas de email marketing y seguimiento de clientes.",
    image: "/placeholder.svg?height=600&width=800",
    category: "automation",
  },
  {
    id: 5,
    title: "Plataforma de Reservas para Restaurantes",
    description: "Sistema web para gestionar reservas y pedidos online para restaurantes.",
    image: "/placeholder.svg?height=600&width=800",
    category: "web",
  },
  {
    id: 6,
    title: "App de Delivery para Supermercados",
    description: "Aplicación móvil para realizar pedidos de supermercado con entrega a domicilio.",
    image: "/placeholder.svg?height=600&width=800",
    category: "mobile",
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-blue-600/10 dark:bg-blue-400/10 px-3 py-1 text-sm text-blue-600 dark:text-blue-400">
            Nuestro Portafolio
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900 dark:text-white">
            Proyectos destacados
          </h2>
          <p className="max-w-[700px] text-slate-700 dark:text-slate-300 md:text-lg">
            Explora algunos de nuestros trabajos más recientes y descubre cómo hemos ayudado a nuestros clientes a
            alcanzar sus objetivos.
          </p>
        </div>
        <Tabs defaultValue="all" className="mt-12">
          <div className="flex justify-center">
            <TabsList className="mb-8">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects
                  .filter((project) => category.id === "all" || project.category === category.id)
                  .map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={800}
                          height={600}
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                        <p className="mt-2 text-slate-600 dark:text-slate-400">{project.description}</p>
                        <div className="mt-4">
                          <Button variant="outline" size="sm">
                            Ver detalles
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        <div className="mt-12 text-center">
          <Button>Ver más proyectos</Button>
        </div>
      </div>
    </section>
  )
}
