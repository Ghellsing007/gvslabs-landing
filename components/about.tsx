"use client"

import { motion } from "framer-motion"
import { CheckCircle, Code, Lightbulb, Shield, Zap } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="inline-block rounded-lg bg-blue-600/10 dark:bg-blue-400/10 px-3 py-1 text-sm text-blue-600 dark:text-blue-400">
              Sobre Nosotros
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900 dark:text-white">
              Impulsando negocios con tecnología
            </h2>
            <p className="max-w-[600px] text-slate-700 dark:text-slate-300 md:text-lg">
              En GVServices, nos dedicamos a brindar soluciones tecnológicas modernas, elegantes y eficientes que
              impulsen el crecimiento de negocios a través del desarrollo de software y servicios digitales de alta
              calidad.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-slate-700 dark:text-slate-300">Más de 5 años de experiencia</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-slate-700 dark:text-slate-300">Equipo de profesionales especializados</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-slate-700 dark:text-slate-300">Soluciones personalizadas para cada cliente</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-slate-700 dark:text-slate-300">Compromiso con la calidad y la innovación</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid gap-4 md:grid-cols-2"
          >
            <div className="grid gap-4">
              <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 p-6 shadow-sm">
                <div className="mb-4 h-10 w-10 rounded-full bg-blue-600/10 dark:bg-blue-400/10 flex items-center justify-center">
                  <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Innovación</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Buscamos constantemente nuevas formas de mejorar y optimizar procesos mediante la tecnología.
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 p-6 shadow-sm">
                <div className="mb-4 h-10 w-10 rounded-full bg-emerald-600/10 dark:bg-emerald-400/10 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Eficiencia</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Desarrollamos soluciones que optimizan recursos y mejoran la productividad de tu negocio.
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 p-6 shadow-sm">
                <div className="mb-4 h-10 w-10 rounded-full bg-amber-600/10 dark:bg-amber-400/10 flex items-center justify-center">
                  <Code className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Calidad</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Nos comprometemos a entregar productos de alta calidad que cumplan con los estándares más exigentes.
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 p-6 shadow-sm">
                <div className="mb-4 h-10 w-10 rounded-full bg-rose-600/10 dark:bg-rose-400/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-rose-600 dark:text-rose-400" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Compromiso</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Trabajamos de la mano con nuestros clientes para asegurar el éxito de cada proyecto.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
