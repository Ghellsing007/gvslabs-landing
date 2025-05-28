"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface ContactInfo {
  icon: React.ReactNode
  title: string
  content: string
}

const contactInfo: ContactInfo[] = [
  {
    icon: <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600 dark:text-indigo-400 mt-0.5" aria-hidden="true" />,
    title: "Dirección",
    content: "Santo Domingo, República Dominicana",
  },
  {
    icon: <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600 dark:text-indigo-400 mt-0.5" aria-hidden="true" />,
    title: "Email",
    content: "gvservicex@gmail.com",
  },
  {
    icon: <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600 dark:text-indigo-400 mt-0.5" aria-hidden="true" />,
    title: "Teléfono",
    content: "+1 (829) 872-5551",
  },
]

const ContactInfoCard = () => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <Card className="h-full border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 rounded-2xl">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl text-slate-900 dark:text-white">Información de contacto</CardTitle>
        <CardDescription className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          Estamos aquí para ayudarte. No dudes en contactarnos por cualquiera de estos medios.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 sm:space-y-6">
        {contactInfo.map((info, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-start space-x-3 sm:space-x-4 group"
          >
            <div className="transition-transform duration-300 ease-in-out group-hover:scale-110" aria-hidden="true">
              {info.icon}
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-medium text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">{info.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 group-hover:text-indigo-600/80 dark:group-hover:text-indigo-400/80 transition-colors duration-300">{info.content}</p>
            </div>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  </motion.div>
)

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log(formData)
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="h-full border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl text-slate-900 dark:text-white">Envíanos un mensaje</CardTitle>
          <CardDescription className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Completa el formulario y te responderemos a la brevedad.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4" aria-label="Formulario de contacto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="grid gap-1 sm:gap-2"
            >
              <Label htmlFor="name" className="text-sm sm:text-base text-slate-700 dark:text-slate-300">Nombre</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
                aria-required="true"
                className="rounded-xl border-slate-200 dark:border-slate-700 focus:border-indigo-600 dark:focus:border-indigo-400 focus:ring-indigo-600 dark:focus:ring-indigo-400 transition-all duration-300 text-sm sm:text-base"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid gap-1 sm:gap-2"
            >
              <Label htmlFor="email" className="text-sm sm:text-base text-slate-700 dark:text-slate-300">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                required
                aria-required="true"
                className="rounded-xl border-slate-200 dark:border-slate-700 focus:border-indigo-600 dark:focus:border-indigo-400 focus:ring-indigo-600 dark:focus:ring-indigo-400 transition-all duration-300 text-sm sm:text-base"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid gap-1 sm:gap-2"
            >
              <Label htmlFor="phone" className="text-sm sm:text-base text-slate-700 dark:text-slate-300">Teléfono</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
                aria-label="Número de teléfono (opcional)"
                className="rounded-xl border-slate-200 dark:border-slate-700 focus:border-indigo-600 dark:focus:border-indigo-400 focus:ring-indigo-600 dark:focus:ring-indigo-400 transition-all duration-300 text-sm sm:text-base"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid gap-1 sm:gap-2"
            >
              <Label htmlFor="message" className="text-sm sm:text-base text-slate-700 dark:text-slate-300">Mensaje</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="¿En qué podemos ayudarte?"
                required
                aria-required="true"
                className="min-h-[100px] rounded-xl border-slate-200 dark:border-slate-700 focus:border-indigo-600 dark:focus:border-indigo-400 focus:ring-indigo-600 dark:focus:ring-indigo-400 transition-all duration-300 text-sm sm:text-base"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Button 
                type="submit" 
                className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg text-sm sm:text-base"
                aria-label="Enviar mensaje de contacto"
              >
                Enviar mensaje
              </Button>
            </motion.div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function Contact() {
  return (
    <section 
      id="contact" 
      className="min-h-screen py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900"
      aria-labelledby="contact-title"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center space-y-4 text-center px-4 sm:px-6"
        >
          <div className="inline-block rounded-2xl bg-indigo-600/10 dark:bg-indigo-400/10 px-3 sm:px-4 py-1 sm:py-2 text-sm text-indigo-600 dark:text-indigo-400 transition-all duration-300 hover:bg-indigo-600/20 dark:hover:bg-indigo-400/20">
            Contacto
          </div>
          <h2 id="contact-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white">
            Ponte en contacto con nosotros
          </h2>
          <p className="max-w-[700px] text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300">
            ¿Tienes alguna pregunta o proyecto en mente? Estamos aquí para ayudarte.
          </p>
        </motion.div>
        <div className="grid gap-4 sm:gap-6 mt-8 sm:mt-12 md:grid-cols-2">
          <ContactInfoCard />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
