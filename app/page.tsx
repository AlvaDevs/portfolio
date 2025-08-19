"use client"
import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import InteractiveLeaves from "@/components/interactive-leaves"

export default function Portfolio() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
    setIsLoaded(true)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      <InteractiveLeaves />

      <div className={`relative z-10 transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <Navigation />
        <Hero />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </div>
    </main>
  )
}
