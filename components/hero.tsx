"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, BarChart, Zap } from "lucide-react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-slate-900">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#2e2e2e_1px,transparent_1px),linear-gradient(to_bottom,#2e2e2e_1px,transparent_1px)]"></div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-slate-900 dark:text-white">
                  Impulsamos tu negocio con{" "}
                  <span className="text-blue-600 dark:text-blue-400">soluciones tecnológicas</span> innovadoras
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <p className="max-w-[600px] text-slate-700 dark:text-slate-300 md:text-xl">
                  Desarrollo de software, optimización de procesos y soluciones digitales hechas para ti
                </p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-2 min-[400px]:flex-row"
            >
              <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white">
                Solicitar una Consulta
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">Conoce nuestros servicios</Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center space-x-4 text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-center space-x-1">
                  <Code className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span>Desarrollo a medida</span>
                </div>
                <div className="flex items-center space-x-1">
                  <BarChart className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Optimización de procesos</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Zap className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                  <span>Soluciones rápidas</span>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto aspect-video overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 shadow-lg"
          >
            <div className="relative h-full w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-emerald-600/20 dark:from-blue-400/10 dark:to-emerald-400/10"></div>
              <div className="flex h-full items-center justify-center">
                <div className="px-8 py-12 text-center">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-blue-600/10 dark:bg-blue-400/10 flex items-center justify-center">
                    <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Soluciones Tecnológicas</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    Desarrollamos software a medida para optimizar tus procesos de negocio
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
