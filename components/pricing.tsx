"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import Link from "next/link";

const hostingPlans = [
  {
    name: "Starter",
    price: "$10-15",
    period: "/mes",
    description: "1 sitio web estático o blog.",
    features: [
      "1 sitio web estático o blog",
      "1 base de datos",
      "SSL + backups semanales",
      "Soporte básico",
    ],
    popular: false,
  },
  {
    name: "Business",
    price: "$25-40",
    period: "/mes",
    description: "1-3 apps (Node.js, Python, etc.).",
    features: [
      "1-3 apps (Node.js, Python, etc.)",
      "Base de datos dedicada",
      "Backups diarios",
      "Dominio + email básico",
    ],
    popular: true,
  },
  {
    name: "Scale",
    price: "$60-90",
    period: "/mes",
    description: "5+ apps o APIs.",
    features: [
      "5+ apps o APIs",
      "Monitoreo 24/7",
      "Backups automáticos",
      "Soporte prioritario",
    ],
    popular: false,
  },
  {
    name: "Odoo Cloud",
    price: "$70-100",
    period: "/mes",
    description: "Instancia de Odoo Community.",
    features: [
      "Instancia de Odoo Community",
      "1 módulo básico incluido",
      "1GB+ DB",
      "Soporte funcional",
    ],
    popular: false,
  },
];

const PricingHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="flex flex-col items-center justify-center space-y-4 text-center px-4 sm:px-6"
  >
    <div className="inline-block rounded-2xl bg-indigo-600/10 dark:bg-indigo-400/10 px-3 sm:px-4 py-1 sm:py-2 text-sm text-indigo-600 dark:text-indigo-400 transition-all duration-300 hover:bg-indigo-600/20 dark:hover:bg-indigo-400/20">
      Planes y Precios
    </div>
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white">
      Encuentra el plan perfecto para tu negocio
    </h2>
    <p className="max-w-[700px] text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300">
      Precios transparentes y flexibles adaptados a tus necesidades.
    </p>
  </motion.div>
);

const HostingSection = () => (
  <div className="space-y-8">
    <h3 className="text-2xl font-bold text-center text-slate-900 dark:text-white">
      Hosting
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {hostingPlans.map((plan, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card
            className={`relative h-full border ${
              plan.popular
                ? "border-indigo-500 shadow-lg"
                : "border-slate-200 dark:border-slate-800"
            } bg-white dark:bg-slate-800 shadow-sm`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Star className="h-3 w-3" />
                  Más Popular
                </div>
              </div>
            )}
            <CardHeader className="text-center">
              <CardTitle className="text-xl text-slate-900 dark:text-white">
                {plan.name}
              </CardTitle>
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                {plan.price}
                <span className="text-lg font-normal text-slate-600 dark:text-slate-400">
                  {plan.period}
                </span>
              </div>
              <CardDescription className="text-slate-600 dark:text-slate-400">
                {plan.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"
                  >
                    <Check className="h-4 w-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
                asChild
              >
                <Link href="/proyecto">Seleccionar Plan</Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
);

const developmentProjects = [
  {
    type: "Landing Page profesional",
    deliverable: "1-3 secciones, optimizada y alojada",
    price: "$200-300",
  },
  {
    type: "Sitio Corporativo",
    deliverable: "4-6 secciones, blog, contacto, hosting incluido 1er año",
    price: "$500-800",
  },
  {
    type: "Aplicación SaaS básica",
    deliverable: "Agenda online, reservas, dashboards, pagos online",
    price: "$800-1,500",
  },
  {
    type: "Integración de Pagos / APIs",
    deliverable: "Conexión con Stripe, WhatsApp, CRM, etc.",
    price: "$150-300 c/u",
  },
  {
    type: "Personalización Odoo Community",
    deliverable: "Módulo adaptado al negocio",
    price: "$200-600 / módulo",
  },
  {
    type: "Consultoría DevOps",
    deliverable: "Configuración Coolify, CI/CD, seguridad, monitoreo",
    price: "$25-40 USD / hora",
  },
];

const maintenancePlans = [
  {
    name: "Básico",
    price: "$20 USD / mes",
    features: [
      "2-3 tickets / mes",
      "Actualizaciones menores",
      "Backups semanales",
    ],
  },
  {
    name: "Pro",
    price: "$50 USD / mes",
    features: [
      "5-10 tickets / mes",
      "Monitoreo",
      "Backups diarios",
      "Parcheo de seguridad",
    ],
  },
  {
    name: "Empresarial",
    price: "$100+ USD / mes",
    features: ["Soporte 24/7", "SLA garantizado", "Mantenimiento proactivo"],
  },
];

const DevelopmentSection = () => (
  <div className="space-y-8 mt-16">
    <h3 className="text-2xl font-bold text-center text-slate-900 dark:text-white">
      Servicios de Desarrollo por Proyecto
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {developmentProjects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-slate-900 dark:text-white">
                {project.type}
              </CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-400">
                {project.deliverable}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                {project.price}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/proyecto">Cotizar</Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
);

const MaintenanceSection = () => (
  <div className="space-y-8 mt-16">
    <h3 className="text-2xl font-bold text-center text-slate-900 dark:text-white">
      Servicios de Mantenimiento y Soporte
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {maintenancePlans.map((plan, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="h-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-white">
                {plan.name}
              </CardTitle>
              <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                {plan.price}
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                {plan.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/proyecto">Cotizar</Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
);

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="container px-4 md:px-6">
        <PricingHeader />
        <div className="mt-12 space-y-16">
          <HostingSection />
          <DevelopmentSection />
          <MaintenanceSection />
        </div>
      </div>
    </section>
  );
}
