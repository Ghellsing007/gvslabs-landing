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
import { Check, Star, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const hostingPlans = [
  {
    name: "Starter",
    price: "$5",
    period: "/mes",
    description: "Para proyectos pequeños y sitios de presentación.",
    features: [
      "1 sitio estático o blog",
      "Base de datos básica incluida",
      "SSL + Backups semanales",
      "Subdominio bajo *.gvscloud.com incluido",
      "Soporte por email/chat",
      "Ideal para landing pages, portfolios, blogs",
    ],
    popular: false,
    technicalSpecs: "Hasta 0.5 vCPU / 512 MB RAM / 1 GB DB",
  },
  {
    name: "Business",
    price: "$15",
    period: "/mes",
    description: "Para negocios en crecimiento con apps dinámicas.",
    features: [
      "1–2 aplicaciones web (Node.js, Python, PHP, etc.)",
      "Base de datos dedicada",
      "SSL + Backups diarios",
      "Subdominio bajo *.gvscloud.com incluido",
      "Dominio y correo básico incluidos",
      "Soporte prioritario",
      "Ideal para tiendas pequeñas, sistemas internos o apps MVP",
    ],
    popular: true,
    technicalSpecs: "Hasta 1 vCPU / 1 GB RAM / 2 GB DB",
  },
  {
    name: "Scale",
    price: "$35",
    period: "/mes",
    description: "Para startups, SaaS y APIs con tráfico moderado.",
    features: [
      "Hasta 5 aplicaciones o APIs",
      "Monitoreo básico 24/7",
      "SSL + Backups automáticos",
      "Subdominio bajo *.gvscloud.com incluido",
      "Soporte premium",
      "Ideal para marketplaces, SaaS en crecimiento, APIs B2B",
    ],
    popular: false,
    technicalSpecs: "Hasta 2 vCPU / 2 GB RAM / 5 GB DB",
  },
  {
    name: "Odoo Cloud",
    price: "$55",
    period: "/mes",
    description: "ERP/CRM en la nube para optimizar operaciones.",
    features: [
      "Instancia optimizada de Odoo Community",
      "Incluye módulo base (ventas o inventario)",
      "Backups diarios + Seguridad avanzada",
      "Soporte funcional incluido",
      "El precio varía según módulos, integraciones y volumen de datos",
    ],
    popular: false,
    technicalSpecs: "Desde 1 vCPU / 1 GB RAM (escalable)",
  },
  {
    name: "Custom Cloud",
    price: "A Medida",
    period: "",
    description: "Para empresas que requieren más capacidad o alta demanda.",
    features: [
      "Escalamos vCPU, RAM, almacenamiento y bases de datos",
      "Ajustamos los recursos según su presupuesto y proyección",
      "Soporte y SLA personalizados",
      "Ideal para apps con alto tráfico, big data, integraciones pesadas",
    ],
    popular: false,
    technicalSpecs: "Recursos personalizados según necesidades",
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
      💎 Planes de Hosting y Cloud by GVS Labs
    </div>
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white">
      Rápidos, seguros y con soporte humano
    </h2>
    <p className="max-w-[900px] text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300">
      Incluyen SSL, backups automáticos y optimización para apps web modernas. Perfectos para PYMEs, startups y profesionales que quieren ahorrar en AWS/GCP pero con un servicio confiable.
    </p>
  </motion.div>
);

const HostingSection = () => {
  const [showTechnical, setShowTechnical] = useState<Record<string, boolean>>({});

  const toggleTechnical = (planName: string) => {
    setShowTechnical(prev => ({
      ...prev,
      [planName]: !prev[planName]
    }));
  };

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-center text-slate-900 dark:text-white">
        Hosting
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: showTechnical[plan.name] ? 'auto' : 0 }}
                className="overflow-hidden"
              >
                <div className="mt-4 p-3 bg-slate-100 dark:bg-slate-700 rounded-md">
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {plan.technicalSpecs}
                  </p>
                </div>
              </motion.div>
              <div className="text-center mt-4">
                <button
                  onClick={() => toggleTechnical(plan.name)}
                  className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline flex items-center justify-center gap-1 mx-auto"
                >
                  Ver detalles técnicos
                  {showTechnical[plan.name] ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
              </div>
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
};

const KeyDifferentiatorsSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-center space-y-6"
  >
    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
      💎 Diferenciadores Clave frente a Hosting Tradicional
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
      <div className="flex items-start gap-3">
        <Check className="h-5 w-5 text-green-500 mt-0.5" />
        <p className="text-sm text-slate-700 dark:text-slate-300">
          Precios más bajos que AWS, DigitalOcean o Render
        </p>
      </div>
      <div className="flex items-start gap-3">
        <Check className="h-5 w-5 text-green-500 mt-0.5" />
        <p className="text-sm text-slate-700 dark:text-slate-300">
          Sin costos ocultos por tráfico, ancho de banda ni transferencias
        </p>
      </div>
      <div className="flex items-start gap-3">
        <Check className="h-5 w-5 text-green-500 mt-0.5" />
        <p className="text-sm text-slate-700 dark:text-slate-300">
          Despliegue rápido y fácil, incluso para apps modernas (Node.js, Python, etc.)
        </p>
      </div>
      <div className="flex items-start gap-3">
        <Check className="h-5 w-5 text-green-500 mt-0.5" />
        <p className="text-sm text-slate-700 dark:text-slate-300">
          Incluye monitoreo básico y backups (que en otros servicios se paga aparte)
        </p>
      </div>
      <div className="flex items-start gap-3">
        <Check className="h-5 w-5 text-green-500 mt-0.5" />
        <p className="text-sm text-slate-700 dark:text-slate-300">
          Soporte humano real
        </p>
      </div>
      <div className="flex items-start gap-3">
        <Check className="h-5 w-5 text-green-500 mt-0.5" />
        <p className="text-sm text-slate-700 dark:text-slate-300">
          Opción de migrar a recursos dedicados a medida que creces
        </p>
      </div>
    </div>
  </motion.div>
);

const DomainsAndServicesSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="space-y-8"
  >
    <h3 className="text-2xl font-bold text-center text-slate-900 dark:text-white">
      🌎 Dominios y Servicios Asociados
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg text-slate-900 dark:text-white">
            🌟 Wildcard Domain (*.gvscloud.com)
          </CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-400">
            Subdominios ilimitados para tus apps y demos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <li>• Gratis los primeros 3 meses</li>
            <li>• Luego $1.5-2.5/mes según uso</li>
            <li>• SSL automático incluido</li>
            <li>• Ideal para demos</li>
          </ul>
        </CardContent>
      </Card>
      <Card className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg text-slate-900 dark:text-white">
            📧 Correo Corporativo
          </CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-400">
            Email profesional con Zimbra o alternativas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <li>• 1-5 buzones: +$5/mes</li>
            <li>• 6-20 buzones: +$15/mes</li>
            <li>• Anti-spam y webmail incluido</li>
            <li>• Configuración gestionada</li>
          </ul>
        </CardContent>
      </Card>
      <Card className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg text-slate-900 dark:text-white">
            🔒 Servicios Adicionales
          </CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-400">
            Complementos para potenciar tu presencia
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <li>• Gestión de dominios: costo dominio + fee</li>
            <li>• SSL Premium (EV/OV): $15-20/año</li>
            <li>• Backups externos: $3-5/mes</li>
            <li>• WAF/CDN (Cloudflare): $3-10/mes</li>
          </ul>
        </CardContent>
      </Card>
      <Card className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg text-slate-900 dark:text-white">
            ⚡ Notas Importantes
          </CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-400">
            Restricciones y beneficios
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <li>• Subdominio limitado a apps en plataforma</li>
            <li>• Dominios propios requieren registro adicional</li>
            <li>• Soporte incluido en configuración inicial</li>
            <li>• Tú te encargas de todo el setup</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  </motion.div>
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
        <div className="mt-16 space-y-16">
          <HostingSection />
          <KeyDifferentiatorsSection />
          <DomainsAndServicesSection />
          <DevelopmentSection />
          <MaintenanceSection />
        </div>
      </div>
    </section>
  );
}
