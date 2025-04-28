import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Products from "@/components/products"
import Portfolio from "@/components/portfolio"
import Testimonials from "@/components/testimonials"
import BlogPreview from "@/components/blog-preview"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Products />
      <Portfolio />
      <Testimonials />
      <BlogPreview />
      <Contact />
      <Footer />
    </main>
  )
}
