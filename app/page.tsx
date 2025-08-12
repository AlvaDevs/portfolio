import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navigation />
      <Hero />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
    </main>
  )
}
