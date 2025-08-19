"use client"

import { useEffect, useRef, useState } from "react"

const certifications = [
  {
    name: "Build a Website on Google Cloud",
    issuer: "Google",
    date: "2025",
    credentialId: "17604058",
    icon: "🌐",
  },
  {
    name: "Digital Transformation with Google Cloud",
    issuer: "Google",
    date: "2025",
    credentialId: "17289950",
    icon: "🔄",
  },
  {
    name: "Exploring Data Transformation with Google Cloud",
    issuer: "Google",
    date: "2025",
    credentialId: "17290159",
    icon: "📈",
  },
  {
    name: "Future Ready Skills",
    issuer: "Google",
    date: "2025",
    credentialId: "17578370",
    icon: "🚀",
  },
  {
    name: "Innovating with Google Cloud Artificial Intelligence",
    issuer: "Google",
    date: "2025",
    credentialId: "17327694",
    icon: "🤖",
  },
  {
    name: "Introduction to Generative AI",
    issuer: "Google",
    date: "2025",
    credentialId: "17486159",
    icon: "🧬",
  },
  {
    name: "Introduction to Large Language Models",
    issuer: "Google",
    date: "2025",
    credentialId: "17614699",
    icon: "🗣️",
  },
  {
    name: "Introduction to Responsible AI",
    issuer: "Google",
    date: "2025",
    credentialId: "17615072",
    icon: "🧠",
  },
  {
    name: "Level 1: Application Design and Delivery",
    issuer: "Google",
    date: "2025",
    credentialId: "17613948",
    icon: "🧩",
  },
  {
    name: "Level 2: Building with Cloud Tools",
    issuer: "Google",
    date: "2025",
    credentialId: "17481428",
    icon: "🛠️",
  },
  {
    name: "Level 3: Terraform Essentials",
    issuer: "Google",
    date: "2025",
    credentialId: "17550127",
    icon: "🌍",
  },
  {
    name: "Microsoft Copilot para productividad",
    issuer: "Microsoft",
    date: "2025",
    credentialId: "bffe9ccd0ff8cd4294334402ffa09d45f75013200e3964cf845ce4dcf876b05d",
    icon: "🤝",
  },
  {
    name: "Modernize Infrastructure and Applications with Google Cloud",
    issuer: "Google",
    date: "2025",
    credentialId: "17328956",
    icon: "🏗️",
  },
  {
    name: "Prompt Design in Vertex AI",
    issuer: "Google",
    date: "2025",
    credentialId: "17617383",
    icon: "✍️",
  },
  {
    name: "Responsible AI for Digital Leaders with Google Cloud",
    issuer: "Google",
    date: "2025",
    credentialId: "17617813",
    icon: "🛡️",
  },
  {
    name: "Responsible AI: Applying AI Principles with Google Cloud",
    issuer: "Google",
    date: "2025",
    credentialId: "17617470",
    icon: "⚖️",
  },
  {
    name: "Scaling with Google Cloud Operations",
    issuer: "Google",
    date: "2025",
    credentialId: "17352837",
    icon: "📊",
  },
  {
    name: "Skills Boost Arcade Base Camp August 2025",
    issuer: "Google",
    date: "2025",
    credentialId: "17351182",
    icon: "🏕️",
  },
  {
    name: "Skills Boost Arcade Trivia August 2025 Week 1",
    issuer: "Google",
    date: "2025",
    credentialId: "17492886",
    icon: "🎯",
  },
  {
    name: "Skills Boost Arcade Trivia August 2025 Week 2",
    issuer: "Google",
    date: "2025",
    credentialId: "17532951",
    icon: "🎲",
  },
  {
    name: "Skills Boost Arcade Trivia August 2025 Week 3",
    issuer: "Google",
    date: "2025",
    credentialId: "17579466",
    icon: "🧩",
  },
  {
    name: "Skills Boost Arcade Trivia August 2025 Week 4",
    issuer: "Google",
    date: "2025",
    credentialId: "17580149",
    icon: "🕹️",
  },
  {
    name: "Trust and Security with Google Cloud",
    issuer: "Google",
    date: "2025",
    credentialId: "17352591",
    icon: "🔐",
  },
  {
    name: "Get Started with Google Workspace Tools",
    issuer: "Google",
    date: "2025",
    credentialId: "e85f6b4d-58d1-4957-b6a6-1fe87284ce3f",
    icon: "🧰",
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
    name: "Fundamentos profesionales del desarrollo de software",
    issuer: "Microsoft",
    date: "2024",
    credentialId: "c3365be41efa7f3adf6472ab108911c63c9f9d79ef2ed9cf106fbbfb96eac5e9",
    icon: "💻",
  },
  {
    name: "Introducción a AWS: Conceptos de la nube",
    issuer: "LinkedIn",
    date: "2024",
    credentialId: "ba27be8313d3946a8bfe2dbde0992a96107ededa9b6f42355901bdc32bc052a9",
    icon: "☁️",
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
