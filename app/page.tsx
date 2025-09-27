import Hero from "@/components/hero"
import Services from "@/components/services"
import UseCases from "@/components/use-cases"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <UseCases />
      <Contact />
      <Footer />
    </main>
  )
}
