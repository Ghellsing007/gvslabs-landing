"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
}

const blogPosts: BlogPost[] = [
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

const BlogPostImage = ({ image, title }: { image: string; title: string }) => (
  <div className="relative aspect-video overflow-hidden rounded-t-2xl">
    <Image
      src={image || "/placeholder.svg"}
      alt={title}
      width={600}
      height={400}
      className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
    />
  </div>
)

const BlogPostMeta = ({ date, readTime }: { date: string; readTime: string }) => (
  <div className="flex items-center justify-between text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-2">
    <span className="transition-colors duration-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">{date}</span>
    <span className="transition-colors duration-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">{readTime} lectura</span>
  </div>
)

const BlogPostCard = ({ post, index }: { post: BlogPost; index: number }) => (
  <motion.div
    key={post.id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    <Card className="h-full border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 rounded-2xl group">
      <BlogPostImage image={post.image} title={post.title} />
      <CardHeader className="p-4 sm:p-6">
        <BlogPostMeta date={post.date} readTime={post.readTime} />
        <Link href="#" className="hover:underline">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">{post.title}</h3>
        </Link>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 pt-0">
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="p-4 sm:p-6">
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full rounded-xl transition-all duration-300 ease-in-out hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-white border-indigo-600 dark:border-indigo-400 text-sm sm:text-base"
        >
          Leer más
        </Button>
      </CardFooter>
    </Card>
  </motion.div>
)

export default function BlogPreview() {
  return (
    <section id="blog" className="min-h-screen py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center px-4 sm:px-6">
          <div className="inline-block rounded-2xl bg-indigo-600/10 dark:bg-indigo-400/10 px-3 sm:px-4 py-1 sm:py-2 text-sm text-indigo-600 dark:text-indigo-400 transition-all duration-300 hover:bg-indigo-600/20 dark:hover:bg-indigo-400/20">
            Blog
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white">
            Últimas publicaciones
          </h2>
          <p className="max-w-[700px] text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300">
            Mantente al día con las últimas tendencias y novedades en tecnología y desarrollo de software.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
