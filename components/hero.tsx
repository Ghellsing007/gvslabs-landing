"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800" />
      <div className="container relative px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block rounded-2xl bg-indigo-600/10 dark:bg-indigo-400/10 px-3 sm:px-4 py-1 sm:py-2 text-sm text-indigo-600 dark:text-indigo-400 transition-all duration-300 hover:bg-indigo-600/20 dark:hover:bg-indigo-400/20"
          >
            Bienvenido a GVServices
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-slate-900 dark:text-white"
          >
            Transformando ideas en
            <span className="text-indigo-600 dark:text-indigo-400"> soluciones digitales</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-[700px] text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300"
          >
            Desarrollamos soluciones tecnológicas innovadoras que impulsan el crecimiento de tu negocio.
            Desde aplicaciones web hasta sistemas empresariales complejos.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="rounded-xl bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
              Comenzar proyecto
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-xl border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600/10 dark:hover:bg-indigo-400/10 transition-all duration-300 ease-in-out hover:scale-105">
              Ver portafolio
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
