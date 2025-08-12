import { render, screen } from "@testing-library/react"
import Education from "@/components/education"
import { jest } from "@jest/globals"

// Mock IntersectionObserver
const mockIntersectionObserver = jest.fn()
mockIntersectionObserver.mockReturnValue({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
})

describe("Education", () => {
  beforeEach(() => {
    mockIntersectionObserver.mockClear()
  })

  it("renders education section", () => {
    render(<Education />)

    expect(screen.getByText("Education")).toBeInTheDocument()
    expect(screen.getByText("Systems and Computer Engineer")).toBeInTheDocument()
    expect(screen.getByText("Universidad Tecnológica de Bolívar")).toBeInTheDocument()
  })

  it("displays graduation period", () => {
    render(<Education />)

    expect(screen.getByText("2022 - 2027")).toBeInTheDocument()
  })

  it("shows program description", () => {
    render(<Education />)

    expect(screen.getByText(/Studying Systems and Computer Engineering/)).toBeInTheDocument()
  })

  it("has proper section id for navigation", () => {
    render(<Education />)

    const educationSection = screen.getByRole("region")
    expect(educationSection).toHaveAttribute("id", "education")
  })

  it("sets up intersection observer for animations", () => {
    render(<Education />)

    expect(mockIntersectionObserver).toHaveBeenCalledWith(expect.any(Function), { threshold: 0.2 })
  })

  it("has proper background styling", () => {
    render(<Education />)

    const section = screen.getByRole("region")
    expect(section).toHaveClass("bg-gray-50")
  })

  it("education card has proper styling", () => {
    render(<Education />)

    const educationCard = screen.getByText("Systems and Computer Engineer").closest("div")
    expect(educationCard).toHaveClass("bg-white", "rounded-2xl", "p-8", "shadow-lg", "h-full")
  })

  it("has graduation cap icon with proper styling", () => {
    render(<Education />)

    const educationCard = screen.getByText("Systems and Computer Engineer").closest("div")
    expect(educationCard).not.toBeNull()
    expect(educationCard).toHaveClass("bg-white", "rounded-2xl", "p-8", "shadow-lg", "h-full")

    const iconContainer = educationCard!.querySelector(".bg-gradient-to-br")
    expect(iconContainer).not.toBeNull()
    expect(iconContainer).toHaveClass("from-purple-500", "to-pink-500", "rounded-xl")
  })


  it("displays achievements list", () => {
    render(<Education />)

    expect(screen.getByText("Actively contributed to academic forums")).toBeInTheDocument()
  })

  it("achievement items have proper bullet styling", () => {
    render(<Education />)

    const achievementText = screen.getByText("Actively contributed to academic forums")
    const achievementItem = achievementText.parentElement
    expect(achievementItem).not.toBeNull()
    expect(achievementItem!).toHaveClass("flex", "items-center")

    const bullet = achievementItem!.querySelector(".bg-purple-500")
    expect(bullet).not.toBeNull()
    expect(bullet!).toHaveClass("w-2", "h-2", "rounded-full")
  })

  it("has responsive grid layout", () => {
    render(<Education />)

    const degreeText = screen.getByText("Systems and Computer Engineer")
    const educationCard = degreeText.closest("div")
    expect(educationCard).not.toBeNull()

    const gridContainer = educationCard!.parentElement
    expect(gridContainer).not.toBeNull()
    expect(gridContainer).toHaveClass("grid", "md:grid-cols-2")
  })

  it("title has responsive typography", () => {
    render(<Education />)

    const title = screen.getByText("Education")
    expect(title).toHaveClass("text-4xl", "md:text-5xl")
  })

  it("school name has proper styling", () => {
    render(<Education />)

    const school = screen.getByText("Universidad Tecnológica de Bolívar")
    expect(school).toHaveClass("text-lg", "text-purple-600", "font-medium")
  })

  it("period has proper styling", () => {
    render(<Education />)

    const period = screen.getByText("2022 - 2027")
    expect(period).toHaveClass("text-gray-500", "font-medium")
  })

  it("description has proper styling", () => {
    render(<Education />)

    const description = screen.getByText(/Studying Systems and Computer Engineering/)
    expect(description).toHaveClass("text-gray-600", "leading-relaxed")
  })

  it("has hover effects on education card", () => {
    render(<Education />)

    const educationCard = screen.getByText("Systems and Computer Engineer").closest("div")
    expect(educationCard).toHaveClass("hover:shadow-xl", "hover:-translate-y-1", "transition-all")
  })

  it("has proper semantic structure", () => {
    render(<Education />)

    const mainHeading = screen.getByRole("heading", { level: 2 })
    expect(mainHeading).toHaveTextContent("Education")

    const degreeHeading = screen.getByRole("heading", { level: 3 })
    expect(degreeHeading).toHaveTextContent("Systems and Computer Engineer")
  })
})
