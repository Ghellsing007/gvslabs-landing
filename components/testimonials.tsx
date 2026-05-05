"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Testimonial {
  _id?: string;
  name: string;
  role: string;
  content: string;
  avatar?: string;
  rating: number;
}

interface TestimonialsProps {
  initialTestimonials?: Testimonial[];
}

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    name: "Carlos Rodríguez",
    role: "CEO en TechFlow",
    content: "La implementación de nuestra infraestructura en la nube con GVS Labs fue impecable. Su equipo demostró un conocimiento técnico excepcional.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    role: "Directora de Operaciones en Global Logistics",
    content: "Gracias a su solución de automatización, hemos reducido nuestros tiempos operativos en un 40%. Una inversión que valió totalmente la pena.",
    rating: 5,
  },
];

export default function Testimonials({ initialTestimonials = [] }: TestimonialsProps) {
  // Map API data to component structure if needed
  const mappedTestimonials = initialTestimonials.map((t: any) => ({
    _id: t._id,
    name: t.name,
    role: t.role || t.company || "Cliente",
    content: t.message || t.content,
    avatar: t.photo || t.avatar,
    rating: t.rating || 5,
  }));

  const testimonials = mappedTestimonials.length > 0 ? mappedTestimonials : DEFAULT_TESTIMONIALS;

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
              key={testimonial._id || index}
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
