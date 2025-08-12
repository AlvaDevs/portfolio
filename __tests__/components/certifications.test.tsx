import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import Certifications from "@/components/certifications"
import { jest } from "@jest/globals"

// Mock IntersectionObserver
const mockIntersectionObserver = jest.fn()
mockIntersectionObserver.mockReturnValue({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
})

describe("Certifications", () => {
  beforeEach(() => {
    mockIntersectionObserver.mockClear()
  })

  it("renders certifications section", () => {
    render(<Certifications />)

    expect(screen.getByText("Certifications")).toBeInTheDocument()
    expect(screen.getByText("Digital Transformation with Google Cloud")).toBeInTheDocument()
    expect(screen.getByText("Get Started with Google Workspace Tools Skill Badge")).toBeInTheDocument()
  })

  it("displays certification details", () => {
    render(<Certifications />)

    expect(screen.getByText("Google Cloud Skills Boost")).toBeInTheDocument()
    expect(screen.getByText("LinkedIn")).toBeInTheDocument()
    expect(screen.getByText("2025")).toBeInTheDocument()
  })

  it("shows info icon for long credential IDs", () => {
    render(<Certifications />)

    const infoIcons = screen.getAllByText("🛈")
    expect(infoIcons.length).toBeGreaterThan(0)
  })

  it("displays tooltip on hover for credential IDs", () => {
    render(<Certifications />)

    const infoIcon = screen.getAllByText("🛈")[0]
    fireEvent.mouseEnter(infoIcon)

    // The tooltip should be visible (though we can't test the exact positioning)
    expect(infoIcon.parentElement).toHaveClass("relative")
  })

  it("has proper section id for navigation", () => {
    render(<Certifications />)

    const certificationsSection = screen.getByRole("region")
    expect(certificationsSection).toHaveAttribute("id", "certifications")
  })

  it("displays short credential IDs without info icon", () => {
    render(<Certifications />)

    // Short ID should be displayed directly
    expect(screen.getByText("Credential ID: 17289950")).toBeInTheDocument()
    expect(screen.getByText("Credential ID: 7e5c7081")).toBeInTheDocument()
  })

  it("truncates long credential IDs and shows info icon", () => {
    render(<Certifications />)

    // Long IDs should be truncated
    const truncatedIds = screen.getAllByText(/Credential ID: .+\.\.\./)
    expect(truncatedIds.length).toBeGreaterThan(0)
  })

  it("displays tooltip on hover for credential IDs", () => {
    render(<Certifications />)

    const infoIcon = screen.getAllByText("🛈")[0]
    expect(infoIcon).toBeInTheDocument()

    const container = infoIcon.parentElement
    expect(container).not.toBeNull()

    fireEvent.mouseEnter(container!) // ¡Ya verificaste que no es null!

    expect(container).toHaveClass("relative")
  })

  it("displays all certification icons", () => {
    render(<Certifications />)

    expect(screen.getByText("☁️")).toBeInTheDocument() // Google Cloud
    expect(screen.getByText("🛠️")).toBeInTheDocument() // Workspace Tools
    expect(screen.getByText("🏳️‍🌈")).toBeInTheDocument() // LGBTQI+
    expect(screen.getByText("👥")).toBeInTheDocument() // Gen Z Leadership
    expect(screen.getByText("📊")).toBeInTheDocument() // Excel
    expect(screen.getByText("🧠")).toBeInTheDocument() // Programming Fundamentals
    expect(screen.getByText("💼")).toBeInTheDocument() // Microsoft
    expect(screen.getByText("⚡")).toBeInTheDocument() // AWS
    expect(screen.getByText("📘")).toBeInTheDocument() // Programming Essentials
    expect(screen.getByText("🧩")).toBeInTheDocument() // Professional Skills
    expect(screen.getByText("🗣️")).toBeInTheDocument() // SmallTalk
  })

  it("sets up intersection observer for animations", () => {
    render(<Certifications />)

    expect(mockIntersectionObserver).toHaveBeenCalledWith(expect.any(Function), { threshold: 0.2 })
  })

  it("has proper grid layout", () => {
    render(<Certifications />)

    const certTitle = screen.getByText("Digital Transformation with Google Cloud")
    const certCard = certTitle.closest("div")
    expect(certCard).not.toBeNull()

    const gridContainer = certCard!.parentElement
    expect(gridContainer).not.toBeNull()

    expect(gridContainer!).toHaveClass("grid", "md:grid-cols-2", "lg:grid-cols-3")
  })

  it("certification cards have proper styling", () => {
    render(<Certifications />)

    const certCard = screen.getByText("Digital Transformation with Google Cloud").closest("div")
    expect(certCard).toHaveClass("bg-white", "rounded-2xl", "p-6", "shadow-lg", "h-full")
  })

  it("has hover effects on certification cards", () => {
    render(<Certifications />)

    const certCard = screen.getByText("Digital Transformation with Google Cloud").closest("div")
    expect(certCard).toHaveClass("hover:shadow-xl", "hover:-translate-y-1", "transition-all")
  })

  it("displays all issuers correctly", () => {
    render(<Certifications />)

    expect(screen.getAllByText("Google Cloud Skills Boost")).toHaveLength(2)
    expect(screen.getAllByText("LinkedIn")).toHaveLength(7)
    expect(screen.getByText("Microsoft")).toBeInTheDocument()
    expect(screen.getByText("SmallTalk2Me")).toBeInTheDocument()
  })

  it("displays all issue years", () => {
    render(<Certifications />)

    expect(screen.getAllByText("Issued: 2025")).toHaveLength(2)
    expect(screen.getAllByText("Issued: 2024")).toHaveLength(8)
    expect(screen.getByText("Issued: 2023")).toBeInTheDocument()
  })

  it("tooltip has proper styling and positioning", () => {
    render(<Certifications />)

    const certTitle = screen.getByText("Digital Transformation with Google Cloud")
    const certCard = certTitle.closest("div")
    expect(certCard).not.toBeNull()

    const tooltip = certCard!.querySelector(".group-hover\\:opacity-100")
    expect(tooltip).not.toBeNull()

    expect(tooltip!).toHaveClass(
      "absolute",
      "bottom-full",
      "left-1/2",
      "transform",
      "-translate-x-1/2",
      "z-50"
    )
  })

  it("credential ID display component handles edge cases", () => {
    render(<Certifications />)

    // Test that component handles both short and long IDs
    const credentialTexts = screen.getAllByText(/Credential ID:/)
    expect(credentialTexts.length).toBeGreaterThan(10) // Should have all 11 certifications
  })

  it("has proper semantic structure", () => {
    render(<Certifications />)

    const mainHeading = screen.getByRole("heading", { level: 2 })
    expect(mainHeading).toHaveTextContent("Certifications")

    const certHeadings = screen.getAllByRole("heading", { level: 3 })
    expect(certHeadings.length).toBe(11) // All certification names
  })
})
