"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { IconRenderer } from "@/components/icon-renderer";

interface Service {
  _id?: string;
  icon: string;
  title: string;
  description: string;
}

const ServiceCard = ({
  service,
  index,
}: {
  service: Service;
  index: number;
}) => (
  <motion.div
    key={service._id || index}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    <Card className="h-full border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 rounded-2xl">
      <CardHeader>
        <div className="mb-2 transition-transform duration-300 ease-in-out group-hover:scale-110">
          <IconRenderer 
            iconName={service.icon} 
            className="h-6 w-6 text-indigo-600 dark:text-indigo-400" 
          />
        </div>
        <CardTitle className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
          {service.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          {service.description}
        </CardDescription>
      </CardContent>
    </Card>
  </motion.div>
);

const ServicesHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="flex flex-col items-center justify-center space-y-4 text-center px-4 sm:px-6"
  >
    <div className="inline-block rounded-2xl bg-indigo-600/10 dark:bg-indigo-400/10 px-3 sm:px-4 py-1 sm:py-2 text-sm text-indigo-600 dark:text-indigo-400 transition-all duration-300 hover:bg-indigo-600/20 dark:hover:bg-indigo-400/20">
      Categorías de Servicio
    </div>
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white">
      Infraestructura y software a tu medida
    </h2>
    <p className="max-w-[700px] text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300">
      Ofrecemos una amplia gama de servicios tecnológicos para ayudar a tu
      empresa a crecer y optimizar sus procesos.
    </p>
  </motion.div>
);

const DEFAULT_SERVICES: Service[] = [
  {
    icon: "Cloud",
    title: "Infraestructura Cloud",
    description: "Diseño y despliegue de infraestructuras escalables en AWS, Azure y Google Cloud.",
  },
  {
    icon: "Code",
    title: "Desarrollo de Software",
    description: "Creación de aplicaciones web y móviles a medida con las últimas tecnologías.",
  },
  {
    icon: "ShieldCheck",
    title: "Ciberseguridad",
    description: "Protección integral de datos y sistemas contra amenazas digitales externas.",
  },
  {
    icon: "Cpu",
    title: "Inteligencia Artificial",
    description: "Integración de modelos de IA para optimizar procesos y análisis de datos.",
  },
  {
    icon: "Database",
    title: "Gestión de Datos",
    description: "Estrategias de Big Data y bases de datos para una toma de decisiones informada.",
  },
  {
    icon: "Zap",
    title: "Automatización",
    description: "Optimización de flujos de trabajo mediante herramientas de automatización inteligente.",
  },
];

interface ServicesProps {
  initialServices?: Service[];
}

export default function Services({ initialServices = [] }: ServicesProps) {
  const services = initialServices.length > 0 ? initialServices : DEFAULT_SERVICES;

  return (
    <section
      id="services"
      className="py-12 md:py-16 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <ServicesHeader />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12"
        >
          {services.map((service, index) => (
            <ServiceCard key={service._id || index} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
