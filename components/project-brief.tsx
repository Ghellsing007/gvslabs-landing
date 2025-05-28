"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Rocket, Send, CheckCircle, Clock, DollarSign, MessageSquare, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const solutionTypes = [
  { id: "website", label: "Sitio web informativo", icon: "🌐" },
  { id: "ecommerce", label: "Tienda en línea", icon: "🛒" },
  { id: "mobile", label: "App móvil", icon: "📱" },
  { id: "branding", label: "Branding / identidad visual", icon: "🎨" },
  { id: "other", label: "Otra solución", icon: "⚡" },
]

const budgetRanges = [
  { value: "under-500", label: "Menos de $500" },
  { value: "500-1500", label: "$500 - $1,500" },
  { value: "1500-3000", label: "$1,500 - $3,000" },
  { value: "3000-5000", label: "$3,000 - $5,000" },
  { value: "over-5000", label: "Más de $5,000" },
  { value: "discuss", label: "Prefiero discutirlo" },
]

const urgencyLevels = [
  { value: "asap", label: "Lo antes posible (1-2 semanas)" },
  { value: "month", label: "En el próximo mes" },
  { value: "quarter", label: "En los próximos 3 meses" },
  { value: "flexible", label: "Soy flexible con los tiempos" },
]

export default function ProjectBrief() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectDescription: "",
    solutionType: "",
    customSolution: "",
    budget: "",
    timeline: "",
    additionalNotes: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Project brief submitted:", formData)
    setIsSubmitted(true)
    // Reset form after a delay
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectDescription: "",
        solutionType: "",
        customSolution: "",
        budget: "",
        timeline: "",
        additionalNotes: "",
      })
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <Card className="border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/20">
              <CardContent className="p-8">
                <div className="mb-4">
                  <CheckCircle className="h-16 w-16 text-emerald-600 dark:text-emerald-400 mx-auto" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">¡Gracias por contactarnos!</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Hemos recibido la información de tu proyecto. Nuestro equipo la revisará y se pondrá en contacto
                  contigo en las próximas 24 horas para discutir los detalles.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
                  <Clock className="h-4 w-4" />
                  <span>Tiempo de respuesta: 24 horas</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-lg bg-blue-600/10 dark:bg-blue-400/10 px-4 py-2 text-blue-600 dark:text-blue-400 mb-6">
            <Rocket className="h-5 w-5" />
            <span className="text-sm font-medium">Cuéntanos sobre tu proyecto</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900 dark:text-white mb-4">
            ¡Hablemos de tu proyecto!
          </h1>
          <p className="max-w-2xl mx-auto text-slate-700 dark:text-slate-300 md:text-lg">
            Queremos ayudarte a hacer realidad tu idea. Cuéntanos qué necesitas y nos pondremos en contacto contigo lo
            antes posible.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Clock className="h-4 w-4" />
            <span>Solo tomará unos minutos. Entre más detalles tengamos, mejor podremos ayudarte.</span>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 shadow-lg">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl text-slate-900 dark:text-white">Formulario de Proyecto</CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-400">
                Completa la información para que podamos entender mejor tus necesidades
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
                    <User className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <span>¿Cuál es tu nombre y cómo te contactamos?</span>
                  </div>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
                    <MessageSquare className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <span>¿Cómo describirías tu proyecto en una frase?</span>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="projectDescription">Descripción del proyecto *</Label>
                    <Input
                      id="projectDescription"
                      name="projectDescription"
                      value={formData.projectDescription}
                      onChange={handleInputChange}
                      placeholder='Ej: "Una tienda online para productos artesanales"'
                      required
                    />
                  </div>
                </div>

                {/* Solution Type */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
                    <Rocket className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <span>¿Qué tipo de solución necesitas?</span>
                  </div>
                  <RadioGroup
                    value={formData.solutionType}
                    onValueChange={(value) => handleSelectChange("solutionType", value)}
                    className="grid gap-3 md:grid-cols-2"
                  >
                    {solutionTypes.map((type) => (
                      <div key={type.id} className="flex items-center space-x-2">
                        <RadioGroupItem value={type.id} id={type.id} />
                        <Label
                          htmlFor={type.id}
                          className="flex items-center gap-2 cursor-pointer text-slate-700 dark:text-slate-300"
                        >
                          <span>{type.icon}</span>
                          <span>{type.label}</span>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                  {formData.solutionType === "other" && (
                    <div className="space-y-2 mt-4">
                      <Label htmlFor="customSolution">Especifica tu solución</Label>
                      <Input
                        id="customSolution"
                        name="customSolution"
                        value={formData.customSolution}
                        onChange={handleInputChange}
                        placeholder="Describe el tipo de solución que necesitas"
                      />
                    </div>
                  )}
                </div>

                {/* Budget */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
                    <DollarSign className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <span>¿Cuál es tu presupuesto estimado?</span>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Rango de presupuesto</Label>
                    <Select value={formData.budget} onValueChange={(value) => handleSelectChange("budget", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un rango de presupuesto" />
                      </SelectTrigger>
                      <SelectContent>
                        {budgetRanges.map((range) => (
                          <SelectItem key={range.value} value={range.value}>
                            {range.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Timeline */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
                    <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <span>¿Para cuándo lo necesitas?</span>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeline">Fecha límite o urgencia</Label>
                    <Select value={formData.timeline} onValueChange={(value) => handleSelectChange("timeline", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona el nivel de urgencia" />
                      </SelectTrigger>
                      <SelectContent>
                        {urgencyLevels.map((level) => (
                          <SelectItem key={level.value} value={level.value}>
                            {level.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
                    <MessageSquare className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <span>¿Algo más que debamos saber?</span>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="additionalNotes">Notas adicionales</Label>
                    <Textarea
                      id="additionalNotes"
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleInputChange}
                      placeholder="Comparte ideas, referencias, funcionalidades específicas, o cualquier detalle que consideres importante..."
                      rows={4}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                  <div className="text-center space-y-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Enviar Brief del Proyecto
                    </Button>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      📩 Envíanos tu brief y comenzamos contigo el camino hacia un gran proyecto.
                    </p>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="text-center border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
              <CardContent className="p-6">
                <Clock className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Respuesta Rápida</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Te contactaremos en menos de 24 horas</p>
              </CardContent>
            </Card>
            <Card className="text-center border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
              <CardContent className="p-6">
                <MessageSquare className="h-8 w-8 text-emerald-600 dark:text-emerald-400 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Consulta Gratuita</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Primera consulta sin costo para entender tu proyecto
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
              <CardContent className="p-6">
                <CheckCircle className="h-8 w-8 text-amber-600 dark:text-amber-400 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Propuesta Personalizada</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Solución adaptada específicamente a tus necesidades
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
