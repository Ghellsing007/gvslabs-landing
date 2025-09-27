"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import emailjs from "@emailjs/browser"
import Confetti from "react-confetti"

const ProjectForm = () => {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project_description: "",
    solution_type: "",
    budget: "",
    deadline: "",
    notes: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // 🔐 Validar variables de entorno
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_PROJECT
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      console.error("❌ Faltan variables de entorno para EmailJS")
      toast({
        title: "Error interno",
        description: "Faltan configuraciones necesarias para enviar el mensaje.",
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    try {
      await emailjs.send(serviceId, templateId, formData, publicKey)

      // Mostrar confetti y toast mejorado
      setShowConfetti(true)
      toast({
        title: "🎉 ¡Brief enviado exitosamente!",
        description: "Gracias por compartir tu proyecto. Te contactaremos en menos de 24 horas.",
      })

      setFormData({
        name: "",
        email: "",
        phone: "",
        project_description: "",
        solution_type: "",
        budget: "",
        deadline: "",
        notes: "",
      })

      // Ocultar confetti después de 5 segundos
      setTimeout(() => setShowConfetti(false), 5000)
    } catch (error) {
      console.error("❌ Error al enviar el brief:", error)
      toast({
        title: "Error",
        description: "No se pudo enviar el brief. Inténtalo de nuevo.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="max-w-2xl mx-auto border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 rounded-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl sm:text-3xl text-slate-900 dark:text-white">
            Cuéntanos sobre tu proyecto
          </CardTitle>
          <CardDescription className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            ¡Hablemos de tu proyecto! Queremos ayudarte a hacer realidad tu idea. Cuéntanos qué necesitas y nos pondremos en contacto contigo lo antes posible.
          </CardDescription>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
            Solo tomará unos minutos. Entre más detalles tengamos, mejor podremos ayudarte.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Información Personal */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                ¿Cuál es tu nombre y cómo te contactamos?
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
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
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            {/* Descripción del Proyecto */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                ¿Cómo describirías tu proyecto en una frase?
              </h3>
              <div className="space-y-2">
                <Label htmlFor="project_description">Descripción del proyecto *</Label>
                <Textarea
                  id="project_description"
                  name="project_description"
                  value={formData.project_description}
                  onChange={handleChange}
                  placeholder="Ej: 'Una tienda online para productos artesanales'"
                  required
                  className="min-h-[80px]"
                />
              </div>
            </div>

            {/* Tipo de Solución */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                ¿Qué tipo de solución necesitas?
              </h3>
              <div className="space-y-2">
                <Label>Tipo de solución</Label>
                <Select onValueChange={(value) => handleSelectChange("solution_type", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona el tipo de solución" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web">🌐 Sitio web informativo</SelectItem>
                    <SelectItem value="ecommerce">🛒 Tienda en línea</SelectItem>
                    <SelectItem value="mobile">📱 App móvil</SelectItem>
                    <SelectItem value="branding">🎨 Branding / identidad visual</SelectItem>
                    <SelectItem value="automation">⚡ Automatización</SelectItem>
                    <SelectItem value="other">🔧 Otra solución</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Presupuesto */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                ¿Cuál es tu presupuesto estimado?
              </h3>
              <div className="space-y-2">
                <Label>Rango de presupuesto</Label>
                <Select onValueChange={(value) => handleSelectChange("budget", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un rango de presupuesto" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-1000">Menos de $1,000</SelectItem>
                    <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                    <SelectItem value="5000-15000">$5,000 - $15,000</SelectItem>
                    <SelectItem value="15000-50000">$15,000 - $50,000</SelectItem>
                    <SelectItem value="over-50000">Más de $50,000</SelectItem>
                    <SelectItem value="discuss">Prefiero discutir presupuesto</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Fecha límite */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                ¿Para cuándo lo necesitas?
              </h3>
              <div className="space-y-2">
                <Label>Fecha límite o urgencia</Label>
                <Select onValueChange={(value) => handleSelectChange("deadline", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona el nivel de urgencia" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asap">Lo antes posible</SelectItem>
                    <SelectItem value="1-month">En 1 mes</SelectItem>
                    <SelectItem value="2-3-months">En 2-3 meses</SelectItem>
                    <SelectItem value="3-6-months">En 3-6 meses</SelectItem>
                    <SelectItem value="6-months-plus">Más de 6 meses</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Notas adicionales */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                ¿Algo más que debamos saber?
              </h3>
              <div className="space-y-2">
                <Label htmlFor="notes">Notas adicionales</Label>
                <Textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Comparte ideas, referencias, funcionalidades específicas, o cualquier detalle que consideres importante..."
                  className="min-h-[100px]"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar Brief del Proyecto"}
            </Button>

            <p className="text-center text-sm text-slate-600 dark:text-slate-400">
              📩 Envíanos tu brief y comenzamos contigo el camino hacia un gran proyecto.
            </p>
          </form>
        </CardContent>
      </Card>

      {/* Confetti Animation */}
      {showConfetti && (
        <Confetti
          width={typeof window !== 'undefined' ? window.innerWidth : 1920}
          height={typeof window !== 'undefined' ? window.innerHeight : 1080}
          recycle={false}
          numberOfPieces={200}
          gravity={0.3}
        />
      )}
    </motion.div>
  )
}

export default ProjectForm