"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface Project {
  id: string
  title: string
  description: string
  image: string
  category: string
  link: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "Orpheus",
    description: "Plataforma para compartir esuchar y reproducir musica.",
    image: "/orpheus-music.png",
    category: "web",
    link: "https://orpheus-music-sand.vercel.app/",
  },
  {
    id: "2",
    title: "Rendrly",
    description: "Plataforma para rentar y administrar vehículos.",
    image: "/rendrly.png",
    category: "mobile",
    link: "https://rendrly.netlify.app/",
  },
  {
    id: "3",
    title: "GVSAnime",
    description: "Web de anime con API de Jikan y diseño moderno.",
    image: "/gvsanime.png",
    category: "web",
    link: "https://gvsanime.vercel.app/",
  },
  {
    id: "4",
    title: "Agendly-Saas",
    description: "Plataforma de agendas online para optimizar la atención al cliente y administrar horarios de forma eficiente.",
    image: "/agendly-saas.webp",
    category: "web",
    link: "https://agendly-saas.netlify.app/",
  },
  {
    id: "5",
    title: "Inmoplus",
    description: "Plataforma para la gestión y publicación de inmuebles (bienes raíces). Permite buscar propiedades, agendar visitas y contactar agentes.",
    image: "/inmoplus.png",
    category: "web",
    link: "https://inmoplus.netlify.app/",
  },
  {
    id: "6",
    title: "GenerationQR",
    description: "Generador de códigos QR online.",
    image: "/generationqr.png",
    category: "web",
    link: "https://generationqr.vercel.app/",
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
    transition={{ duration: 0.4, ease: "easeOut" }}
    viewport={{ once: true, margin: "-50px" }}
    style={{ willChange: "opacity, transform" }}
    className="block group overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-slate-900"
  >
    <div className="relative aspect-video overflow-hidden">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        priority={project.id === "1"}
        loading={project.id === "1" ? "eager" : "lazy"}
      />
    </div>
    <div className="p-3 xs:p-4 sm:p-5 md:p-6">
      <h3 className="text-base xs:text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 xs:mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">{project.title}</h3>
      <p className="text-sm xs:text-base text-slate-600 dark:text-slate-400 leading-relaxed">{project.description}</p>
    </div>
  </motion.a>
)

const PortfolioHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="flex flex-col items-center justify-center space-y-3 xs:space-y-4 text-center px-4 xs:px-5 sm:px-6"
  >
    <div className="inline-block rounded-2xl bg-indigo-600/10 dark:bg-indigo-400/10 px-3 sm:px-4 py-1 sm:py-2 text-sm text-indigo-600 dark:text-indigo-400 transition-all duration-300 hover:bg-indigo-600/20 dark:hover:bg-indigo-400/20">
      Casos de Éxito / Portafolio
    </div>
    <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white leading-tight">
      Demos de nuestras aplicaciones
    </h2>
    <p className="max-w-[700px] text-sm xs:text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
      Explora algunas de nuestras aplicaciones en funcionamiento con capturas y enlaces directos.
    </p>
  </motion.div>
)

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
      <div className="container px-4 xs:px-5 sm:px-6 mx-auto">
        <PortfolioHeader />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
