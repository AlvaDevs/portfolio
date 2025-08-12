"use client"

import { useEffect, useRef, useState } from "react"

const certifications = [
  {
    name: "Digital Transformation with Google Cloud",
    issuer: "Google Cloud Skills Boost",
    date: "2025",
    credentialId: "17289950",
    icon: "☁️",
  },
  {
    name: "Get Started with Google Workspace Tools Skill Badge",
    issuer: "Google Cloud Skills Boost",
    date: "2025",
    credentialId: "e85f6b4d-58d1-4957-b6a6-1fe87284ce3f",
    icon: "🛠️",
  },
  {
    name: "Cómo integrar la propia identidad LGBTQI+ en el ambiente de trabajo",
    issuer: "LinkedIn",
    date: "2024",
    credentialId: "349209252191d1b0ad4b378fb79528d9c229f3066563448d5f45feb0a503fcfd",
    icon: "🏳️‍🌈",
  },
  {
    name: "Cómo liderar a la generación Z",
    issuer: "LinkedIn",
    date: "2024",
    credentialId: "df1d15592b166a891ba6923fdea9b77fbf88a8ff5dee3e5b82d47d95f850fe40",
    icon: "👥",
  },
  {
    name: "Excel esencial (Office 365/Microsoft 365)",
    issuer: "LinkedIn",
    date: "2024",
    credentialId: "8489891aa84efdde05a21afeab273b4ce692af1e5028fffec773a4b8c07205f3",
    icon: "📊",
  },
  {
    name: "Fundamentos de la programación: Más allá de lo básico",
    issuer: "LinkedIn",
    date: "2024",
    credentialId: "1ea639abd5e8e219ae142ba995b795ce2a5dd12c14fbdc485c1da601d40bfe03",
    icon: "🧠",
  },
  {
    name: "Fundamentos profesionales del desarrollo de software, por Microsoft y LinkedIn",
    issuer: "Microsoft",
    date: "2024",
    credentialId: "c3365be41efa7f3adf6472ab108911c63c9f9d79ef2ed9cf106fbbfb96eac5e9",
    icon: "💼",
  },
  {
    name: "Introducción a AWS: Conceptos de la nube",
    issuer: "LinkedIn",
    date: "2024",
    credentialId: "ba27be8313d3946a8bfe2dbde0992a96107ededa9b6f42355901bdc32bc052a9",
    icon: "⚡",
  },
  {
    name: "Fundamentos esenciales de la programación",
    issuer: "LinkedIn",
    date: "2024",
    credentialId: "c685b6bb8ad545d9ca8278e88055ba383dfa014b05269a13363dc3ad23083ec8",
    icon: "📘",
  },
  {
    name: "Introducción a las habilidades profesionales en el desarrollo de software",
    issuer: "LinkedIn",
    date: "2024",
    credentialId: "b0c4ac78f9bb3ad0b7ab32c2a4d459856ed0fcfaed6d1984de60a9fd504004ed",
    icon: "🧩",
  },
  {
    name: "SmallTalk English Speaking Level Test",
    issuer: "SmallTalk2Me",
    date: "2023",
    credentialId: "7e5c7081",
    icon: "🗣️",
  },
]

const CredentialIdDisplay = ({ credentialId }: { credentialId: string }) => {
  const isLongId = credentialId.length > 15

  if (!isLongId) {
    return <p className="text-xs text-gray-400 text-center">Credential ID: {credentialId}</p>
  }

  const truncatedId = `${credentialId.substring(0, 12)}...`

  return (
    <div className="text-xs text-gray-400 text-center relative group">
      <span>Credential ID: {truncatedId}</span>
      <span
        className="ml-1 cursor-help text-blue-500 hover:text-blue-600 transition-colors"
        title={`Credential ID: ${credentialId}`}
      >
        🛈
      </span>

      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 shadow-lg max-w-xs break-all">
        <div className="whitespace-normal">Credential ID: {credentialId}</div>
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
      </div>
    </div>
  )
}

export default function Certifications() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.2 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">Certifications</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el
              }}
              data-index={index}
              className={`transform transition-all duration-700 delay-${index * 100} ${
                visibleItems.includes(index) ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{cert.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h3>
                  <p className="text-blue-600 font-medium mb-1">{cert.issuer}</p>
                  <p className="text-gray-500 text-sm mb-3">Issued: {cert.date}</p>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <CredentialIdDisplay credentialId={cert.credentialId} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
