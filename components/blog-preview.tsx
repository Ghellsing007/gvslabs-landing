"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

const blogPosts = [
  {
    id: 1,
    title: "Cómo la Inteligencia Artificial está transformando los negocios",
    excerpt:
      "Descubre las aplicaciones prácticas de la IA en diferentes sectores empresariales y cómo implementarla en tu negocio.",
    image: "/placeholder.svg?height=400&width=600",
    date: "15 Abril, 2023",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Guía para optimizar la seguridad de tu sitio web",
    excerpt:
      "Aprende las mejores prácticas para proteger tu sitio web contra amenazas cibernéticas y garantizar la seguridad de tus datos.",
    image: "/placeholder.svg?height=400&width=600",
    date: "28 Mayo, 2023",
    readTime: "7 min",
  },
  {
    id: 3,
    title: "Tendencias en desarrollo web para 2023",
    excerpt:
      "Conoce las tecnologías y tendencias que están definiendo el futuro del desarrollo web y mantén tu negocio a la vanguardia.",
    image: "/placeholder.svg?height=400&width=600",
    date: "10 Junio, 2023",
    readTime: "6 min",
  },
]

export default function BlogPreview() {
  return (
    <section id="blog" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-blue-600/10 dark:bg-blue-400/10 px-3 py-1 text-sm text-blue-600 dark:text-blue-400">
            Nuestro Blog
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900 dark:text-white">
            Últimos artículos y recursos
          </h2>
          <p className="max-w-[700px] text-slate-700 dark:text-slate-300 md:text-lg">
            Mantente al día con las últimas tendencias tecnológicas y descubre consejos para optimizar tu negocio.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 shadow-sm overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader className="p-6">
                  <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400 mb-2">
                    <span>{post.date}</span>
                    <span>{post.readTime} lectura</span>
                  </div>
                  <Link href="#" className="hover:underline">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{post.title}</h3>
                  </Link>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-slate-600 dark:text-slate-400">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="p-6">
                  <Button variant="outline" size="sm" className="w-full">
                    Leer más
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button>Ver todos los artículos</Button>
        </div>
      </div>
    </section>
  )
}
