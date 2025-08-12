import { render, screen } from "@testing-library/react"
import Experience from "@/components/experience"
import { jest } from "@jest/globals"

// Mock IntersectionObserver
const mockIntersectionObserver = jest.fn()
mockIntersectionObserver.mockReturnValue({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
})

describe("Experience", () => {
  beforeEach(() => {
    mockIntersectionObserver.mockClear()
  })

  it("renders experience section", () => {
    render(<Experience />)

    expect(screen.getByText("Experience")).toBeInTheDocument()
    expect(screen.getByText("Student Intern")).toBeInTheDocument()
    expect(screen.getByText("Intellsis")).toBeInTheDocument()
  })

  it("displays job details correctly", () => {
    render(<Experience />)

    expect(screen.getByText("Led development of scalable web applications.")).toBeInTheDocument()
    expect(screen.getByText("2023 - 2023")).toBeInTheDocument()
  })

  it("shows technology tags", () => {
    render(<Experience />)

    expect(screen.getByText("C++")).toBeInTheDocument()
    expect(screen.getByText("Rust")).toBeInTheDocument()
    expect(screen.getByText("WebAssembly")).toBeInTheDocument()
  })

  it("has proper section id for navigation", () => {
    render(<Experience />)

    const experienceSection = screen.getByRole("region")
    expect(experienceSection).toHaveAttribute("id", "experience")
  })

  it("sets up intersection observer for animations", () => {
    render(<Experience />)

    expect(mockIntersectionObserver).toHaveBeenCalledWith(expect.any(Function), { threshold: 0.2 })
  })

  it("applies proper styling to experience cards", () => {
    render(<Experience />)

    const experienceCard = screen.getByText("Student Intern").closest("div")
    expect(experienceCard).toHaveClass("bg-white", "rounded-2xl", "p-8", "shadow-lg")
  })

  it("has responsive layout classes", () => {
    render(<Experience />)

    const title = screen.getByText("Experience")
    expect(title).toHaveClass("text-4xl", "md:text-5xl")

    const jobTitle = screen.getByText("Student Intern")
    expect(jobTitle).toHaveClass("text-2xl", "font-bold")
  })

  it("technology tags have proper styling", () => {
    render(<Experience />)

    const cppTag = screen.getByText("C++")
    expect(cppTag).toHaveClass("px-3", "py-1", "bg-blue-100", "text-blue-700", "rounded-full")
  })

  it("experience card has hover effects", () => {
    render(<Experience />)

    const experienceCard = screen.getByText("Student Intern").closest("div")
    expect(experienceCard).toHaveClass("hover:shadow-xl", "hover:-translate-y-1", "transition-all")
  })

  it("has proper semantic structure", () => {
    render(<Experience />)

    const heading = screen.getByRole("heading", { level: 2 })
    expect(heading).toHaveTextContent("Experience")

    const jobHeading = screen.getByRole("heading", { level: 3 })
    expect(jobHeading).toHaveTextContent("Student Intern")
  })

  it("displays company and period information correctly", () => {
    render(<Experience />)

    const company = screen.getByText("Intellsis")
    expect(company).toHaveClass("text-lg", "text-blue-600", "font-medium")

    const period = screen.getByText("2023 - 2023")
    expect(period).toHaveClass("text-gray-500", "font-medium")
  })

  it("description has proper styling", () => {
    render(<Experience />)

    const description = screen.getByText("Led development of scalable web applications.")
    expect(description).toHaveClass("text-gray-600", "leading-relaxed")
  })

  it("handles multiple experience items with proper data attributes", () => {
    render(<Experience />)

    const experienceItems = screen.getAllByText(/Student Intern|Intellsis/)
    expect(experienceItems.length).toBeGreaterThan(0)
  })

  it("animation classes are applied correctly", () => {
    render(<Experience />)

    const experienceCard = screen.getByText("Student Intern").closest("div")
    expect(experienceCard).toHaveClass("transform", "transition-all", "duration-700")
  })
})
