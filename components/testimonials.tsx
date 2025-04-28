"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "María González",
    role: "CEO, Innovatech",
    content:
      "GVServices transformó completamente nuestros procesos internos con su sistema de gestión. La eficiencia de nuestro equipo aumentó en un 40% desde la implementación.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    role: "Director de Operaciones, LogisTech",
    content:
      "La aplicación móvil que desarrollaron para nuestra flota de transporte nos permitió optimizar rutas y reducir costos operativos significativamente. Excelente trabajo.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
  },
  {
    name: "Laura Martínez",
    role: "Propietaria, Boutique Elegance",
    content:
      "Nuestra tienda online ha incrementado las ventas en un 75% desde que GVServices la rediseñó. La experiencia de usuario es excepcional y el proceso de compra muy intuitivo.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
  },
  {
    name: "Javier Morales",
    role: "Gerente de Marketing, TechSolutions",
    content:
      "El sistema de automatización de marketing que implementaron ha revolucionado nuestra estrategia digital. Ahora podemos gestionar campañas de forma más eficiente.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-blue-600/10 dark:bg-blue-400/10 px-3 py-1 text-sm text-blue-600 dark:text-blue-400">
            Testimonios
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900 dark:text-white">
            Lo que dicen nuestros clientes
          </h2>
          <p className="max-w-[700px] text-slate-700 dark:text-slate-300 md:text-lg">
            Descubre cómo hemos ayudado a empresas de diferentes sectores a alcanzar sus objetivos tecnológicos.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 shadow-sm">
                <CardHeader>
                  <div className="flex">
                    {Array(testimonial.rating)
                      .fill(null)
                      .map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                      ))}
                    {Array(5 - testimonial.rating)
                      .fill(null)
                      .map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-slate-300 dark:text-slate-600" />
                      ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400 italic">"{testimonial.content}"</p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">{testimonial.name}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
