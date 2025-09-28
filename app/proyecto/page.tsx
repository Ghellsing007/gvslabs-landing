import ProjectForm from "@/components/project-form"


export const metadata = {
  title: "Cuéntanos sobre tu proyecto - GVServices",
  description:
    "Queremos ayudarte a hacer realidad tu idea. Completa nuestro formulario y nos pondremos en contacto contigo.",
}

export default function ProyectoPage() {
  return (
    <main className="min-h-screen pt-24">
      <ProjectForm />
    </main>
  )
}
