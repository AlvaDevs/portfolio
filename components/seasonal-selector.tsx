"use client"

import { useState, useEffect } from "react"

export type Season = "spring" | "summer" | "fall" | "winter"

interface SeasonalSelectorProps {
  onSeasonChange: (season: Season) => void
}

const seasons = {
  spring: { emoji: "🌸", name: "Spring", color: "text-pink-500 dark:text-pink-400" },
  summer: { emoji: "☀️", name: "Summer", color: "text-yellow-500 dark:text-yellow-400" },
  fall: { emoji: "🍂", name: "Fall", color: "text-orange-500 dark:text-orange-400" },
  winter: { emoji: "❄️", name: "Winter", color: "text-blue-500 dark:text-blue-400" },
}

function getCurrentSeason(): Season {
  const month = new Date().getMonth() + 1
  if (month >= 3 && month <= 5) return "spring"
  if (month >= 6 && month <= 8) return "summer"
  if (month >= 9 && month <= 11) return "fall"
  return "winter"
}

export default function SeasonalSelector({ onSeasonChange }: SeasonalSelectorProps) {
  const [currentSeason, setCurrentSeason] = useState<Season>(getCurrentSeason())
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    onSeasonChange(currentSeason)
  }, [currentSeason, onSeasonChange])

  const handleSeasonChange = (season: Season) => {
    setCurrentSeason(season)
    setIsOpen(false)
  }

  return (
    <div className="fixed top-4 left-4 sm:top-6 sm:left-6 z-[100]">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-full p-3 sm:p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-600 ring-1 ring-black/5 dark:ring-white/10"
        >
          <span className="text-2xl sm:text-3xl animate-bounce block">{seasons[currentSeason].emoji}</span>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 mt-3 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-2xl p-3 shadow-2xl border border-gray-200 dark:border-gray-600 animate-scale-in ring-1 ring-black/5 dark:ring-white/10 min-w-[160px]">
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(seasons).map(([key, season]) => (
                <button
                  key={key}
                  onClick={() => handleSeasonChange(key as Season)}
                  className={`p-3 rounded-xl transition-all duration-200 hover:scale-105 flex flex-col items-center ${
                    currentSeason === key
                      ? "bg-blue-100 dark:bg-blue-900/50 shadow-md ring-2 ring-blue-500/20"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700/50"
                  }`}
                >
                  <div className="text-xl sm:text-2xl mb-1">{season.emoji}</div>
                  <div className={`text-xs font-semibold ${season.color}`}>{season.name}</div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
