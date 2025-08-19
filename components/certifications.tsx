"use client"

import { useEffect, useRef, useState } from "react"

const certifications = [
  {
    name: "Build a Website on Google Cloud",
    issuer: "Google",
    date: "2025",
    credentialId: "17604058",
    icon: "🌐",
    url: "https://www.cloudskillsboost.google/public_profiles/83fd1914-36d5-40dc-8849-b2220e283fdd/badges/17604058?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    name: "Digital Transformation with Google Cloud",
    issuer: "Google",
    date: "2025",
    credentialId: "17289950",
    icon: "🔄",
    url: "https://www.cloudskillsboost.google/public_profiles/83fd1914-36d5-40dc-8849-b2220e283fdd/badges/17289950?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    name: "Exploring Data Transformation with Google Cloud",
    issuer: "Google",
    date: "2025",
    credentialId: "17290159",
    icon: "📈",
    url: "https://www.cloudskillsboost.google/public_profiles/83fd1914-36d5-40dc-8849-b2220e283fdd/badges/17290159?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    name: "Future Ready Skills",
    issuer: "Google",
    date: "2025",
    credentialId: "17578370",
    icon: "🚀",
    url: "https://www.cloudskillsboost.google/public_profiles/83fd1914-36d5-40dc-8849-b2220e283fdd/badges/17578370?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    name: "Innovating with Google Cloud Artificial Intelligence",
    issuer: "Google",
    date: "2025",
    credentialId: "17327694",
    icon: "🤖",
    url: "https://www.cloudskillsboost.google/public_profiles/83fd1914-36d5-40dc-8849-b2220e283fdd/badges/17327694?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    name: "Introduction to Generative AI",
    issuer: "Google",
    date: "2025",
    credentialId: "17486159",
    icon: "🧬",
    url: "https://www.cloudskillsboost.google/public_profiles/83fd1914-36d5-40dc-8849-b2220e283fdd/badges/17486159?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    name: "Introduction to Large Language Models",
    issuer: "Google",
    date: "2025",
    credentialId: "17614699",
    icon: "🗣️",
    url: "https://www.cloudskillsboost.google/public_profiles/83fd1914-36d5-40dc-8849-b2220e283fdd/badges/17614699?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    name: "Introduction to Responsible AI",
    issuer: "Google",
    date: "2025",
    credentialId: "17615072",
    icon: "🧠",
    url: "https://www.cloudskillsboost.google/public_profiles/83fd1914-36d5-40dc-8849-b2220e283fdd/badges/17615072?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    name: "Level 1: Application Design and Delivery",
    issuer: "Google",
    date: "2025",
    credentialId: "17613948",
    icon: "🧩",
    url: "https://www.cloudskillsboost.google/public_profiles/83fd1914-36d5-40dc-8849-b2220e283fdd/badges/17613948?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    name: "Level 2: Building with Cloud Tools",
    issuer: "Google",
    date: "2025",
    credentialId: "17481428",
    icon: "🛠️",
    url: "https://www.cloudskillsboost.google/public_profiles/83fd1914-36d5-40dc-8849-b2220e283fdd/badges/17481428?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    name: "Level 3: Terraform Essentials",
    issuer: "Google",
    date: "2025",
    credentialId: "17550127",
    icon: "🌍",
    url: "https://www.cloudskillsboost.google/public_profiles/83fd1914-36d5-40dc-8849-b2220e283fdd/badges/17550127?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    name: "Microsoft Copilot para productividad",
    issuer: "Microsoft",
    date: "2025",
    credentialId: "bffe9ccd0ff8cd4294334402ffa09d45f75013200e3964cf845ce4dcf876b05d",
    icon: "🤝",
    url: "https://www.linkedin.com/learning/certificates/bffe9ccd0ff8cd4294334402ffa09d45f75013200e3964cf845ce4dcf876b05d",
  },
  {
    name: "Modernize Infrastructure and Applications with Google Cloud",
    issuer: "Google",
    date: "2025",
    credentialId: "17328956",
    icon: "🏗️",
    url: "https://www.cloudskillsboost.google/public_profiles/83fd1914-36d5-40dc-8849-b2220e283fdd/badges/17328956?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    name: "Prompt Design in Vertex AI",
    issuer: "Google",
    date: "2025",
    credentialId: "17617383",
    icon: "✍️",
    url: "https://www.cloudskillsboost.google/public_profiles/83fd1914-36d5-40dc-8849-b2220e283fdd/badges/17617383?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    name: "Responsible AI for Digital Leaders with Google Cloud",
    issuer: "Google",
    date: "2025",
    credentialId: "17617813",
    icon: "🛡️",
    url: "https://www.cloudskillsboost.google/public_profiles/83fd1914-36d5-40dc-8849-b2220e283fdd/badges/17617813?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    name: "Responsible AI: Applying AI Principles with Google Cloud",
    issuer: "Google",
    date: "2025",
    credentialId: "17617470",
    icon: "⚖️",
    url: "https://www.cloudskillsboost.google/public_profiles/83fd1914-36d5-40dc-8849-b2220e283fdd/badges/17617470?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    name: "Scaling with Google Cloud Operations",
    issuer: "Google",
    date: "2025",
    credentialId: "17352837",
    icon: "📊",
    url: "https://www.cloudskillsboost.google/public_profiles/83fd1914-36d5-40dc-8849-b2220e283fdd/badges/17352837?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    name: "Skills Boost Arcade Base Camp August 2025",
    issuer: "Google",
    date: "2025",
    credentialId: "17351182",
    icon: "🏕️",
    url: "https://www.cloudskillsboost.google/public_profiles/83fd1914-36d5-40dc-8849-b2220e283fdd/badges/17351182?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    name: "Skills Boost Arcade Trivia August 2025 Week 1",
    issuer: "Google",
    date: "2025",
    credentialId: "17492886",
    icon: "🎯",
    url: "https://www.cloudskillsboost.google/public_profiles/83fd1914-36d5-40dc-8849-b2220e283fdd/badges/17492886?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    name: "Skills Boost Arcade Trivia August 2025 Week 2",
    issuer: "Google",
    date: "2025",
    credentialId: "17532951",
    icon: "🎲",
    url: "https://www.cloudskillsboost.google/public_profiles/83fd1914-36d5-40dc-8849-b2220e283fdd/badges/17532951?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    name: "Skills Boost Arcade Trivia August 2025 Week 3",
    issuer: "Google",
    date: "2025",
    credentialId: "17579466",
    icon: "🧩",
    url: "https://www.cloudskillsboost.google/public_profiles/83fd1914-36d5-40dc-8849-b2220e283fdd/badges/17579466?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    name: "Skills Boost Arcade Trivia August 2025 Week 4",
    issuer: "Google",
    date: "2025",
    credentialId: "17580149",
    icon: "🕹️",
    url: "https://www.cloudskillsboost.google/public_profiles/83fd1914-36d5-40dc-8849-b2220e283fdd/badges/17580149?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    name: "Trust and Security with Google Cloud",
    issuer: "Google",
    date: "2025",
    credentialId: "17352591",
    icon: "🔐",
    url: "https://www.cloudskillsboost.google/public_profiles/83fd1914-36d5-40dc-8849-b2220e283fdd/badges/17352591?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    name: "Get Started with Google Workspace Tools",
    issuer: "Google",
    date: "2025",
    credentialId: "e85f6b4d-58d1-4957-b6a6-1fe87284ce3f",
    icon: "🧰",
    url: "https://www.cloudskillsboost.google/public_profiles/83fd1914-36d5-40dc-8849-b2220e283fdd/badges/16999262?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    name: "Cómo integrar la propia identidad LGBTQI+ en el ambiente de trabajo",
    issuer: "LinkedIn",
    date: "2024",
    credentialId: "349209252191d1b0ad4b378fb79528d9c229f3066563448d5f45feb0a503fcfd",
    icon: "🏳️‍🌈",
    url: "https://www.linkedin.com/learning/certificates/349209252191d1b0ad4b378fb79528d9c229f3066563448d5f45feb0a503fcfd",
  },
  {
    name: "Cómo liderar a la generación Z",
    issuer: "LinkedIn",
    date: "2024",
    credentialId: "df1d15592b166a891ba6923fdea9b77fbf88a8ff5dee3e5b82d47d95f850fe40",
    icon: "👥",
    url: "https://www.linkedin.com/learning/certificates/df1d15592b166a891ba6923fdea9b77fbf88a8ff5dee3e5b82d47d95f850fe40",
  },
  {
    name: "Excel esencial (Office 365/Microsoft 365)",
    issuer: "LinkedIn",
    date: "2024",
    credentialId: "8489891aa84efdde05a21afeab273b4ce692af1e5028fffec773a4b8c07205f3",
    icon: "📊",
    url: "https://www.linkedin.com/learning/certificates/8489891aa84efdde05a21afeab273b4ce692af1e5028fffec773a4b8c07205f3",
  },
  {
    name: "Fundamentos profesionales del desarrollo de software",
    issuer: "Microsoft",
    date: "2024",
    credentialId: "c3365be41efa7f3adf6472ab108911c63c9f9d79ef2ed9cf106fbbfb96eac5e9",
    icon: "💻",
    url: "https://www.linkedin.com/learning/certificates/c3365be41efa7f3adf6472ab108911c63c9f9d79ef2ed9cf106fbbfb96eac5e9",
  },
  {
    name: "Introducción a AWS: Conceptos de la nube",
    issuer: "LinkedIn",
    date: "2024",
    credentialId: "ba27be8313d3946a8bfe2dbde0992a96107ededa9b6f42355901bdc32bc052a9",
    icon: "☁️",
    url: "https://www.linkedin.com/learning/certificates/ba27be8313d3946a8bfe2dbde0992a96107ededa9b6f42355901bdc32bc052a9",
  },
  {
    name: "SmallTalk English Speaking Level Test",
    issuer: "SmallTalk2Me",
    date: "2023",
    credentialId: "7e5c7081",
    icon: "🗣️",
    url: "https://app.smalltalk2.me/cert/7e5c7081",
  },
]

const CredentialIdDisplay = ({ credentialId }: { credentialId: string }) => {
  const [showTooltip, setShowTooltip] = useState(false)
  const isLongId = credentialId.length > 15

  if (!isLongId) {
    return <p className="text-xs text-gray-400 text-center">Credential ID: {credentialId}</p>
  }

  const truncatedId = `${credentialId.substring(0, 12)}...`

  const handleInfoClick = () => {
    setShowTooltip(!showTooltip)
  }

  return (
    <div className="text-xs text-gray-400 text-center relative group">
      <span>Credential ID: {truncatedId}</span>
      <span
        className="ml-1 cursor-pointer text-blue-500 hover:text-blue-600 transition-colors"
        onClick={handleInfoClick}
      >
        🛈
      </span>

      <div
        className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50 shadow-lg max-w-xs break-all ${
          showTooltip ? "opacity-100" : ""
        }`}
      >
        <div className="whitespace-normal">Credential ID: {credentialId}</div>
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
      </div>
    </div>
  )
}

export default function Certifications() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const [showAllCertifications, setShowAllCertifications] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
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

  useEffect(() => {
    if (showAllCertifications) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [showAllCertifications])

  const displayedCertifications = certifications.slice(0, 9)
  const hasMoreCertifications = certifications.length > 9

  const handleCertificateClick = (url?: string) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer")
    }
  }

  const handleCloseModal = () => {
    setIsClosing(true)
    // Use setTimeout to handle animation completion reliably
    setTimeout(() => {
      setShowAllCertifications(false)
      setIsClosing(false)
    }, 300) // Match the animation duration
  }

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16 animate-fade-in-up">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCertifications.map((cert, index) => (
            <div
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el
              }}
              data-index={index}
              className={`transform transition-all duration-700 delay-${index * 100} ${
                visibleItems.includes(index)
                  ? "scale-100 opacity-100 translate-y-0"
                  : "scale-95 opacity-0 translate-y-8"
              }`}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-200/50 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full border border-gray-100 group">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                    {cert.icon}
                  </div>
                  <h3
                    className={`text-lg font-bold text-gray-900 mb-2 transition-all duration-300 relative overflow-hidden ${
                      cert.url ? "cursor-pointer hover:text-blue-600 hover:underline" : ""
                    }`}
                    onClick={() => handleCertificateClick(cert.url)}
                  >
                    {cert.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-1 transition-colors duration-300">{cert.issuer}</p>
                  <p className="text-gray-500 text-sm mb-3 transition-colors duration-300">Issued: {cert.date}</p>
                </div>

                <div className="border-t border-gray-100 transition-colors duration-300 pt-4">
                  <CredentialIdDisplay credentialId={cert.credentialId} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {hasMoreCertifications && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAllCertifications(true)}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-10 rounded-full transition-all duration-500 hover:scale-110 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 animate-pulse-subtle"
            >
              See More Certifications ({certifications.length - 9} more)
            </button>
          </div>
        )}

        {showAllCertifications && (
          <div
            className={`fixed inset-0 bg-black/20 backdrop-blur-md flex items-center justify-center p-4 z-50 ${
              isClosing ? "animate-fade-out" : "animate-fade-in"
            }`}
          >
            <button
              onClick={handleCloseModal}
              className="fixed top-8 right-8 w-12 h-12 bg-blue-600 hover:bg-red-600 rounded-full flex items-center justify-center text-white text-xl font-bold transition-all duration-300 hover:scale-110 hover:shadow-xl z-[60] shadow-lg"
            >
              <span className="leading-none flex items-center justify-center w-full h-full">×</span>
            </button>

            <div
              className={`bg-white/95 backdrop-blur-md rounded-3xl max-w-6xl max-h-[90vh] overflow-y-auto w-full shadow-2xl border border-white/20 relative ${
                isClosing ? "animate-scale-out" : "animate-scale-in"
              }`}
            >
              <div className="sticky top-0 bg-white/95 backdrop-blur-md p-8 pb-4 border-b border-gray-200/50">
                <h3 className="text-3xl font-bold text-gray-900 animate-fade-in-up">All Certifications</h3>
              </div>

              <div className="p-8 pt-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-200/50 group"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="text-center mb-3">
                        <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                          {cert.icon}
                        </div>
                        <h4
                          className={`text-base font-bold text-gray-900 mb-1 transition-all duration-300 relative overflow-hidden ${
                            cert.url ? "cursor-pointer hover:text-blue-600 hover:underline" : ""
                          }`}
                          onClick={() => handleCertificateClick(cert.url)}
                        >
                          {cert.name}
                        </h4>
                        <p className="text-blue-600 font-medium text-sm mb-1 transition-colors duration-300">
                          {cert.issuer}
                        </p>
                        <p className="text-gray-500 text-xs mb-2 transition-colors duration-300">Issued: {cert.date}</p>
                      </div>
                      <div className="border-t border-gray-200 transition-colors duration-300 pt-2">
                        <CredentialIdDisplay credentialId={cert.credentialId} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
