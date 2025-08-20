"use client"
import { useEffect, useState, useCallback } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import InteractiveLeaves from "@/components/interactive-leaves"
import SeasonalSelector, { type Season } from "@/components/seasonal-selector"
import DarkModeToggle from "@/components/dark-mode-toggle"

export default function Portfolio() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentSeason, setCurrentSeason] = useState<Season>("fall")

  const handleSeasonChange = useCallback((season: Season) => {
    setCurrentSeason(season)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
    setIsLoaded(true)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors duration-500">
      <InteractiveLeaves season={currentSeason} />

      <SeasonalSelector onSeasonChange={handleSeasonChange} />
      <DarkModeToggle />

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
