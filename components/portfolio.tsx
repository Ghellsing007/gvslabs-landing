"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Project {
  id: string
  title: string
  description: string
  image: string
  category: string
  link: string
}

const categories = [
  { id: "all", label: "Todos" },
  { id: "web", label: "Desarrollo Web" },
  { id: "mobile", label: "Aplicaciones Móviles" },
  { id: "desktop", label: "Software Desktop" },
]

const projects: Project[] = [
  {
    id: "1",
    title: "Agendly-Saas",
    description: "Plataforma de agendas online para optimizar la atención al cliente y administrar horarios de forma eficiente.",
    image: "/agendly-saas.webp",
    category: "web",
    link: "https://agendly-saas.netlify.app/",
  },
  {
    id: "2",
    title: "App de Delivery",
    description: "Aplicación móvil para pedidos y seguimiento de entregas en tiempo real.",
    image: "/placeholder.svg?height=400&width=600",
    category: "mobile",
    link: "#",
  },
  {
    id: "3",
    title: "Sistema de Gestión",
    description: "Software de gestión empresarial con módulos de contabilidad y recursos humanos.",
    image: "/placeholder.svg?height=400&width=600",
    category: "desktop",
    link: "#",
  },
  {
    id: "4",
    title: "E-commerce Platform",
    description: "Plataforma de comercio electrónico con integración de pagos y gestión de inventario.",
    image: "/placeholder.svg?height=400&width=600",
    category: "web",
    link: "#",
  },
]

const ProjectCard = ({ project }: { project: Project }) => (
  <motion.a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    key={project.id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="block group overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105"
  >
    <div className="relative aspect-video overflow-hidden">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        priority={project.id === "1"}
      />
    </div>
    <div className="p-4 sm:p-6">
      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">{project.title}</h3>
      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">{project.description}</p>
    </div>
  </motion.a>
)

const PortfolioHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="flex flex-col items-center justify-center space-y-4 text-center px-4 sm:px-6"
  >
    <div className="inline-block rounded-2xl bg-indigo-600/10 dark:bg-indigo-400/10 px-3 sm:px-4 py-1 sm:py-2 text-sm text-indigo-600 dark:text-indigo-400 transition-all duration-300 hover:bg-indigo-600/20 dark:hover:bg-indigo-400/20">
      Portafolio
    </div>
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white">
      Nuestros proyectos destacados
    </h2>
    <p className="max-w-[700px] text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300">
      Descubre algunos de nuestros trabajos más recientes y cómo hemos ayudado a nuestros clientes a alcanzar sus objetivos.
    </p>
  </motion.div>
)

export default function Portfolio() {
  return (
    <section id="portfolio" className="min-h-screen py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
      <div className="container px-4 md:px-6 mx-auto">
        <PortfolioHeader />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Tabs defaultValue="all" className="mt-8 sm:mt-12">
            <div className="flex justify-center">
              <TabsList className="mb-6 sm:mb-8 p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl shadow-md flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="rounded-xl transition-all duration-300 ease-in-out hover:bg-indigo-600/10 dark:hover:bg-indigo-400/10 data-[state=active]:bg-indigo-600 data-[state=active]:text-white dark:data-[state=active]:bg-indigo-400 text-sm sm:text-base whitespace-nowrap"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                >
                  {projects
                    .filter((project) => category.id === "all" || project.category === category.id)
                    .map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
