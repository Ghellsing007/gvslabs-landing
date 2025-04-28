"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
    // Show success message
    alert("Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.")
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-blue-600/10 dark:bg-blue-400/10 px-3 py-1 text-sm text-blue-600 dark:text-blue-400">
            Contacto
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900 dark:text-white">
            ¿Listo para impulsar tu negocio?
          </h2>
          <p className="max-w-[700px] text-slate-700 dark:text-slate-300 md:text-lg">
            Contáctanos hoy mismo y descubre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos.
          </p>
        </div>
        <div className="grid gap-6 mt-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900 dark:text-white">Información de contacto</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400">
                  Estamos aquí para ayudarte. No dudes en contactarnos por cualquiera de estos medios.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white">Dirección</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Av. Tecnológica 123, Ciudad Innovación, CP 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white">Email</h3>
                    <p className="text-slate-600 dark:text-slate-400">info@gvservices.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white">Teléfono</h3>
                    <p className="text-slate-600 dark:text-slate-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="pt-4">
                  <h3 className="font-medium text-slate-900 dark:text-white mb-2">Horario de atención</h3>
                  <p className="text-slate-600 dark:text-slate-400">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                  <p className="text-slate-600 dark:text-slate-400">Sábados: 10:00 AM - 2:00 PM</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900 dark:text-white">Envíanos un mensaje</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400">
                  Completa el formulario y te responderemos a la brevedad.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="subject">Asunto</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="¿En qué podemos ayudarte?"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Escribe tu mensaje aquí..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white"
                  >
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
