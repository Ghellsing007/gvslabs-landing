import Hero from "@/components/hero"
import Services from "@/components/services"
import UseCases from "@/components/use-cases"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Testimonials from "@/components/testimonials"
import { gvslabsApi } from "@/lib/api"

export default async function Home() {
  const [services, testimonials, projects, config] = await Promise.all([
    gvslabsApi.getServices().catch(() => []),
    gvslabsApi.getTestimonials().catch(() => []),
    gvslabsApi.getProjects().catch(() => []),
    gvslabsApi.getConfig().catch(() => ({})),
  ]);

  return (
    <main className="min-h-screen">
      <Hero config={config} />
      <Services initialServices={services} />
      <UseCases initialUseCases={projects} />
      <Testimonials initialTestimonials={testimonials} />
      <Contact config={config} />
      <Footer config={config} />
    </main>
  )
}
